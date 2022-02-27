import FileUploader from '../../components/file-uploader';
import FileProgress from '../../components/file-progress';
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

    const fs = new FilesSelect(dropFiles.querySelector('#files-drop-select'), { uppy: fileUpload.uppy });
    const fp = new FileProgress(dropFiles.querySelector('#files-drop-upload-progress'));

    fs.init({
        onSubmitHandler: () => {
            fs.hide();
            fp.show();
            console.log('submit');
        },
    });

    dropFiles.addEventListener('hidden.bs.modal', () => {
        fileUpload.reset();

        fs.reset();
        fs.show();
        fp.hide();
    });
};

init();
