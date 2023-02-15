const defaultMusic = new Audio('musicTraditional2.mp3')

const playMusic = () => {
    defaultMusic.currentTime = 0;
    defaultMusic.loop = true;
    defaultMusic.play();
}

const stopMusic = () => {
  defaultMusic.pause();
}


export {
  playMusic,
  stopMusic
}