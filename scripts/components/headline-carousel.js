import BaseComponent from "./base-component.js";

export default class HeadlineCarousel extends BaseComponent {
    constructor(bannerSelecor, bannerClasses = [], fadeClass, duration = 5) {
        super();
        this._bannerSelector = bannerSelecor;
        this._bannerClasses = bannerClasses;
        this._fadeClass = fadeClass;
        this._currentClassIndex = 0;
        this._duration = duration * 1000;
        this._banner = null;
    }

    init() {
        this._banner = document.querySelector(this._bannerSelector);

        window.setInterval(() => {
            this._banner.classList.add(this._fadeClass);
            window.setTimeout(() => {
                this._banner.classList.remove(this.getCurrentClass());
                this._banner.classList.add(this.getNextClass());

                window.setTimeout(() => {
                    this._banner.classList.remove(this._fadeClass);
                }, 500);
            }, 1000);
        },  this._duration);

    }

    getCurrentClass() {
        return this._bannerClasses[this._currentClassIndex];
    }

    getNextClass() {
        this._currentClassIndex += 1;
        if(this._currentClassIndex > this._bannerClasses.length - 1) {
            this._currentClassIndex = 0;
        }
        return this.getCurrentClass();
    }
}