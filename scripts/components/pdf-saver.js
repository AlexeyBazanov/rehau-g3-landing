import BaseComponent from "./base-component.js";
import { jsPDF, } from "jspdf";

export default class PdfSaver extends BaseComponent {
    constructor(saveButtonSelector, rootElementSelector) {
        super();
        this._rootElementSelector = rootElementSelector;
        this._saveButtonSelector = saveButtonSelector;

        this._saveButton = null;
    }

    init() {
        this._saveButton = document.querySelector(this._saveButtonSelector);

        this._saveButton.addEventListener("click", (event) => {
            event.preventDefault();
            // const doc = new jsPDF();
            // const root = document.querySelector(this._rootElementSelector);
            // const html = root.innerHtml;

            // doc.fromHTML(html, 15, 15, {
            //     "width": 170,
            // });

            // doc.html(document.html, {
            //     // callback: function (doc) {
            //     //     doc.save();
            //     // },
            //     x: 10,
            //     y: 10,
            // }, function() {
            //     doc.save("passport.pdf");
            // });
        });
    }
}