// 
const repeatButton = document.querySelector('.repeat-btn');
const previousButton = document.querySelector('.previous-btn');
const playButton = document.querySelector('.play-btn');
const nextButton = document.querySelector('.next-btn');
const volumeButton = document.querySelector('.volume-btn');
const currentTime = document.querySelector('.current-time');
const totalTime = document.querySelector('.total-time');
const songName = document.querySelector('.song-name');
const songCover = document.querySelector('.song-cover');
// console.log(songCover)

// Songs list
const playlist = [
    {
        id: 0,
        path: "./music/hey.mp3",
        cover: "./images/hey.jpg",
        name: "Hey!",
    },
    {
        id: 1,
        path: "./music/summer.mp3",
        cover: "./images/summer.jpg",
        name: "Summer!",
    },
    {
        id: 2,
        path: "./music/ukulele.mp3",
        cover: "./images/ukulele.jpg",
        name: "Ukulele!",
    },
    {
        id: 3,
        path: "./music/Maria.mp3",
        cover: "./images/song.jpg",
        name: "Maria",
    },
]

//
let currentSongIndex = 0
let isPlaying = false
let currentSong = new Audio()

// Event listeners
playButton.addEventListener("click", playOrPause)
nextButton.addEventListener("click", playNextSong)
previousButton.addEventListener("click", playPrevSong)
repeatButton.addEventListener("click", repeatSong)

// Functions

// Load the current song
loadSong()

function loadSong() {
    const song = playlist[currentSongIndex]
    const currentSongPath = song.path
    currentSong.src = currentSongPath
    songName.innerHTML = song.name
    songCover.src = song.cover
    setTimeout(() => {
        const totalTimeInSeconds = Math.round(currentSong.duration);
        const minutes = Math.floor(totalTimeInSeconds / 60);
        const seconds = totalTimeInSeconds % 60;
        totalTime.innerText = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    }, 150)

    // updateCurrentTime()
}

// Play or pause the current song
function playOrPause() {
    isPlaying ? pauseSong() : playSong()
}
// Play the song
function playSong() {
    // loadSong(currentSongIndex)
    currentSong.play()
    playButton.innerHTML = '<i class="fa-solid fa-pause fa-2x"></i>';
    isPlaying = true;
    updateCurrentTime()
}

// Pause the song
function pauseSong() {
    currentSong.pause()
    playButton.innerHTML = '<i class="ml-2 fa-solid fa-play fa-2x"></i>';
    isPlaying = false;
    updateCurrentTime()
}

// Play next song
function playNextSong() {
    pauseSong()
    if (currentSongIndex < playlist.length - 1) {
        currentSongIndex = currentSongIndex + 1;
    }
    loadSong()
}

function playPrevSong() {
    pauseSong()
    if (currentSongIndex > 0) {
        currentSongIndex = currentSongIndex - 1;
    }
    loadSong()
}

function repeatSong() {
    currentSong.load()
}

function curTime() {
    const currentTimeInSeconds = Math.floor(currentSong.currentTime)
    const minutes = Math.floor(currentTimeInSeconds / 60)
    const seconds = currentTimeInSeconds % 60
    currentTime.innerText = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    // setTimeout(() => {
    //     totalTime.innerText = Math.round(currentSong.duration)
    // }, 100)
}

function updateCurrentTime() {
    if (isPlaying) {
        setInterval(curTime, 100)
    }
}
