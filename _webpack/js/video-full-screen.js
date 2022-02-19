const init = () => {
    var fullscreenBtns = Array.prototype.slice.call(document.querySelectorAll("[data-vimeo-fs]"));

    fullscreenBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            var videoId = e.currentTarget.getAttribute("data-vimeo-fs");

            var video = document.querySelector(`iframe[src*="${videoId}"]`);

            if (video) {
                var player = new Vimeo.Player(video);

                player.requestFullscreen();
            }
        });
    });
};

init();
