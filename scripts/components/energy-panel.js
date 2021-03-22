import BaseComponent from "./base-component";

export default class EnergyPanel extends BaseComponent {

    constructor(energyValueSelector, energyValueShownClass, minValue, maxValue, defaultValue) {
        super();

        this._energyValueSelector = energyValueSelector;
        this._energyValueShownClass = energyValueShownClass;
        this._minValue = minValue;
        this._maxValue = maxValue;
        this._defaultValue = defaultValue;
        this._energyValues = null;
        this._currentValue = null;
    }

    init() {
        this._energyValues = document.querySelectorAll(this._energyValueSelector);
        this.setValue(this._defaultValue);
    }

    setValue(value) {
        if(value < this._minValue || value > this._maxValue || value == this._currentValue) {
            return;
        }

        this._currentValue = value;

        this._hideAll();
        this._show(value);
    }

    _hideAll() {
        const shownCalss = this._energyValueShownClass;

        this._energyValues.forEach(energyValue => {
            if(energyValue.classList.contains(shownCalss)) {
                energyValue.classList.remove(shownCalss);
            }
        });
    }

    _show(value) {
        const shownCalss = this._energyValueShownClass;
        const energyValues = document.querySelectorAll(this._energyValueSelector+"__"+value);

        if(!energyValues.length) { return; }

        energyValues.forEach(energyValue => {
            if(!energyValue.classList.contains(shownCalss)) {
                energyValue.classList.add(shownCalss);
            }
        });
    }
}