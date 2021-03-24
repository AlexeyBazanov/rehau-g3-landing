import BaseComponent from "../base-component.js";
import Imask from "imask";

export default class PassportCheckForm extends BaseComponent {

    constructor(formSelector, idInputSelector, passportLinkSelector, hiddenClass = "is-invisible") {
        super();
        this._formSelector = formSelector;
        this._idInputSelector = idInputSelector;
        this._passportLinkSelector = passportLinkSelector;
        this._hiddenClass = hiddenClass;
        this._form = null;
        this._idInput = null;
        this._passportLink = null;
    }

    init() {
        this._form = document.querySelector(this._formSelector);
        this._idInput = document.querySelector(this._idInputSelector);
        this._passportLink = document.querySelector(this._passportLinkSelector);

        this._setMask();

        this._idInput.addEventListener("input", () => {
            this._setLinkValue();
        });

        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
            this._setLinkValue();
        });
    }

    _setLinkValue() {
        if(this._idInput.value.length == 14) {
            this._passportLink.classList.remove(this._hiddenClass);
            //TODO поменять ссылку
            this._passportLink.setAttribute("href", "/rehau-g3-landing/passport.html?p=h13vfv39nh1v8zv42");
        } else {
            this._passportLink.classList.add(this._hiddenClass);
        }
        //TOTO написать логику
    }

    _setMask() {
        IMask(this._idInput, {
            mask: "0000-0000-0000",
        });
    }
}