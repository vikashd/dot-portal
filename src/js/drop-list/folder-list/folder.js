import dropdownMenu from '../components/drop-down-menu';
import FilesDelete from './delete';
import FilesDownload from './download';

class Folder {
    constructor(container) {
        this.container = container;
        this.selected = [];
        this.filesActions = [];
    }

    init({ actionHandler }) {
        this.actionHandler = actionHandler;
        this.filesDownload = new FilesDownload();

        this.filesDelete = new FilesDelete();
        this.filesDelete.init({
            onActionHandler: (action) => {
                this.actionHandler(action, { selected: this.selected });
            },
        });

        dropdownMenu(this.container, ({ id, action }) => {
            alert(`${action} ${id}`);
        });

        this.container.querySelectorAll('input[type=checkbox]').forEach((input) => {
            input.addEventListener('change', () => {
                this.updateSelected(input);
            });
        });

        this.filesActions = this.container.querySelectorAll('.js-files-actions');
        this.initFilesActions();
    }

    initFilesActions() {
        const filesActionsButtons = this.container.querySelectorAll('[data-files-action]');

        filesActionsButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();

                const {
                    dataset: { filesAction },
                } = e.currentTarget;

                switch (filesAction) {
                    case 'download':
                        this.filesDownload.show(this.selected);

                        break;
                    case 'delete':
                        this.filesDelete.show(this.selected);

                        break;
                }
            });
        });
    }

    updateSelected(input) {
        const {
            id,
            dataset: { name },
        } = input;
        const index = this.selected.findIndex(({ id: inputId }) => inputId === id);

        if (input.checked) {
            if (index === -1) {
                this.selected.push({ id, name });
            }
        } else if (!input.checked) {
            if (index > -1) {
                this.selected.splice(index, 1);
            }
        }

        this.update();
    }

    update() {
        this.filesActions.forEach((option) => {
            if (this.selected.length) {
                option.classList.remove('d-none');
            } else {
                option.classList.add('d-none');
            }
        });
    }
}

export default Folder;
