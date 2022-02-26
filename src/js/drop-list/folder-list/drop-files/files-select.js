class FilesSelect {
    constructor(container, { uppy }) {
        this.container = container;
        this.uppy = uppy;
    }

    init({ onSubmitHandler }) {
        this.submit = this.container.querySelector('#drop-file-submit');
        this.submit.addEventListener('click', (e) => {
            e.preventDefault();

            onSubmitHandler();
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
        this.update();
    }

    isComplete() {
        return this.uppy.getFiles().length > 0;
    }

    update() {
        if (this.isComplete()) {
            this.submit.removeAttribute('disabled');
        } else {
            this.submit.setAttribute('disabled', 'disabled');
        }
    }
}

export default FilesSelect;
