import React from 'react';

const Doodle = ({ name, text }) => {
  switch (name) {
    case 'envelope':
      return (
        <div className="envelope-doodle">
          <div className="envelope-rect">
            <div className="envelope-v"></div>
            <div className="envelope-heart">❤</div>
          </div>
        </div>
      );
    case 'dashed-loop':
      return (
        <div className="dashed-loop">
          <svg width="100" height="60" viewBox="0 0 100 60">
            <path d="M10,10 Q40,0 40,30 T70,30 Q90,30 90,50" fill="none" stroke="black" strokeWidth="1" strokeDasharray="3,3" />
            <polygon points="90,50 85,45 95,45" fill="black" transform="rotate(130, 90, 50)" />
          </svg>
        </div>
      );
    case 'balloon':
      return (
        <div className="balloon-doodle">
          <div className="balloon-root">
            <div className="balloon-heart"></div>
            <div className="balloon-string"></div>
          </div>
        </div>
      );
    case 'hearts-top':
      return (
        <div className="hearts-top">
          <span className="tiny-heart">❤</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="large-heart">❤</span>
        </div>
      );
    case 'balloon-group':
      return (
        <div className="balloon-group">
          <div className="heart-balloon h1"></div>
          <div className="heart-balloon h2"></div>
          <div className="heart-balloon h3"></div>
          <div className="heart-balloon h4"></div>
        </div>
      );
    case 'purple-hearts-top':
      return (
        <div className="purple-hearts-top">
          <span className="p-heart">💜</span>
          <span className="p-heart s2">💜</span>
        </div>
      );
    case 'purple-hearts-bottom':
      return (
        <div className="purple-hearts-bottom">
          <span className="p-heart">💜</span>
        </div>
      );
    case 'exclamation-top':
      return <div className="exclamation-doodle top">!</div>;
    case 'exclamation-bottom':
      return <div className="exclamation-doodle bottom">!</div>;
    case 'purple-hearts-corner':
      return <div className="purple-hearts-corner">💜💜</div>;
    case 'flower':
      return (
        <div className="flower-doodle">
          <div className="flower-head"></div>
          <div className="flower-stem"></div>
        </div>
      );
    case 'blue-heart':
      return <div className="blue-heart-bottom">💙</div>;
    case 'yellow-spots':
      return (
        <>
          <div className="yellow-spot s1"></div>
          <div className="yellow-spot s2"></div>
        </>
      );
    case 'yellow-hearts-bottom':
      return (
        <div className="yellow-hearts-bottom">
          <span>💛</span><span>💛</span><span>💛</span>
        </div>
      );
    case 'red-heart-center':
      return <div className="red-heart-center">❤</div>;
    case 'circled-red-hebat':
      return (
        <div className="circled-red-text">
          <span className="handwritten">HEBAT</span>
        </div>
      );
    case 'cat':
      return (
        <div className="cat-doodle">
          <div className="cat-ears"></div>
        </div>
      );
    case 'smiley-pink':
      return (
        <div className="smiley-pink">
          <p className="handwritten">^ ^</p>
          <div className="smile-curve"></div>
        </div>
      );
    case 'earth-heart':
      return (
        <div className="earth-heart">
          <div className="earth-continent"></div>
        </div>
      );
    case 'textured-heart':
      return (
        <div className="textured-heart-wrap">
          <div className="textured-heart"></div>
          <div className="heart-signature handwritten">{text || "~ Name"}</div>
        </div>
      );
    case 'sun-cat':
      return <div className="sun-cat-doodle"></div>;
    case 'flower-stickers':
      return (
        <div className="flower-stickers">
          <div className="f-sticker s1"></div>
          <div className="f-sticker s2"></div>
        </div>
      );
    case 'side-heart':
      return (
        <div className="side-heart-wrap">
          <div className="side-heart"></div>
        </div>
      );
    case 'tulip':
      return (
        <div className="tulip-doodle">
          <div className="tulip-head"></div>
          <div className="tulip-leaf l1"></div>
          <div className="tulip-leaf l2"></div>
        </div>
      );
    case 'orange-bg-top':
      return (
        <div className="orange-bg-doodles">
          <div className="o-heart h1">💛</div>
          <div className="o-dot d1"></div>
          <div className="o-wavy w1"></div>
        </div>
      );
    case 'orange-bg-bottom':
      return (
        <div className="orange-bg-doodles bottom">
          <div className="o-heart h2">💛</div>
          <div className="o-wavy w2"></div>
        </div>
      );
    case 'red-hearts-corner':
      return <div className="red-hearts-corner">❤❤❤</div>;
    case 'ghost-flower':
      return (
        <div className="ghost-character flower">
          <div className="ghost-eyes">..</div>
          <div className="ghost-smile"></div>
          <div className="g-flower">✿</div>
        </div>
      );
    case 'ghost-blush':
      return (
        <div className="ghost-character blush">
          <div className="ghost-eyes x">{'><'}</div>
          <div className="ghost-mouth">3</div>
          <div className="g-blush"></div>
          <div className="g-heart">❤</div>
        </div>
      );
    case 'purple-hearts-bg-top':
      return <div className="purple-hearts-bg">💜💜</div>;
    case 'purple-hearts-bg-bottom':
      return <div className="purple-hearts-bg bottom">💜</div>;
    case 'purple-cloud':
      return (
        <div className="purple-cloud">
          <p className="handwritten">{text}</p>
        </div>
      );
    case 'circled-white-text':
      return (
        <div className="circled-white-text">
          <span className="handwritten">{text}</span>
        </div>
      );
    case 'circled-hebat':
        return <div className="circled-hebat">Super!</div>;
    default:
      return null;
  }
};

export default Doodle;
