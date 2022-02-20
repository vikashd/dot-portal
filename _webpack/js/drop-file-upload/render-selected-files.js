import createFileListItem from './create-file-list-item';

const renderSelectedFiles = (files, container, { onClick }) => {
    Array.from(container.childNodes).forEach((file) => {
        file.parentNode.removeChild(file);
    });

    files.forEach((file) => {
        container.appendChild(createFileListItem(file, { onClick }));
    });
};

export default renderSelectedFiles;
