class FileProgress {
    constructor(container) {
        this.container = container;
        this.progressBar = container.querySelector('.progress-bar');
        this.ratio = 0;
    }

    updateProgress(ratio) {
        this.ratio = ratio;
        this.update();
    }

    show() {
        this.container.classList.remove('d-none');
    }

    hide() {
        this.container.classList.add('d-none');
    }

    reset() {
        this.updateProgress(0);
    }

    update() {
        const percentage = Math.round(this.ratio * 100);

        this.progressBar.style.width = `${percentage}%`;
        this.progressBar.setAttribute('aria-valuenow', percentage);
    }
}

export default FileProgress;
