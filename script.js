const items = [
  {
    image: "Assets/mp3-ed.png",
    text: "No importa cuánto falte, sé exactamente cómo se va a sentir.",
    audio: "Songs/So.mp3"
  },
    {
    image: "Assets/mp3-ivory.png",
    text: "Esta canción me recuerda a cuando imaginé nuestro primer beso con esta banda sonando.",
    audio: "Songs/Go_Away.mp3"
  },
  {
    image: "Assets/mp3-humbe.png",
    text: "Pensé en este momento como uno de esos recuerdos que aún no existen, pero ya duelen.",
    audio: "Songs/BOHEMIA.mp3"
  },
  {
    image: "Assets/mp3-5.png",
    text: "No importa cuánto falte, sé exactamente cómo se va a sentir.",
    audio: "Songs/Land.mp3"
  },
  {
    image: "Assets/mp3-apolonio.png",
    text: "No importa cuánto falte, sé exactamente cómo se va a sentir.",
    audio: "Songs/Two.mp3"
  },
  {
    image: "Assets/mp3-maria.png",
    text: "No importa cuánto falte, sé exactamente cómo se va a sentir.",
    audio: "Songs/Vueltas.mp3"
  },
  {
    image: "Assets/mp3-frank.png",
    text: "No importa cuánto falte, sé exactamente cómo se va a sentir.",
    audio: "Songs/Frank.mp3"
  },
  {
    text: "Esta es la playlist que me imagino sonando cuando por fin estemos juntos.",
    type: "spotify"
  }
];

let currentIndex = 0;

const imageEl = document.getElementById("carousel-image");
const textEl = document.getElementById("carousel-text");
const buttons = document.querySelectorAll(".nav-btn");

const audioPlayer = new Audio();
audioPlayer.volume = 0.7; // ajusta volumen

const audioLabel = document.getElementById("audio-label");

audioLabel.textContent = `Sonando: ${items[currentIndex].audio}`;

const spotifyEmbed = document.getElementById("spotify-embed");



buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const direction = btn.dataset.direction;

    if (direction === "next") {
      currentIndex = (currentIndex + 1) % items.length;
    } else {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
    }

    updateContent();
  });
});

function updateContent() {
  const current = items[currentIndex];

  // Reset visual
  imageEl.classList.add("hidden");
  spotifyEmbed.classList.add("hidden");
  audioPlayer.pause();

  textEl.style.opacity = 0;

  setTimeout(() => {
    textEl.textContent = current.text;
    textEl.style.opacity = 1;

    if (current.type === "spotify") {
      // 🎶 mostrar Spotify
      spotifyEmbed.classList.remove("hidden");
    } else {
      // 🖼 mostrar imagen
      imageEl.src = current.image;
      imageEl.classList.remove("hidden");

      // 🔊 audio normal
      audioPlayer.src = current.audio;
      audioPlayer.currentTime = 0;
      audioPlayer.play().catch(() => {});
    }
  }, 200);
}
