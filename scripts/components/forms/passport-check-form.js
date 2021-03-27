import Imask from "imask";
import BaseForm from "./base-form.js";

export default class PassportCheckForm extends BaseForm {

    constructor(
        formSelector, 
        idInputSelector,
        passportLinkSelector,
        invisibleClass,
        fieldSelector = ".field", 
        controlSelector = ".control", 
        helpSelector = ".help",
        hidenClass = "is-hidden", 
        dangerClass = "is-danger") 
    {
        super(formSelector, fieldSelector, controlSelector, helpSelector, hidenClass, dangerClass);

        this._idInputSelector = idInputSelector;
        this._passportLinkSelector = passportLinkSelector;
        this._invisibleClass = invisibleClass;

        this._form = null;
        this._idInput = null;
        this._passportLink = null;
    }

    init() {
        this._idInput = document.querySelector(this._idInputSelector);
        this._passportLink = document.querySelector(this._passportLinkSelector);

        this._idInput.addEventListener("input", () => {
            if(this._idInput.value.length >= 14) {
                if(this._isLinkInvisible()) {
                    this._idInput.value = this._idInput.value.substring(0, 14);
                    this.validate();
                }
            } else {
                this._hideLink();
            }
        });

        super.init();
    }

    getConstraints() {
        return {
            "passport-check__number": {
                presence: { message: "^Введите номер паспорта", },
                format: {
                    pattern: "^\\d{4}-\\d{4}-\\d{4}$",
                    message: "^Введите корректный номер паспорта",
                },
            },
        };
    }
    _onSuccess() {
        this._setLinkValue();
    }

    _onErrors() {
        this._hideLink();
    }

    _setMasks() {
        Imask(this._idInput, {
            mask: "0000-0000-0000",
        });
    }

    _setLinkValue() {
        this._passportLink.classList.remove(this._invisibleClass);
        this._passportLink.setAttribute("href", "/rehau-g3-landing/passport.html?p=h13vfv39nh1v8zv42");
        //TOTO написать логику
    }

    _hideLink() {
        this._passportLink.classList.add(this._invisibleClass);
    }
    
    _isLinkInvisible() {
        return this._passportLink.classList.contains(this._invisibleClass);
    }
}