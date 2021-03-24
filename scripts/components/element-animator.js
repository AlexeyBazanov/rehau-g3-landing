import BaseComponent from "./base-component.js";

export class AnimateElement {
    constructor(selector, 
        animation,
        duration = 2,
        hideOnInit = false, 
        animateClass = "animate__animated", 
        animateTypeClass = "animate__",
        animateDelayClass = "animate__delay-",
        hiddenClass = "is-invisible") 
    {
        this._selector = selector;
        this._animation = animation;
        this._duration = duration;

        this._animateClass = animateClass;
        this._animateTypeClass = animateTypeClass;
        this._animateDelayClass = animateDelayClass;

        this._hideOnInit = hideOnInit;
        this._hiddenClass = hiddenClass;

        this._element = null;
        this._isAnimated = false;
    }

    init() {
        this._element = document.querySelector(this._selector);

        if(this._hideOnInit) {
            this._element.classList.add(this._hiddenClass);
        }
    }

    animate() {
        if(!this._isAnimated) {
            this._element.classList.remove(this._hiddenClass);
            this._isAnimated = true;
            this.getElement().classList.add(...this.getClasses());
            this.getElement().style.setProperty("--animate-duration", `${this._duration}s`);
            setTimeout(() => {
                this.getElement().classList.remove(...this.getClasses());
            }, this._duration * 1000);
        }
    }

    clear() {
        this._isAnimated = false;
        if(this._hideOnInit) {
            this._element.classList.add(this._hiddenClass);
        }
    }

    isAnimated() {
        return this._isAnimated;
    }
    
    getElement() {
        return this._element;
    }

    getClasses() {
        return [
            this._animateClass, 
            `${this._animateTypeClass}${this._animation}`,
        ];
    }
}

export default class ElementAnimator extends BaseComponent {
    constructor(animateElements = []) {
        super();
        this._animateElements = animateElements;
    }

    init() {
        for(let i = 0; i < this._animateElements.length; i++) {
            let animateElement = this._animateElements[i];
            animateElement.init();
        }
        window.setTimeout(() => {
            window.setInterval(() => { 
                this.animateElementsOnVisible(); 
                this.clearElementsOnScrollTop();
            }, 1000/60);
        }, 1000);

    }

    animateElementsOnVisible() {
        for(let i = 0; i < this._animateElements.length; i++) {
            let animateElement = this._animateElements[i];
            
            if(this.isElementInViewport(animateElement.getElement())) {
                animateElement.animate();
            } 
        }
    }

    clearElementsOnScrollTop() {
        for(let i = 0; i < this._animateElements.length; i++) {
            let animateElement = this._animateElements[i];
            if(window.scrollY === 0 && animateElement.isAnimated()) {
                animateElement.clear();
            }
        }
    }

    isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        let elemTop = rect.top;
        let elemBottom = rect.bottom;

        // Only completely visible elements return true:
        let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }
}