const init = () => {
    const fullscreenBtns = Array.prototype.slice.call(document.querySelectorAll('[data-vimeo-fs]'));

    fullscreenBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const videoId = e.currentTarget.getAttribute('data-vimeo-fs');
            const video = document.querySelector(`iframe[src*="${videoId}"]`);

            if (video) {
                const player = new Vimeo.Player(video);

                player.requestFullscreen();
            }
        });
    });
};

init();
