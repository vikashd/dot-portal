import FileUploader from '../file-uploader';
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

    const fileUpload = new FileUploader(dropCreate, formId);
    fileUpload.init({
        xhrUploadOptions: {
            endpoint: 'https://xhr-server.herokuapp.com/upload',
            formData: true,
            fieldName: 'files[]',
        },
    });

    const fc = new FolderCreate(dropCreate.querySelector('#folder-create-select'), { uppy: fileUpload.uploader });
    const gt = new GeneratedToken(dropCreate.querySelector('#folder-create-token'));

    fc.init({
        onSubmitHandler: () => {
            fc.hide();
            gt.show();
        },
    });

    gt.init({
        onSubmitHandler: () => {
            console.log('create');
            // fileUpload.upload();
        },
    });

    dropCreate.addEventListener('hidden.bs.modal', () => {
        fileUpload.reset();

        fc.reset();
        fc.show();
        gt.reset();
        gt.hide();
    });
};

init();
