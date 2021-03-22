import BaseComponent from "./base-component.js";

export default class Overlay extends BaseComponent {

    constructor(openButtonSelector, closeButtonSelector, overlayClass = "overlay", hiddenClass = "is-hidden", overlayedClass = "is-open") {
        super();
        this._openButtonSelector = openButtonSelector;
        this._closeButtonSelector = closeButtonSelector;
        this._overlayClass = overlayClass;
        this._hiddenClass = hiddenClass;
        this._overlayedClass = overlayedClass;
        this._openButtons = null;
        this._closeButtons = null;
    }

    init() {
        this._openButtons = document.querySelectorAll(this._openButtonSelector);
        this._closeButtons = document.querySelectorAll(this._closeButtonSelector);

        this._openButtons.forEach(openButton => {
            openButton.addEventListener("click", (event) => {
                event.preventDefault();
                this._openOverlay(openButton);
            });
        });

        this._closeButtons.forEach(closeButton => {
            closeButton.addEventListener("click", (event) => {
                event.preventDefault();
                this._closeOverlay(closeButton);
            });
        });
    }

    _openOverlay(openButton) {
        const container = document.getElementById(openButton.dataset.target);
        const overlay = document.getElementById(openButton.dataset.overlay);
        
        if(!container || !overlay) { return; }

        if(container.classList.contains(this._overlayedClass)) {
            return;
        }

        container.classList.add(this._overlayedClass);

        this._toggleContainerChilds(container);
    }

    _closeOverlay(button) {
        const container = button.closest("."+this._overlayedClass); 
        
        if(!container) { return; }

        const overlay = container.querySelector("."+this._overlayClass);

        if(!overlay) { return; }

        this._toggleContainerChilds(container);

        container.classList.remove(this._overlayedClass);
    }

    _toggleContainerChilds(container) {
        for (var i = 0; i < container.children.length; i++) {
            container.children[i].classList.toggle(this._hiddenClass);
        }
    }
}