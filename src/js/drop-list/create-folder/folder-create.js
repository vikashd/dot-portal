class FolderCreate {
    constructor(container, { uppy }) {
        this.container = container;
        this.folderName = container.querySelector('#folder-name');
        this.submit = container.querySelector('#drop-file-submit');
        this.uppy = uppy;
    }

    init({ onSubmitHandler }) {
        this.folderName.addEventListener('input', () => {
            this.update();
        });

        this.submit.addEventListener('click', (e) => {
            e.preventDefault();

            if (this.isComplete()) {
                onSubmitHandler();
            }
        });

        this.uppy
            .on('file-added', () => {
                this.update();
            })
            .on('file-removed', () => {
                this.update();
            });
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
        if (this.isComplete()) {
            this.submit.removeAttribute('disabled');
        } else {
            this.submit.setAttribute('disabled', 'disabled');
        }
    }
}

export default FolderCreate;
