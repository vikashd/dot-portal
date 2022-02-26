import FileUploader from '../../components/file-uploader';
import FilesSelect from './files-select';

const init = () => {
    const dropFiles = document.querySelector('[data-files-drop]');

    if (!dropFiles) {
        return;
    }

    const {
        dataset: { filesDrop: formId },
    } = dropFiles;

    const fileUpload = new FileUploader(dropFiles, formId);
    fileUpload.init({
        xhrUploadOptions: {
            endpoint: 'https://xhr-server.herokuapp.com/upload',
            formData: true,
            fieldName: 'files[]',
        },
    });

    const fs = new FilesSelect(dropFiles, { uppy: fileUpload.uppy });
    fs.init({
        onSubmitHandler: () => {
            console.log('submit');
        },
    });

    dropFiles.addEventListener('hidden.bs.modal', () => {
        fileUpload.reset();

        fs.reset();
    });
};

init();
