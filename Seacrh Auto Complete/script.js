"use strict";

const data = [
  {
    artist: "Drake",
    track: "In My Feelings",
  },
  {
    artist: "Ed Sheeran",
    track: "Shape of You",
  },
  {
    artist: "Billie Eilish",
    track: "Bad Guy",
  },
  {
    artist: "Post Malone",
    track: "Rockstar",
  },
  {
    artist: "Ariana Grande",
    track: "7 Rings",
  },
  {
    artist: "Lil Nas X",
    track: "Old Town Road",
  },
  {
    artist: "The Weeknd",
    track: "Blinding Lights",
  },
  {
    artist: "Camila Cabello",
    track: "Havana",
  },
  {
    artist: "Imagine Dragons",
    track: "Believer",
  },
  {
    artist: "Taylor Swift",
    track: "Shake It Off",
  },
  {
    artist: "Shawn Mendes",
    track: "Señorita",
  },
  {
    artist: "Bruno Mars",
    track: "Uptown Funk",
  },
  { artist: "Rihanna", track: "Work" },
  {
    artist: "Justin Bieber",
    track: "Sorry",
    image: "justin",
    streamed: 44332211,
  },
  { artist: "Katy Perry", track: "Roar" },
  {
    artist: "Cardi B",
    track: "Bodak Yellow",
  },
  { artist: "Maroon 5", track: "Sugar" },
  { artist: "Halsey", track: "Without Me" },
  { artist: "Dua Lipa", track: "New Rules" },
  {
    artist: "Imagine Dragons",
    track: "Radioactive",
  },
  {
    artist: "The Chainsmokers",
    track: "Closer",
  },
  {
    artist: "Sam Smith",
    track: "Stay with Me",
  },
  { artist: "Beyoncé", track: "Formation" },
  {
    artist: "Coldplay",
    track: "Viva La Vida",
  },
  { artist: "Sia", track: "Cheap Thrills" },
];

const availableKeywords = data.map((song) => [song.artist, song.track]).flat();

let results = [];

const resultBox = document.getElementById("result__box");
const input = document.getElementById("input");

input.addEventListener("input", () => {
    setTimeout(() => {
        const givenValue = input.value.trim().toLowerCase();

        if (!givenValue) {
            resultBox.classList.add("hidden");
            return;
        }
    
        results = availableKeywords.filter((keyword) => keyword.toLocaleLowerCase().includes(givenValue)).slice(0, 6);
        
        for (let i = results.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [results[i], results[j]] = [results[j], results[i]];
        }

        resultBox.innerHTML = "";
    
        results.forEach((result) => {
            const liElement = document.createElement("li");
            liElement.textContent = result;
            liElement.className =
                "text-slate-700 rounded-md p-4 cursor-pointer hover:bg-slate-200 transition-all duration-200";
    
            liElement.addEventListener("click", () => {
                input.value = result;
                resultBox.classList.add("hidden");
            });
    
            resultBox.classList.remove("hidden");
            resultBox.append(liElement);
        });
    }, 500);
});