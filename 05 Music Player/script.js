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
    }
]

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
const volumeSlider = document.querySelector('.volume-seeker');
const timeSlider = document.querySelector('.time-seeker');

// 
let currentSongIndex = 0
let isPlaying = false
let currentSong = new Audio()
let updateTime;
// let position = 0

// Event listeners
playButton.addEventListener("click", playOrPause)
nextButton.addEventListener("click", playNextSong)
previousButton.addEventListener("click", playPrevSong)
repeatButton.addEventListener("click", repeatSong)
volumeButton.addEventListener("click", toggleVolumeSlider)
volumeSlider.addEventListener("change", setVolume)
timeSlider.addEventListener("change", setSongDuration)
// Functions

// Load the current song
loadSong()

function loadSong() {
    clearInterval(updateTime)

    const song = playlist[currentSongIndex]
    const currentSongPath = song.path
    currentSong.src = currentSongPath
    songName.innerHTML = song.name
    songCover.src = song.cover


    // Update total time
    setTimeout(() => {
        const totalTimeInSeconds = Math.floor(currentSong.duration);
        const minutes = Math.floor(totalTimeInSeconds / 60);
        const seconds = totalTimeInSeconds % 60;
        totalTime.innerText = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    }, 150)

    // updateCurrentTime()
    updateTime = setInterval(updateSongDuration, 1000)

    currentSong.addEventListener("ended", playNextSong);
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
    // updateCurrentTime()
}

// Pause the song
function pauseSong() {
    currentSong.pause()
    playButton.innerHTML = '<i class="ml-2 fa-solid fa-play fa-2x"></i>';
    isPlaying = false;
    // updateCurrentTime()
}

// Play next song
function playNextSong() {
    // pauseSong()
    if (currentSongIndex < playlist.length - 1) {
        currentSongIndex = currentSongIndex + 1;
    }
    loadSong()
    playSong()
}

// Play previous song
function playPrevSong() {
    if (currentSongIndex > 0) {
        currentSongIndex = currentSongIndex - 1;
    }
    loadSong()
    playSong()
}

// Repeat the current song
function repeatSong() {
    currentSong.load()
    playSong()
}

// Show/hide volume slider
function toggleVolumeSlider() {
    volumeSlider.classList.toggle("hidden")
}

// Change the volume
function setVolume() {
    const volume = volumeSlider.value / 100
    currentSong.volume = volume
}

// Change the audio timeline
function setSongDuration() {
    currentSong.currentTime = timeSlider.value
}

function updateSongDuration() {

    timeSlider.max = Math.floor(currentSong.duration);

    if (!isNaN(currentSong.duration)) {

        // Update current time
        const currentTimeInSeconds = Math.floor(currentSong.currentTime)
        const minutes = Math.floor(currentTimeInSeconds / 60)
        const seconds = currentTimeInSeconds % 60
        currentTime.innerText = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`


        // Update the seekbar
        timeSlider.value = currentTimeInSeconds
    }
}