const init = () => {
    var videoBtns = Array.prototype.slice.call(document.querySelectorAll("[data-toggle-video]"));
    var modalEl = document.getElementById("modal-video");

    if (!modalEl) {
        return;
    }

    var modal = new bootstrap.Modal(modalEl);
    var iframe = modalEl.querySelector("iframe");

    videoBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            var src = e.currentTarget.getAttribute("data-toggle-video");

            iframe.src = src;
            modal.show();
        });
    });

    modalEl.addEventListener("hidden.bs.modal", function () {
        iframe.src = "";
    });
};

init();
