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
        const anchor = document.querySelector(link.getAttribute("href"));
        const anchorRect = anchor.getBoundingClientRect();
        const anchorBottomPosition = anchorRect.y + anchorRect.height + window.scrollY;

        console.log(anchor);
        console.log(anchorBottomPosition);

        window.scroll({
            top: anchorBottomPosition, 
            left: 0, 
            behavior: "smooth",
        });
    }
}