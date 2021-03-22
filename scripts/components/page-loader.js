import BaseComponent from "./base-component.js";


export default class PageLoader extends BaseComponent {
    constructor(loaderSelector, toggleClass) {
        super();
        this._loaderSelector = loaderSelector;
        this._toggleClass = toggleClass;
        this._loader = null;
    }

    init() {
        this._loader = document.querySelector(this._loaderSelector);
        this.toggle();
    }

    toggle() {
        this._loader.classList.toggle(this._toggleClass);
    }
}