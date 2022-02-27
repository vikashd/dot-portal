import Folder from './folder';
import FolderItem from './folder-item';
import FolderUnlock from './folder-unlock';
import './upload';

const unlockFolder = ({ id, token }) =>
    new Promise((resolve) => {
        console.log(id, token);
        resolve('done');
    });

const init = () => {
    const folders = document.querySelectorAll('[data-drop-folder]');

    if (!folders.length) {
        return;
    }

    const folderUnlock = document.querySelector('[data-folder-unlock]');
    let fl = undefined;

    if (folderUnlock) {
        fl = new FolderUnlock(folderUnlock);
        fl.init({
            onSubmitHandler: async ({ id, token }) => {
                await unlockFolder({ id, token });

                const folder = document.getElementById(id);

                return folder.href;
            },
        });
    }

    folders.forEach((folder) => {
        const {
            dataset: { dropFolder },
        } = folder;

        if (dropFolder === 'opened') {
            new Folder(folder).init({
                actionHandler: (action, args) => {
                    if (action === 'delete') {
                        console.log('Delete', args);
                    }
                },
            });
        } else {
            new FolderItem(folder).init({
                onClick: (id) => fl?.show(id),
            });
        }
    });
};

init();
