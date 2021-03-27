import BaseForm from "./base-form.js";
import Imask from "imask";

export default class ApplyForm extends BaseForm {
    getConstraints() {
        return {
            "call-apply__email": {
                presence: { message: "^Введите e-mail", },
                email: { message: "^Введите корректный e-mail", },
            },
            "call-apply__name": {
                presence: { message: "^Введите ФИО", },
            },
            "call-apply__phone": {
                presence: { message: "^Введите телефон", },
                format: {
                    pattern: "^\\+7 \\(\\d{3}\\)-\\d{3}-\\d{2}-\\d{2}$",
                    message: "^Введите корректный телефон",
                },
            },
            "call-apply__text": {
                presence: { message: "^Введите текст сообщения", },
            },
            "call-apply__agree": {
                inclusion: {
                    within: [true,],
                    message: "^Подтвердите обратботку персональных данных"
                },
            },
        };
    }

    _setMasks() {
        const phoneInput = this._form.querySelector("input[name=call-apply__phone]");
        Imask(phoneInput, {
            mask: "+7 (000)-000-00-00",
        });
    }
}