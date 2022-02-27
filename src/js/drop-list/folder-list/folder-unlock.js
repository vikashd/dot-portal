import { Modal } from 'bootstrap';

class FolderUnlock {
    constructor(container) {
        this.container = container;
        this.tokenField = container.querySelector('#token-unlock');
        this.showToken = container.querySelector('#show-token-unlock');
        this.submit = container.querySelector('#show-token-submit');
        this.form = container.querySelector('form');
        this.modal = new Modal(container);
    }

    init({ onSubmitHandler }) {
        this.tokenField.addEventListener('input', () => {
            if (this.tokenField.value.trim()) {
                this.submit.removeAttribute('disabled');
            } else {
                this.submit.setAttribute('disabled', 'disabled');
            }
        });

        this.showToken.addEventListener('change', () => {
            this.tokenField.setAttribute('type', this.showToken.checked ? 'text' : 'password');
        });

        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();

            try {
                const href = await onSubmitHandler({ id: this.id, token: this.tokenField.value });

                if (href) {
                    window.location.href = href;
                }
            } catch (e) {
                console.log('Token submit error');
            }
        });

        this.container.addEventListener('hidden.bs.modal', () => {
            this.reset();
        });
    }

    show(id) {
        this.id = id;
        this.modal.show();
    }

    reset() {
        this.tokenField.setAttribute('type', 'password');
        this.tokenField.value = '';
        this.showToken.checked = false;
        this.submit.setAttribute('disabled', 'disabled');
    }
}

export default FolderUnlock;
