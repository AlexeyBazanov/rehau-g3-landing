import Imask from "imask";
import BaseComponent from "./base-component.js";

export default class PassportCheckForm extends BaseComponent {
    constructor(form, input) {
        super();
        this._form = document.querySelector(form);
        this._input = document.querySelector(input);
    }

    init() {
        this._setMask();
    }

    _setMask() {
        IMask(this._input, {
            mask: "0000-0000-0000",
        });
    }
}