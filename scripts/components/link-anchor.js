import BaseComponent from "./base-component.js";

export default class LinkAnchor extends BaseComponent {
    constructor(link_class) {
        super();
        this._links = document.querySelectorAll(link_class);
    }

    init() {
        let that = this;
        this._links.forEach(function(link) {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                that._handleClick(link);
            });
        }); 
    }

    _handleClick(link) {
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    }
}