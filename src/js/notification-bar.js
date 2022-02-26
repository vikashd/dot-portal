const init = () => {
    const bar = document.getElementById('notification-bar');

    if (!bar) {
        return;
    }

    const closeBtn = document.getElementById('notification-close');

    const resize = () => {
        document.body.style.paddingTop = bar.offsetHeight + 'px';
    };

    const close = () => {
        document.body.style.paddingTop = '';
        bar.style.transform = 'translateY(-100%)';

        bar.addEventListener('transitionend', () => {
            document.body.classList.remove('body-notification');
            window.removeEventListener('resize', resize);
            bar.style.visibility = 'hidden';
        });
    };

    document.body.classList.add('body-notification');
    document.body.style.paddingTop = bar.offsetHeight + 'px';
    bar.style.visibility = 'visible';
    bar.style.transform = 'translateY(0)';

    window.addEventListener('resize', resize);
    closeBtn.addEventListener('click', close);
};

init();
