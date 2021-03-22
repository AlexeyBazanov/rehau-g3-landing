export default class Carousel {
    constructor(carouselElement, itemSelector = ".carousel__item",
        arrowLeftSelector = ".carousel__arrow--left", arrowRightSelector = ".carousel__arrow--right",
        hiddenClass = "is-hidden")
    {
        this._activeCarousel = carouselElement;
        this._itemSelector = itemSelector;
        this._arrowLeftSelector = arrowLeftSelector;
        this._arrowRightSelector = arrowRightSelector;
        this._hiddenClass = hiddenClass;
        this._items = null;
        this._arrowLeft = null;
        this._arrowRight = null;
        this._currentItemIndex = 0;
    }

    init() 
    {
        this._items = this._activeCarousel.querySelectorAll(this._itemSelector);
        this._arrowLeft = this._activeCarousel.querySelector(this._arrowLeftSelector);
        this._arrowRight = this._activeCarousel.querySelector(this._arrowRightSelector);

        this._arrowLeft.addEventListener("click", (event) => {
            event.preventDefault();
            this.slideLeft();
        });

        this._arrowRight.addEventListener("click", (event) => {
            event.preventDefault();
            this.slideRight();
        });
    }

    slideLeft() {
        this._currentItemIndex -= 1;
        if(this._currentItemIndex < 0) {
            this._currentItemIndex = this._items.length - 1;
        }
        this._showItem(this._currentItemIndex);
    }

    slideRight() {
        this._currentItemIndex += 1;
        if(this._currentItemIndex > this._items.length - 1) {
            this._currentItemIndex = 0;
        }
        this._showItem(this._currentItemIndex);
    }

    _showItem(index) {
        this._hideItems();
        const item = this._items[index];
        if(item.classList.contains(this._hiddenClass)) {
            item.classList.remove(this._hiddenClass);
        }
    }

    _hideItems() {
        const hiddenClass = this._hiddenClass;
        this._items.forEach(item => {
            if(!item.classList.contains(hiddenClass)) {
                item.classList.add(hiddenClass);
            }
        });
    }
}