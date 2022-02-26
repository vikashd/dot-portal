import Folder from './folder';
import './drop-files';

const init = () => {
    const folders = document.querySelectorAll('[data-drop-folder=opened]');

    if (!folders.length) {
        return;
    }

    folders.forEach((folder) => {
        new Folder(folder).init();
    });
};

init();
