import { Modal } from 'bootstrap';
import FileProgress from '../../components/file-progress';

class FilesDownload {
    constructor() {
        this.container = document.querySelector('[data-files-download]');

        if (!this.container) {
            return;
        }

        this.modal = new Modal(this.container);
        this.fp = new FileProgress(this.container.querySelector('#files-drop-progress'));

        this.container.addEventListener('show.bs.modal', () => {
            this.fp.show(this.files);
        });
        this.container.addEventListener('hidden.bs.modal', () => {
            this.fp.hide();
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

export default FilesDownload;
