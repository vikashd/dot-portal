const init = () => {
    const introVideo = document.getElementById('intro-video');

    if (!introVideo) {
        return;
    }

    const playBtnContainer = document.getElementById('btn-intro-video-play-container');
    const playBtn = document.getElementById('btn-intro-video-play');
    const player = new Vimeo.Player(introVideo);

    player.on('loaded', () => {
        playBtnContainer.classList.remove('d-none');
    });

    player.on('playing', () => {
        playBtnContainer.classList.add('is-playing');
    });

    player.on('pause', () => {
        playBtnContainer.classList.remove('is-playing');
    });

    player.on('bufferstart', () => {
        playBtn.classList.add('is-loading');
    });

    player.on('bufferend', () => {
        playBtn.classList.remove('is-loading');
    });

    playBtnContainer.addEventListener('click', () => {
        player.getPaused().then((paused) => {
            if (paused) {
                player.play();
            } else {
                player.pause();
            }
        });
    });
};

init();
