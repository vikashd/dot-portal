import dropdownMenu from '../components/drop-down-menu';
import Folder from './folder';
import './drop-files';

const init = () => {
    const folders = document.querySelectorAll('[data-drop-folder]');

    if (!folders.length) {
        return;
    }

    folders.forEach((folder) => {
        const {
            dataset: { dropFolder },
        } = folder;

        if (dropFolder === 'opened') {
            new Folder(folder).init();
        } else {
            dropdownMenu(folder, ({ id, action }) => {
                alert(`${action} ${id}`);
            });
        }
    });
};

init();
