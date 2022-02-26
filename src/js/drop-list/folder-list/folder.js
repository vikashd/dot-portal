import dropdownMenu from '../components/drop-down-menu';

class Folder {
    constructor(container) {
        this.container = container;
        this.selected = [];
        this.fileOptions = [];
        this.fileActions = [];
    }

    init() {
        dropdownMenu(this.container, ({ id, action }) => {
            alert(`${action} ${id}`);
        });

        this.container.querySelectorAll('input[type=checkbox]').forEach((input) => {
            input.addEventListener('change', () => {
                this.updateSelected(input);
            });
        });

        this.container.querySelectorAll('[data-file-actions] [data-action]').forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();

                const {
                    dataset: { action },
                } = e.currentTarget;

                alert(action);
            });
        });

        this.fileOptions = this.container.querySelectorAll('.js-file-options');
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
        this.fileOptions.forEach((option) => {
            if (this.selected.length) {
                option.classList.remove('d-none');
            } else {
                option.classList.add('d-none');
            }
        });
    }
}

export default Folder;
