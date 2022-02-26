import Uppy from '@uppy/core';
import Form from '@uppy/form';
import XHRUpload from '@uppy/xhr-upload';
import renderSelectedFiles from './render-selected-files';

class FileUploader {
    constructor(container, formId) {
        this.formId = formId;
        this.heading = container.querySelector('#drop-file-heading');
        this.fileInput = container.querySelector('#drop-file-upload');
        this.fileListContainer = container.querySelector('.uploaded-files ol');
    }

    init({ xhrUploadOptions }) {
        this.uppy = new Uppy({ debug: process.env.NODE_ENV === 'development', autoProceed: false });

        this.uppy
            .use(XHRUpload, xhrUploadOptions)
            .use(Form, { target: this.formId })
            .on('file-removed', () => {
                this.fileInput.value = null;
            });

        this.fileInput.addEventListener('change', (event) => {
            const files = Array.from(event.target.files);

            files.forEach((file) => {
                try {
                    this.uppy.addFile({
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

                this.update();
            });
        });
    }

    get uploader() {
        return this.uppy;
    }

    removeFile(e) {
        e.preventDefault();

        const {
            dataset: { id },
        } = e.currentTarget;

        this.uppy.removeFile(id);
        this.update();
    }

    reset() {
        this.uppy.reset();
        this.update();
    }

    upload() {
        console.log('upload');
        // this.uppy.upload();
    }

    update() {
        const files = this.uppy.getFiles();

        if (files.length) {
            this.heading.innerHTML = `${files.length} File(s)`;
        } else {
            this.heading.innerHTML = null;
        }

        renderSelectedFiles(this.uppy.getFiles(), this.fileListContainer, { onClick: this.removeFile.bind(this) });
    }
}

export default FileUploader;
