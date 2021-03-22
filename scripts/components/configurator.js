import noUiSlider from "../../node_modules/nouislider/distribute/nouislider.min.js";
import BaseComponent from "./base-component.js";

export default class Configurator extends BaseComponent {
    constructor(energySliderSelector, noiseSliderSelector, 
        sunSliderSelector, safeSliderSelector, designSliderSelector,
        energyMin = 1, energyMax = 7, energyDefault = 4,
        noiseMin = 1, noiseMax = 3, noiseDefault = 2, 
        sunMin = 1, sunMax = 3, sunDefault = 2, 
        safeMin = 1, safeMax = 3, safeDefault = 2, 
        designMin = 1, designMax = 3, designDefault = 2) 
    {
        super();
        
        this._energySliderSelector = energySliderSelector;
        this._noiseSliderSelector = noiseSliderSelector;
        this._sunSliderSelector = sunSliderSelector;
        this._safeSliderSelector = safeSliderSelector;
        this._designSliderSelector = designSliderSelector;

        this._energyMin = energyMin;
        this._energyMax = energyMax;
        this._energyDefault = energyDefault;

        this._noiseMin = noiseMin;
        this._noiseMax = noiseMax;
        this._noiseDefault = noiseDefault;

        this._sunMin = sunMin;
        this._sunMax = sunMax;
        this._sunDefault = sunDefault;

        this._safeMin = safeMin;
        this._safeMax = safeMax;
        this._safeDefault = safeDefault;

        this._designMin = designMin;
        this._designMax = designMax;
        this._designDefault = designDefault;

        this._energySlider = null;
        this._noiseSlider = null;
        this._sunSlider = null;
        this._safeSlider = null;
        this._designSlider = null;
    }

    init() {
        this._initEnergySlider();
        this._initNoiceSlider();
        this._initSunSlider();
        this._initSafeSlider();
        this._initDesignSlider();
    }

    _initEnergySlider() {
        this._energySlider = noUiSlider.create(document.querySelector(this._energySliderSelector), {
            start: this._energyDefault,
            connect: "lower",
            range: {
                "min": this._energyMin,
                "max": this._energyMax,
            },
        });

        this._energySlider.on("change", function (values) {
            window.app.getComponent("energyPanel").setValue(Math.round(values[0]));
        });
    }

    _initNoiceSlider() {
        this._noiseSlider = noUiSlider.create(document.querySelector(this._noiseSliderSelector), {
            start: this._noiseDefault,
            connect: "lower",
            range: {
                "min": 0,
                "max": this._noiseMax,
            },
        });

        this._noiseSlider.on("change", (values) => {
            let percentValue = this._getPercentValue(values[0], this._noiseMax);
            window.app.getComponent("propertyCircles").setNoise(percentValue);
        });
    }

    _initSunSlider() {
        this._sunSlider = noUiSlider.create(document.querySelector(this._sunSliderSelector), {
            start: this._sunDefault,
            connect: "lower",
            range: {
                "min": 0,
                "max": this._sunMax,
            },
        });

        this._sunSlider.on("change", (values) => {
            let percentValue = this._getPercentValue(values[0], this._sunMax);
            window.app.getComponent("propertyCircles").setSun(percentValue);
        });
    }

    _initSafeSlider() {
        this._safeSlider = noUiSlider.create(document.querySelector(this._safeSliderSelector), {
            start: this._safeDefault,
            connect: "lower",
            range: {
                "min": 0,
                "max": this._safeMax,
            },
        });

        this._safeSlider.on("change", (values) => {
            let percentValue = this._getPercentValue(values[0], this._safeMax);
            window.app.getComponent("propertyCircles").setSafe(percentValue);
        });
    }

    _initDesignSlider() {
        this._designSlider = noUiSlider.create(document.querySelector(this._designSliderSelector), {
            start: this._designDefault,
            connect: "lower",
            range: {
                "min": 0,
                "max": this._designMax,
            },
        });

        this._designSlider.on("change", (values) => {
            let percentValue = this._getPercentValue(values[0], this._designMax);
            window.app.getComponent("propertyCircles").setDesign(percentValue);
        });
    }

    _getPercentValue(current, max) {
        return Math.round(current / max * 100);
    }
}