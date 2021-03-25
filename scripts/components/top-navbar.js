import BaseComponent from "./base-component.js";
import Breakpoint from "../utils/breakpoint.js";

export default class TopNavbar extends BaseComponent {
    constructor(links_container, link, burger, 
        fixedLinksContainerClass = "top-navbar__items--fixed",
        fixedBurgerClass = "top-navbar__burger--fixed",
        fixedScrollPosition = 150) 
    {
        super();
        this._links_container = document.querySelector(links_container);
        this._link = document.querySelector(link);
        this._burger = document.querySelector(burger);
        this._fixedLinksContainerClass = fixedLinksContainerClass;
        this._fixedBurgerClass = fixedBurgerClass;
        this._fixedScrollPosition = fixedScrollPosition;
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

        window.setInterval(() => { 
            this._setMenuClassPosition();
        }, 1000/60);
    }

    _setMenuClassPosition() {
        if(window.scrollY > this._fixedScrollPosition) {
            this._links_container.classList.add(this._fixedLinksContainerClass);
            this._burger.classList.add(this._fixedBurgerClass);
        } else {
            this._links_container.classList.remove(this._fixedLinksContainerClass);
            this._burger.classList.remove(this._fixedBurgerClass);
        }
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