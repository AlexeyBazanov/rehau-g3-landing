import BaseComponent from "./base-component";
import Carousel from "./carousel";

export default class CarouselInitializer extends BaseComponent {

    constructor(carouselSelector = ".carousel", itemSelector = ".carousel__item",
        arrowLeftSelector = ".carousel__arrow--left", arrowRightSelector = ".carousel__arrow--right",
        hiddenClass = "is-hidden") 
    {
        super();
        this._carouselSelector = carouselSelector;
        this._itemSelector = itemSelector;
        this._arrowLeftSelector = arrowLeftSelector;
        this._arrowRightSelector = arrowRightSelector;
        this._hiddenClass = hiddenClass;
        this._carousels = [];
    }

    init() {
        const carousels = document.querySelectorAll(this._carouselSelector);

        for (var i = 0; i < carousels.length; i++) {
            let carousel = new Carousel(carousels[i], this._itemSelector, this._arrowLeftSelector, this._arrowRightSelector, this._hiddenClass);
            carousel.init();
            this._carousels.push(carousel);
        }
    }

    getCarousels() {
        return this._carousels;
    }
} 