import { Modal } from 'bootstrap';

class FilesDelete {
    constructor() {
        this.container = document.querySelector('[data-files-delete]');

        if (!this.container) {
            return;
        }

        this.numberFilesToDeleteLabel = this.container.querySelectorAll('.js-delete-files-number');
        this.modal = new Modal(this.container);

        this.container.addEventListener('show.bs.modal', () => {
            this.numberFilesToDeleteLabel.forEach((label) => {
                label.innerHTML = `${this.files.length} file${this.files.length > 1 ? `s` : ''}`;
            });
        });
    }

    init({ onActionHandler }) {
        const buttons = this.container.querySelectorAll('[data-action]');

        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                const {
                    dataset: { action },
                } = e.currentTarget;

                onActionHandler(action);
            });
        });
    }

    show(files) {
        this.files = files;
        this.modal.show();
    }

    hide() {
        this.modal.hide();
    }
}

export default FilesDelete;
