import dropdownMenu from '../components/drop-down-menu';

class FolderItem {
    constructor(container) {
        this.container = container;
    }

    init({ onClick }) {
        dropdownMenu(this.container, ({ id, action }) => {
            alert(`${action} ${id}`);
        });

        this.container.addEventListener('click', (e) => {
            e.preventDefault();

            if (!e.target.closest('[data-bs-toggle=dropdown]') && !e.target.closest('.dropdown-menu')) {
                onClick(this.container.id);
            }
        });
    }
}

export default FolderItem;
