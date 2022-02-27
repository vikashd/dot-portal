import dropdownMenu from '../components/drop-down-menu';

class Folder {
    constructor(container) {
        this.container = container;
        this.selected = [];
        this.filesActions = [];
    }

    init({ actionHandler }) {
        this.actionHandler = actionHandler;

        dropdownMenu(this.container, ({ id, action }) => {
            alert(`${action} ${id}`);
        });

        this.container.querySelectorAll('input[type=checkbox]').forEach((input) => {
            input.addEventListener('change', () => {
                this.updateSelected(input);
            });
        });

        this.filesActions = this.container.querySelectorAll('.js-files-actions');

        this.initDeleteDialog();
    }

    initDeleteDialog() {
        const deleteFilesDialog = document.querySelector('#files-drop-delete');

        if (!deleteFilesDialog) {
            return;
        }

        const buttons = deleteFilesDialog.querySelectorAll('[data-action]');

        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                const {
                    dataset: { action },
                } = e.currentTarget;

                this.actionHandler(action, { selected: this.selected });
            });
        });
    }

    updateSelected(input) {
        const index = this.selected.indexOf(input.id);

        if (input.checked) {
            if (index === -1) {
                this.selected.push(input.id);
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
