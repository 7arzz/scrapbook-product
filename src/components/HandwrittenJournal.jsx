import React, { useState, useEffect } from 'react';
import './HandwrittenJournal.css';
import { journalData } from '../data/data';
import config from '../config';
import Doodle from './Doodle';
import AudioPlayer from './AudioPlayer';

const PageContent = ({ data, restart }) => {
  if (data.template === 'cover' || data.template === 'end-cover') {
    const sideClass = data.isBack ? 'journal-back back-cover' : 'journal-front';
    return (
      <div className={`${sideClass} leather-texture ${data.className || ''}`}>
        {data.title && <h2>{data.title}</h2>}
        {data.label && <div className="end-label">{data.label}</div>}
        {data.showRestart && (
          <button
            className="btn-restart-journal"
            onClick={(e) => {
              e.stopPropagation();
              restart();
            }}
          >
            {data.buttonText || "Restart Journey"}
          </button>
        )}
        {data.lines?.map((line, idx) => {
          if (line.type === 'br') return <br key={idx} />;
          if (line.type === 'doodle') return <Doodle key={idx} name={line.name} text={line.text} />;
          if (line.type === 'image') {
            return (
              <div key={idx} className={`photo-frame ${line.className || ''}`}>
                <img src={line.src} alt="Decoration" />
              </div>
            );
          }
          return (
            <p key={idx} className={line.className}>
              {line.spans ? (
                line.spans.map((span, sIdx) => (
                  <span key={sIdx} className={span.className}>
                    {span.text}
                  </span>
                ))
              ) : (
                line.text
              )}
            </p>
          );
        })}
      </div>
    );
  }

  if (data.template === 'blank') {
    return <div className="journal-back"></div>;
  }

  if (data.template === 'final') {
    const sideClass = data.isBack ? 'journal-back back-cover' : 'journal-front';
    return (
      <div className={`${sideClass} leather-texture final-page`}>
        <div className="note-content">
          <p className="handwritten">{data.text}</p>
          <div className="final-doodle">{data.doodle}</div>
        </div>
      </div>
    );
  }

  // Default lined paper template
  return (
    <div className={`${data.template === 'lined' ? 'lined-paper' : ''} ${data.isBack ? 'journal-back' : 'journal-front'}`}>
      {data.date && <div className="date-line">{data.date}</div>}
      <div className={`note-content ${data.pageClass || ''}`}>
        {data.lines?.map((line, idx) => {
          if (line.type === 'br') return <br key={idx} />;
          if (line.type === 'doodle') return <Doodle key={idx} name={line.name} text={line.text} />;
          if (line.type === 'image') {
            return (
              <div key={idx} className={`photo-frame ${line.className || ''}`}>
                <img src={line.src} alt="Memory" />
              </div>
            );
          }
          return (
            <p key={idx} className={line.className}>
              {line.spans ? (
                line.spans.map((span, sIdx) => (
                  <span key={sIdx} className={span.className}>
                    {span.text}
                  </span>
                ))
              ) : (
                line.text
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
};

const HandwrittenJournal = () => {
  const [currentLocation, setCurrentLocation] = useState(1);
  const [scale, setScale] = useState(1);
  const numOfPapers = journalData.length;
  const maxLocation = numOfPapers + 1;

  const updateScale = () => {
    const width = window.innerWidth;
    const baseBookWidth = width < 500 ? config.settings.bookWidthMobile : config.settings.bookWidth; 
    const margin = 15;
    const requiredWidth = (baseBookWidth * 2) + (margin * 2);

    if (width < requiredWidth) {
      const availableWidth = width - (margin * 2);
      setScale(availableWidth / (baseBookWidth * 2));
    } else {
      setScale(1);
    }
  };

  useEffect(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [currentLocation]);

  const goNextPage = () => {
    if (currentLocation < maxLocation) {
      setCurrentLocation(currentLocation + 1);
    }
  };

  const goPrevPage = () => {
    if (currentLocation > 1) {
      setCurrentLocation(currentLocation - 1);
    }
  };

  const restart = () => {
    setCurrentLocation(1);
  };

  const handleBookClick = (e) => {
    if (e.target.closest('.btn-restart-journal')) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x > rect.width / 2) {
      goNextPage();
    } else {
      goPrevPage();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrevPage();
      if (e.key === "ArrowRight") goNextPage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentLocation]);

  const getPageStyle = (index) => {
    const paperNum = index + 1;
    const isFlipped = currentLocation > paperNum;

    let zIndex;
    if (isFlipped) {
      zIndex = paperNum;
    } else {
      zIndex = numOfPapers - index;
    }

    return {
      zIndex,
      transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
      transition: `transform ${config.settings.flipSpeed || 0.6}s cubic-bezier(0.645, 0.045, 0.355, 1)`
    };
  };

  const finalBookStyle = () => {
    const currentBookWidth = window.innerWidth < 500 ? config.settings.bookWidthMobile : config.settings.bookWidth;
    const scaledHalf = (currentBookWidth * scale) / 2;
    let xPx = 0;

    if (currentLocation > 1 && currentLocation < maxLocation) {
      xPx = scaledHalf;
    } else if (currentLocation === maxLocation) {
      xPx = scaledHalf * 2;
    }

    return {
      width: `${currentBookWidth}px`,
      height: `${currentBookWidth * config.settings.aspectRatio}px`,
      transform: `translateX(${xPx}px) scale(${scale})`,
      transition: 'transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)'
    };
  };

  return (
    <div className="journal-wrapper" style={{
      '--leather-bg': config.theme.leatherColor,
      '--leather-text': config.theme.leatherTextColor,
      '--paper-bg': config.theme.paperColor,
      '--pencil-ink': config.theme.inkColor
    }}>
      <AudioPlayer />
      <div
        className="journal-book"
        style={finalBookStyle()}
        onClick={handleBookClick}
      >
        {journalData.map((paper, index) => (
          <div key={paper.id} className="journal-paper" style={getPageStyle(index)}>
            <PageContent data={{ ...paper.front, isBack: false }} restart={restart} />
            <PageContent data={{ ...paper.back, isBack: true }} restart={restart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HandwrittenJournal;
