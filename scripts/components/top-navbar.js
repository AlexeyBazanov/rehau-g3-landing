import BaseComponent from "./base-component.js";
import Breakpoint from "../utils/breakpoint.js";

export default class TopNavbar extends BaseComponent {
    constructor(links_container, link, burger) {
        super();
        this._links_container = document.querySelector(links_container);
        this._link = document.querySelector(link);
        this._burger = document.querySelector(burger);
    }

    init() {
        if(!this._burger) { return; }

        this._burger.addEventListener("click", (event) => {
            event.preventDefault();
            this._handleBurgerClick();
        });

        window.addEventListener("resize", () => {
            this._removeExpandedOnDesktop();
        });
    }

    _handleBurgerClick() {
        this._links_container.classList.toggle("expanded");
    }

    _removeExpandedOnDesktop() {
        if(window.innerWidth > Breakpoint.Desktop) {
            this._links_container.classList.remove("expanded");
        }
    }
}