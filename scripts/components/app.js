import TopNavbar from "./top-navbar.js";
import LinkAnchor from "./link-anchor.js";
import PassportCheckForm from "./passport-check-form.js";
import DealersMap from "./dealers-map.js";

export default class App {
    constructor() {
        this._components = [];

        this._components.push( new TopNavbar(".top-navbar__items", ".top-navbar__item", ".top-navbar__burger") );
        this._components.push( new LinkAnchor(".link-anchor") );
        this._components.push( new PassportCheckForm(".passport-check__form", ".passport-check__input") );
        this._components.push( new DealersMap("dealers-map__map") );
    }

    start() {
        this._components.forEach(function (component) {
            component.init();
        });
    }
}