const songs = [
  {
    title: "StarBoy",
    artist: "The Weekend",
    src: "songs/song1.mp3",
    cover: "images/cover1.jpg"
  },
  {
    title: "NGL",
    artist: "KR$NA",
    src: "songs/song2.mp3",
    cover: "images/cover2.jpg"
  },
  {
    title: "No Cap",
    artist: "KR$NA",
    src: "songs/song3.mp3",
    cover: "images/cover3.jpg"
  }
];

let currentSong = 0;

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progress = document.getElementById('progress');
const cover = document.getElementById('cover');

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
}
loadSong(currentSong);

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸';
  } else {
    audio.pause();
    playBtn.textContent = '▶️';
  }
});

nextBtn.addEventListener('click', () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
  playBtn.textContent = '⏸';
});

prevBtn.addEventListener('click', () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
  playBtn.textContent = '⏸';
});

audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.value = percent;
});

progress.addEventListener('input', () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

audio.addEventListener('ended', () => {
  nextBtn.click();
});
