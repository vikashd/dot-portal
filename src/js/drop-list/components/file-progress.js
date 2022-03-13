import FolderAnimation from './folder-animation';

class FileProgress {
    constructor(container) {
        this.container = container;
        this.progressBar = this.container.querySelector('.progress-bar');
        this.progressPercentage = this.container.querySelector('.js-file-progress-percentage');
        this.currentFile = this.container.querySelector('.js-current-file');
        this.ratio = 0;
        this.folderAnim = new FolderAnimation(this.container.querySelector('[data-folder-anim]'));
    }

    updateProgress(ratio) {
        this.ratio = ratio;
        this.update();
    }

    show(files) {
        this.container.classList.remove('d-none');
        this.files = files;
        this.folderAnim.start();
        this.updateProgress(0);
    }

    hide() {
        this.container.classList.add('d-none');
        this.folderAnim.stop();
    }

    reset() {
        this.updateProgress(0);
    }

    update() {
        const percentage = Math.round(this.ratio * 100);

        this.progressBar.style.width = `${percentage}%`;
        this.progressBar.setAttribute('aria-valuenow', percentage);
        this.progressPercentage.innerHTML = `${percentage}%`;

        const fileIndex = Math.floor(this.ratio * this.files.length);
        const file = this.files[fileIndex];

        if (file) {
            const label = this.currentFile.querySelector('.file-progress-name');
            const fileNumber = this.currentFile.querySelector('.file-progress-number');

            label.innerHTML = file.name;
            fileNumber.innerHTML = `(${fileIndex + 1}/${this.files.length})`;
        }
    }
}

export default FileProgress;
