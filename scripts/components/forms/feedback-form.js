import Imask from "imask";
import BaseForm from "./base-form.js";

export default class FeedbackForm extends BaseForm {
    getConstraints() {
        return {
            feedback__email: {
                presence: { message: "^Введите e-mail", },
                email: { message: "^Введите корректный e-mail", },
            },
            feedback__name: {
                presence: { message: "^Введите ФИО", },
            },
            feedback__phone: {
                presence: { message: "^Введите телефон", },
                format: {
                    pattern: "^\\+7 \\(\\d{3}\\)-\\d{3}-\\d{2}-\\d{2}$",
                    message: "^Введите корректный телефон",
                },
            },
            feedback__text: {
                presence: { message: "^Введите текст сообщения", },
            },
            feedback__agree: {
                inclusion: {
                    within: [true,],
                    message: "^Подтвердите обратботку персональных данных"
                },
            },
        };
    }

    _setMasks() {
        const phoneInput = this._form.querySelector("input[name=feedback__phone]");
        Imask(phoneInput, {
            mask: "+7 (000)-000-00-00",
        });
    }
}