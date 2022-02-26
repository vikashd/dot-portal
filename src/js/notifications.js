const init = () => {
    var notifications = Array.prototype.slice.call(document.querySelectorAll('[data-notification]'));

    function closeAlert(closeBtn, container, _e) {
        closeBtn.removeEventListener('click', this.click);
        container.parentNode.removeChild(container);
    }

    notifications.forEach(function (notification) {
        var closeBtn = notification.getElementsByClassName('btn-close')[0];

        if (closeBtn) {
            var listeners = {};
            listeners.click = closeAlert.bind(listeners, closeBtn, notification);
            closeBtn.addEventListener('click', listeners.click);
        }
    });
};

init();
