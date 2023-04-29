export default class MessagePanel {

    #element
    get element() { return this.#element }
    #messageElement
    #closeIconElement
    
    #currentTimeoutHandler

    constructor(selector) {
        this.#element = document.querySelector(selector);
        this.#element.style.display = "none";
        this.#messageElement = this.#element.querySelector('.message');
        this.#closeIconElement = this.#element.querySelector('.message-dismiss-icon');
    }

    displayMessage(message, onUserClosed , timeout) {
        this.close();
        this.#messageElement.innerHTML = message;
        if(!!onUserClosed) {
            this.#closeIconElement.onclick = ()=>{
                this.close();
                onUserClosed();
            }
        }else{
            this.#closeIconElement.onclick = ()=>{
                this.close();
            }
        }

        this.#element.style.display = "flex";
        if(typeof timeout === 'number'){
            this.#currentTimeoutHandler = () => {
                this.#element.style.display = "none";
            }
            setTimeout(this.#currentTimeoutHandler, timeout);
        }
    }

    close() {
        this.#element.style.display = "none";
        this.#closeIconElement.onclick = null;
        clearTimeout(this.#currentTimeoutHandler)
    }
}