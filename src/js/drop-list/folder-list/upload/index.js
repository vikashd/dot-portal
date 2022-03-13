import FileUploader from '../../components/file-uploader';
import FileProgress from '../../components/file-progress';
import FilesSelect from './files-select';

const init = () => {
    const container = document.querySelector('[data-files-drop]');

    if (!container) {
        return;
    }

    const {
        dataset: { filesDrop: formId },
    } = container;

    const fileUpload = new FileUploader(container, formId);
    fileUpload.init({
        xhrUploadOptions: {
            endpoint: 'https://xhr-server.herokuapp.com/upload',
            formData: true,
            fieldName: 'files[]',
        },
    });

    const fs = new FilesSelect(container.querySelector('#files-drop-select'), { uppy: fileUpload.uppy });
    const fp = new FileProgress(container.querySelector('#files-drop-progress'));

    fs.init({
        onSubmitHandler: () => {
            fs.hide();
            fp.show(fileUpload.uppy.getFiles().map(({ name }) => ({ name })));
            console.log('submit');
        },
    });

    container.addEventListener('hidden.bs.modal', () => {
        fileUpload.reset();

        fs.reset();
        fs.show();
        fp.hide();
    });
};

init();
