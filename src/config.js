const config = {
  title: "My Digital Scrapbook",
  description: "A beautiful interactive 3D digital scrapbook template",
  author: "Your name",
  theme: {
    primaryColor: "#5d4037", // Brown
    paperColor: "#fff9e6", 
    leatherColor: "#3d2314", // Dark brown leather
    leatherTextColor: "#e1b382", // Sand/gold text
    inkColor: "#2c3e50",
  },
  music: {
    enabled: true,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Demo music
    loop: true,
    volume: 0.5
  },
  settings: {
    bookWidth: 380,
    bookWidthMobile: 300,
    aspectRatio: 1.447, // 550/380
    flipSpeed: 0.6,
  }
};

export default config;
