import { Modal } from 'bootstrap';

const init = () => {
    const videoBtns = Array.prototype.slice.call(document.querySelectorAll('[data-toggle-video]'));
    const modalEl = document.getElementById('modal-video');

    if (!modalEl) {
        return;
    }

    const modal = new Modal(modalEl);
    const iframe = modalEl.querySelector('iframe');

    videoBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const src = e.currentTarget.getAttribute('data-toggle-video');

            iframe.src = src;
            modal.show();
        });
    });

    modalEl.addEventListener('hidden.bs.modal', () => {
        iframe.src = '';
    });
};

init();
