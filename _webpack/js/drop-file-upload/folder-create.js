import renderSelectedFiles from './render-selected-files';

class FolderCreate {
    constructor({ container, uppy }) {
        this.container = container;
        this.uppy = uppy;
        this.folderName = this.container.querySelector('#folder-name');
    }

    init({ onSubmitHandler }) {
        this.folderName.addEventListener('input', () => {
            this.update();
        });

        this.submit = this.container.querySelector('#drop-file-submit');
        this.submit.addEventListener('click', (e) => {
            e.preventDefault();

            onSubmitHandler();
        });
    }

    removeFile(e) {
        e.preventDefault();

        const {
            dataset: { id },
        } = e.currentTarget;

        this.uppy.removeFile(id);
        this.update();
    }

    show() {
        this.container.classList.remove('d-none');
    }

    hide() {
        this.container.classList.add('d-none');
    }

    reset() {
        this.folderName.value = '';
        this.update();
    }

    isComplete() {
        const name = this.folderName.value;

        return name.trim() !== '' && this.uppy.getFiles().length > 0;
    }

    update() {
        const heading = this.container.querySelector('#drop-file-heading');
        const fileListContainer = this.container.querySelector('.uploaded-files ol');
        const files = this.uppy.getFiles();

        renderSelectedFiles(files, fileListContainer, { onClick: this.removeFile.bind(this) });

        if (files.length) {
            heading.innerHTML = `${files.length} File(s)`;
        } else {
            heading.innerHTML = `No files`;
        }

        if (this.isComplete(uppy)) {
            this.submit.removeAttribute('disabled');
        } else {
            this.submit.setAttribute('disabled', 'disabled');
        }
    }
}

export default FolderCreate;
