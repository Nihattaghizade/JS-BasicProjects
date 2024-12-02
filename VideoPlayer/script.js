"use strict";

const playAndPause = document.getElementById("playAndPause");
const playAndPauseIcon = document.querySelector("#playAndPause img");

const durationInfo = document.getElementById("duration");
const currentTime = document.getElementById("currentTime");

const progressFill = document.getElementById("progress-fill");
const progressContainer = document.getElementById("progress-container");

const beforeTenSeconds = document.getElementById("before");
const afterTenSeconds = document.getElementById("after");

const screenSize = document.getElementById("screen");
const screenIcon = document.querySelector("#screen img");

const video = document.getElementById("musicVideo");

const videoContainer = document.getElementById("videoCon");

const iconsBar = document.getElementById("iconsBar");

const soundBar = document.getElementById("sound-bar");
const soundFill = document.getElementById("sound-fill");
const soundIcon = document.querySelector("#sound img");
const soundBtn = document.getElementById("sound");

let beforeSoundValue = 0;
let isMute = false;
let isPlaying = false;
let isFullScreen = false;

const playVideo = () => {
    video.play();
    isPlaying = true;
    playAndPauseIcon.src = "./assets/icons/pause.svg";
};

const pauseVideo = () => {
    video.pause();
    isPlaying = false;
    playAndPauseIcon.src = "./assets/icons/play.svg";
};

playAndPause.addEventListener("click", () => {
    isPlaying ? pauseVideo() : playVideo();
});

video.addEventListener("timeupdate", () => {
    const { currentTime: cTime, duration} = video;

    const minutes = Math.floor(cTime / 60);
    const seconds = Math.floor(cTime % 60);

    currentTime.textContent = `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
    progressFill.style.width = `${(cTime/duration) * 100}%`;
});

video.addEventListener("loadedmetadata", () => {
    const {duration} = video;

    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);

    durationInfo.textContent = `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
});

video.addEventListener("click", () => {
    isPlaying ? pauseVideo() : playVideo();
});

progressContainer.addEventListener("click", (event) => {
    const clicked = event.offsetX;
    const totalWidth = progressContainer.clientWidth;

    video.currentTime = (clicked/totalWidth) * video.duration;
});

beforeTenSeconds.addEventListener("click", () => {
    if(video.currentTime <= 10){
        video.currentTime = 0;
    } else {
        video.currentTime -= 10; 
    }
});

afterTenSeconds.addEventListener("click", () => {
    if(video.currentTime >= video.duration - 10){
        video.currentTime = video.duration;
    } else {
        video.currentTime += 10;
    }
});

document.addEventListener("keydown", function(event) {
    if(event.keyCode === 37) {
        if(video.currentTime <= 10){
            video.currentTime = 0;
        } else {
            video.currentTime -= 10; 
        }
    } else if(event.keyCode === 39){
        if(video.currentTime >= video.duration - 10){
            video.currentTime = video.duration;
        } else {
            video.currentTime += 10;
        }
    } else if(event.keyCode === 70){
        isFullScreen ? halfScreen() : fullScreen();
    } else if(event.keyCode === 27){
        if(isFullScreen){
            halfScreen();
        }
    } else if(event.keyCode === 32){
        isPlaying ? pauseVideo() : playVideo();
    } else if(event.keyCode === 48){
        video.currentTime = 0;
    } else if(event.keyCode === 77){
        if(video.volume > 0){
            mutedSound();
        }else if(video.volume == 0){
            anySound();
        }
    }
});

video.addEventListener("ended", () => {
    playAndPauseIcon.src = "./assets/icons/play.svg";
    isPlaying = false;
});

const fullScreen = () => {
    isFullScreen = true;
    screenIcon.src = "./assets/icons/half-screen.svg";
    videoContainer.style.width = "100%";
    videoContainer.style.height = "100%";
    iconsBar.style.width = "1258px";
    iconsBar.style.marginBottom = "-54px";
    progressContainer.style.width = "1218px";
    progressContainer.style.marginBottom = "-54px";
};

const halfScreen = () => {
    isFullScreen = false;
    screenIcon.src = "./assets/icons/full-screen.svg"
    videoContainer.style.width = "1100px";
    videoContainer.style.height = "600px";
    iconsBar.style.width = "1066px";
    iconsBar.style.marginBottom = "0";
    progressContainer.style.width = "1026px";
    progressContainer.style.marginBottom = "0";
};

screenSize.addEventListener("click", () => {
    isFullScreen ? halfScreen() : fullScreen();
});

soundBar.addEventListener("click", (event) => {
    const clickedVolume = event.offsetY;
    const totalHeight = soundBar.clientHeight;

    video.volume = (clickedVolume/totalHeight) * 1;
    beforeSoundValue = video.volume;

    soundFill.style.height = `${(clickedVolume / totalHeight) * 100}%`;
    console.log(video.volume);

    if(video.volume > 0 && video.volume <= 0.5){
        soundIcon.src = "./assets/icons/half-sound.svg";
    } else if(video.volume == 0){
        soundIcon.src = "./assets/icons/mute-sound.svg";
    } else{
        soundIcon.src = "./assets/icons/full-sound.svg";
    }
});

const anySound = () => {
    isMute = false;
    video.volume = 0 + beforeSoundValue;

    if(video.volume > 0 && video.volume < 0.5){
        soundIcon.src = "./assets/icons/half-sound.svg";
    } else if(video.volume >= 0.5){
        soundIcon.src = "./assets/icons/full-sound.svg";
    }

    console.log(video.volume);
};

const mutedSound = () => {
    isMute = true;
    soundIcon.src = "./assets/icons/mute-sound.svg";
    video.volume = 0;
};

soundBtn.addEventListener("click", () => {
    isMute ? anySound() : mutedSound();
});

