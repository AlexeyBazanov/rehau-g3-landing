import BaseComponent from "./base-component.js";

export default class Modal extends BaseComponent {
    constructor(modalSelector, modalOpenButtonSelector, modalCloseButtonSelector, 
        modalActiveClass = "is-active", htmlStopScrollClass = "is-clipped") 
    {
        super();
        this._modalSelector = modalSelector;
        this._modalOpenButtonSelector = modalOpenButtonSelector;
        this._modalCloseButtonSelector = modalCloseButtonSelector;
        this._modalActiveClass = modalActiveClass;
        this._htmlStopScrollClass = htmlStopScrollClass;
        this._modalOpenButtons = null;
        this._modalCloseButtons = null;
    }

    init() {
        this._modalOpenButtons = document.querySelectorAll(this._modalOpenButtonSelector);
        this._modalCloseButtons = document.querySelectorAll(this._modalCloseButtonSelector);
        this._handleOpenButtonsClick();
        this._handleCloseButtonsClick();
    }

    _handleOpenButtonsClick() {
        this._modalOpenButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                event.preventDefault();
                this._openModal(button);
            });
        });
    }

    _handleCloseButtonsClick() {
        this._modalCloseButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                event.preventDefault();
                this._closeModal(button);
            });
        });
    }

    _openModal(button) {
        const modal = document.getElementById(button.dataset.modal);
        this._toggleModal(modal);
    }

    _closeModal(button) {
        const modal = button.closest(this._modalSelector);
        this._toggleModal(modal);
    }

    _toggleModal(modal) {
        if(!modal) { return; }
        modal.classList.toggle(this._modalActiveClass);
        this._toggleHtmlScroll();
    }

    _toggleHtmlScroll() {
        document.documentElement.classList.toggle(this._htmlStopScrollClass);
    }
}