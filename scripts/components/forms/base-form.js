import BaseComponent from "../base-component";
import ValidateJS from "validate.js";

export default class BaseForm extends BaseComponent {
    
    constructor(formSelector, 
        fieldSelector = ".field", 
        controlSelector = ".control", 
        helpSelector = ".help",
        hidenClass = "is-hidden", 
        dangerClass = "is-danger") 
    {
        super();
        this._formSelector = formSelector;
        this._form = null;
        this._fieldSelector = fieldSelector;
        this._controlSelector = controlSelector;
        this._helpSelector = helpSelector;
        this._hiddenClass = hidenClass;
        this._dangerClass = dangerClass;
    }

    init() {
        this._form = document.querySelector(this._formSelector);
        
        this._setMasks();

        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.validate();
        });
    }

    validate() {
        const formValues = ValidateJS.collectFormValues(this._form);
        const errors = ValidateJS.validate(formValues, this.getConstraints());
        
        console.log(formValues);

        this._clearErrors();

        if(errors) {
            this._showErrors(errors);
            this._onErrors(errors);
            return false;
        } 

        this._onSuccess();
        return true;
    }

    getConstraints() {
        return {};
    }

    _onSuccess() {}

    _onErrors(errors) {}

    _setMasks() {}

    _showErrors(fields) {
        for (const [fieldName, errors,] of Object.entries(fields)) {
            let field = this._form.querySelector("."+fieldName);

            console.log(field);

            let help = this._getHelp(field);

            field.classList.add(this._dangerClass);
            field.closest(this._controlSelector).classList.add(this._dangerClass);

            help.classList.remove(this._hiddenClass);
            help.textContent = errors[0];
        }
    }

    _clearErrors() {
        const fields = this._form.elements;

        for(let i = 0; i < fields.length; i++) {
            let field = fields[i];

            if(field.classList.contains("button") || field.getAttribute("type") == "hidden") { continue; }
            
            let help = this._getHelp(field);

            field.classList.remove(this._dangerClass);
            field.closest(this._controlSelector).classList.remove(this._dangerClass);

            help.classList.add(this._hiddenClass);
        }
    }

    _getHelp(field) {
        return field.closest(this._fieldSelector).querySelector(this._helpSelector);
    }
}