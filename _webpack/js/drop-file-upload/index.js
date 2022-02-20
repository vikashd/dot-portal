import Uppy from '@uppy/core';
import Form from '@uppy/form';
import XHRUpload from '@uppy/xhr-upload';
import FolderCreate from './folder-create';
import GeneratedToken from './generated-token';

const init = () => {
    const dropCreate = document.querySelector('[data-folder-create]');

    if (!dropCreate) {
        return;
    }

    const {
        dataset: { folderCreate: formId },
    } = dropCreate;

    const dropCreateSelect = dropCreate.querySelector('#folder-create-select');
    const dropCreateToken = dropCreate.querySelector('#folder-create-token');
    const fileInput = dropCreate.querySelector('#drop-file-upload');
    const uppy = new Uppy({ debug: true, autoProceed: false });

    uppy.use(XHRUpload, {
        endpoint: 'https://xhr-server.herokuapp.com/upload',
        formData: true,
        fieldName: 'files[]',
    });

    uppy.use(Form, { target: formId });

    uppy.on('file-removed', () => {
        fileInput.value = null;
    });

    const fc = new FolderCreate({ container: dropCreateSelect, uppy });
    const gt = new GeneratedToken({ container: dropCreateToken });

    fc.init({
        onSubmitHandler: () => {
            fc.hide();
            gt.show();
        },
    });

    gt.init({
        onSubmitHandler: () => {
            console.log('create');
            // uppy.upload();
        },
    });

    dropCreate.addEventListener('hidden.bs.modal', (e) => {
        uppy.reset();

        fc.reset();
        fc.show();
        gt.reset();
        gt.hide();
    });

    fileInput.addEventListener('change', (event) => {
        const files = Array.from(event.target.files);

        files.forEach((file) => {
            try {
                uppy.addFile({
                    source: 'file input',
                    name: file.name,
                    type: file.type,
                    data: file,
                });
            } catch (err) {
                if (err.isRestriction) {
                    // handle restrictions
                    console.log('Restriction error:', err);
                } else {
                    // handle other errors
                    console.error(err);
                }
            }
        });

        fc.update();
    });
};

init();
