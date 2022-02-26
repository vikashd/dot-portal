const createFileListItem = (file, { onClick }) => {
    const { id, name: fileName } = file;

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(fileName));
    li.classList.add('drop-file-upload-item');

    const removeButton = document.createElement('button');
    removeButton.appendChild(document.createElement('span'));
    removeButton.classList.add('btn-close', 'sm');
    removeButton.setAttribute('data-id', id);
    removeButton.addEventListener('click', onClick);
    li.appendChild(removeButton);

    return li;
};

const renderSelectedFiles = (files, container, { onClick }) => {
    Array.from(container.childNodes).forEach((file) => {
        file.parentNode.removeChild(file);
    });

    files.forEach((file) => {
        container.appendChild(createFileListItem(file, { onClick }));
    });
};

export default renderSelectedFiles;
