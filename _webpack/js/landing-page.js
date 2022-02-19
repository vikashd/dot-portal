const init = () => {
    var introVideo = document.getElementById("intro-video");

    if (!introVideo) {
        return;
    }

    var playBtnContainer = document.getElementById("btn-intro-video-play-container");
    var playBtn = document.getElementById("btn-intro-video-play");
    var player = new Vimeo.Player(introVideo);

    player.on("loaded", function () {
        playBtnContainer.classList.remove("d-none");
    });

    player.on("playing", function () {
        playBtnContainer.classList.add("is-playing");
    });

    player.on("pause", function () {
        playBtnContainer.classList.remove("is-playing");
    });

    player.on("bufferstart", function () {
        playBtn.classList.add("is-loading");
    });

    player.on("bufferend", function () {
        playBtn.classList.remove("is-loading");
    });

    playBtnContainer.addEventListener("click", function () {
        player.getPaused().then(function (paused) {
            if (paused) {
                player.play();
            } else {
                player.pause();
            }
        });
    });
};

init();
