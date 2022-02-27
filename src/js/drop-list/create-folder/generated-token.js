import { v4 as uuidv4 } from 'uuid';

class GeneratedToken {
    constructor(container) {
        this.container = container;
        this.showToken = container.querySelector('#show-token');
        this.tokenField = container.querySelector('#token');
        this.copyBtn = container.querySelector('#copy-btn');
    }

    init({ onSubmitHandler }) {
        this.showToken.addEventListener('change', () => {
            this.tokenField.setAttribute('type', this.showToken.checked ? 'text' : 'password');
        });

        this.copyBtn.addEventListener('click', (e) => {
            e.preventDefault();

            navigator.clipboard.writeText(this.tokenField.value);
        });

        this.submit = this.container.querySelector('#drop-file-create');
        this.submit.addEventListener('click', (e) => {
            e.preventDefault();

            onSubmitHandler();
        });

        this.tokenField.value = uuidv4();
    }

    show() {
        this.container.classList.remove('d-none');
    }

    hide() {
        this.container.classList.add('d-none');
    }

    generateToken() {
        return uuidv4();
    }

    reset() {
        this.tokenField.setAttribute('type', 'password');
        this.tokenField.value = this.generateToken();
        this.showToken.checked = false;
    }
}

export default GeneratedToken;
