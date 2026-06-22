/**
 * SCRAPBOOK DATA TEMPLATE
 * 
 * This file contains all the content for your scrapbook.
 * You can add as many pages as you want by adding objects to the `journalData` array.
 * 
 * Templates available:
 * - 'cover': Used for the front and back outer covers.
 * - 'lined': Standard lined paper for writing messages and adding images.
 * - 'blank': Empty page.
 * - 'final': Special final page with a unique layout.
 */

import favPerson from "../assets/fav-person.jpg";
import bintang from "../assets/bintang.png";
import loveBallon from "../assets/loveBallon.png";
import bumi from "../assets/bumi.png";
import kucing from "../assets/kucing.png";
import kucing1 from "../assets/kucing1.png";
import doodle from "../assets/doodle.png";
import doodle1 from "../assets/doodle1.png";
import doodle2 from "../assets/doodle2.png";
import doodle3 from "../assets/doodle3.png";

export const journalData = [
  {
    id: 1,
    front: {
      template: "cover",
      title: "Memories for :\n[Recipent Name]",
      className: "cover-main",
      lines: []
    },
    back: {
      template: "lined",
      pageClass: "page-1",
      lines: [
        { type: "text", text: "Hello there,", className: "handwritten large" },
        { type: "text", text: "This is a special digital scrapbook made just for you.", className: "handwritten" },
        {
          type: "text",
          text: "My favorite person",
          className: "handwritten bottom-txt",
        },
        { type: "doodle", name: "dashed-loop" },
        { type: "image", src: favPerson },
      ],
    },
  },
  {
    id: 2,
    front: {
      template: "lined",
      pageClass: "page-2",
      lines: [
        { type: "image", src: loveBallon, className: "sticker-right" },
        {
          type: "text",
          text: "Dear [Name],",
          className: "handwritten underlined-red",
        },
        {
          type: "text",
          text: "I wanted to share some ",
          className: "handwritten",
        },
        {
          type: "text",
          text: "precious moments with you.",
          className: "handwritten underlined-red",
        },
        { type: "br" },
        {
          type: "text",
          text: "Every page here holds a",
          className: "handwritten",
        },
        {
          type: "text",
          text: "memory we've cherished.",
          className: "handwritten",
        },
        { type: "text", text: ":)", className: "handwritten smiley" },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-3",
      lines: [
        { type: "doodle", name: "hearts-top" },
        {
          type: "text",
          text: "Wishing you a beautiful day",
          className: "handwritten underlined-red",
        },
        {
          type: "text",
          text: "filled with joy and laughter.",
          className: "handwritten underlined-red",
        },
        {
          type: "text",
          text: "You deserve the absolute best",
          className: "handwritten underlined-red",
        },
        {
          type: "text",
          text: "in everything you do.",
          className: "handwritten underlined-red",
        },
      ],
    },
  },
  {
    id: 3,
    front: {
      template: "lined",
      pageClass: "page-4",
      lines: [
        {
          type: "text",
          text: "I don't say it",
          className: "handwritten center-txt",
        },
        {
          type: "text",
          text: "often enough,",
          className: "handwritten center-txt",
        },
        {
          type: "text",
          text: "but you mean",
          className: "handwritten center-txt",
        },
        {
          type: "text",
          text: "the world to me.",
          className: "handwritten center-txt",
        },
        {
          type: "image",
          src: bintang,
          className: "doodle-image",
        },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-5",
      lines: [
        { type: "doodle", name: "purple-hearts-top" },
        {
          type: "text",
          text: "May all your",
          spans: [
            { text: "May all", className: "circled-purple" },
            { text: " your" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "deepest dreams come true,",
          spans: [
            { text: "deepest " },
            { text: "dreams", className: "underlined-purple" },
            { text: " come true," },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "and may you always find",
          className: "handwritten",
        },
        {
          type: "text",
          text: "happiness in the",
          className: "handwritten underlined-purple",
        },
        { type: "text", text: "little things.", className: "handwritten" },
        { type: "doodle", name: "purple-hearts-bottom" },
      ],
    },
  },
  {
    id: 4,
    front: {
      template: "lined",
      pageClass: "page-6",
      lines: [
        {
          type: "text",
          text: "Always remember",
          spans: [
            { text: "Always", className: "circled-blue" },
            { text: " remember" },
          ],
          className: "handwritten blue-ink",
        },
        {
          type: "text",
          text: "how incredible you are.",
          className: "handwritten blue-ink",
        },
        {
          type: "text",
          text: "Your strength and",
          className: "handwritten blue-ink",
        },
        {
          type: "text",
          text: "kindness inspire me",
          spans: [
            { text: "kindness", className: "underlined-blue" },
            { text: " inspire me" },
          ],
          className: "handwritten blue-ink",
        },
        {
          type: "text",
          text: "every single day.",
          className: "handwritten blue-ink",
        },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-7",
      lines: [
        { type: "doodle", name: "exclamation-top" },
        {
          type: "text",
          text: "Success is following",
          spans: [
            { text: "Success", className: "circled-orange" },
            { text: " is following" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "your own path,",
          spans: [
            { text: "your " },
            { text: "own path,", className: "circled-orange" },
          ],
          className: "handwritten",
        },
        { type: "text", text: "and I'm sure you", className: "handwritten" },
        {
          type: "text",
          text: "will reach the top",
          spans: [
            { text: "reach the " },
            { text: "top", className: "circled-orange" },
          ],
          className: "handwritten",
        },
        {
          type: "image",
          src: kucing,
          className: "doodle-image",
        },
      ],
    },
  },
  {
    id: 5,
    front: {
      template: "lined",
      pageClass: "page-8",
      lines: [
        {
          type: "text",
          text: "Keep growing,",
          spans: [
            { text: "Keep " },
            { text: "growing,", className: "circled-purple" },
          ],
          className: "handwritten",
        },
        { type: "text", text: "I'll be here to see you", className: "handwritten" },
        {
          type: "text",
          text: "achieve greatness",
          spans: [
            { text: "achieve", className: "circled-purple" },
            { text: " greatness" },
          ],
          className: "handwritten",
        },
        { type: "text", text: "from near or far.", className: "handwritten" },
        {
          type: "text",
          text: "I am always",
          spans: [
            { text: "I am ", className: "circled-purple" },
            { text: "always", className: "circled-purple" },
          ],
          className: "handwritten",
        },
        { type: "text", text: "going to be the one", className: "handwritten" },
        {
          type: "text",
          text: "who's proud of you.",
          spans: [
            { text: "proud", className: "circled-purple" },
            { text: " of you." },
          ],
          className: "handwritten",
        },
        { type: "doodle", name: "purple-hearts-corner" },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-9",
      lines: [
        { type: "text", text: "May the universe", className: "handwritten" },
        { type: "text", text: "always protect your", className: "handwritten" },
        { type: "text", text: "smile and your heart,", className: "handwritten" },
        {
          type: "text",
          text: "you deserve all the",
          className: "handwritten",
        },
        {
          type: "text",
          text: "happiness in the world.",
          className: "handwritten",
        },
        {
          type: "image",
          src: doodle,
          className: "doodle-image",
        },
      ],
    },
  },
  {
    id: 6,
    front: {
      template: "lined",
      pageClass: "page-26",
      lines: [
        {
          type: "text",
          text: "Thank you",
          className: "handwritten center-txt large",
        },
        {
          type: "text",
          text: "for being part of",
          className: "handwritten center-txt",
        },
        {
          type: "text",
          text: "my life journey.",
          className: "handwritten center-txt",
        },
      ],
    },
    back: {
        template: "cover",
        label: "The End",
        className: "cover-end",
        showRestart: true,
        buttonText: "Restart Memoir",
        lines: [
          { type: "doodle", name: "textured-heart", text: "~ Author Name" }
        ]
      },
  },
];
