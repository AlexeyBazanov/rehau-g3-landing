import BaseComponent from "./base-component.js";

export default class ApplyButton extends BaseComponent {
    constructor(buttonSelector, applyTabSelector, solutionInputSelector) {
        super();
        this._buttonSelector = buttonSelector;
        this._applyTabSelector = applyTabSelector;
        this._solutionInputSelector = solutionInputSelector;

        this._buttons = null;
        this._applyTab = null;
        this._solutionInput = null;
    }

    init() {
        this._buttons = document.querySelectorAll(this._buttonSelector);
        this._applyTab = document.querySelector(this._applyTabSelector);
        this._solutionInput = document.querySelector(this._solutionInputSelector);

        this._buttons.forEach(button => {
            button.addEventListener("click", () => {
                this.setSolutionInputValue(button);
                this.openTab();
            });
        });
    }

    openTab() {
        window.app.getComponent("tabs").handleTabClick(this._applyTab);
    }

    setSolutionInputValue(button) {
        this._solutionInput.value = button.dataset.value;
    }
}