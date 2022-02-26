import dropdownMenu from './drop-down-menu';

const init = () => {
    const folders = document.querySelectorAll('[data-drop-folder=closed]');

    if (!folders.length) {
        return;
    }

    folders.forEach((folder) => {
        dropdownMenu(folder, ({ id, action }) => {
            alert(`${action} ${id}`);
        });
    });
};

init();
