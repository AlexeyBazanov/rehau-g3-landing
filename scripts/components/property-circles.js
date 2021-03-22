import ProgressBar from "../../node_modules/progressbar.js/dist/progressbar.js";
import BaseComponent from "./base-component.js";

export default class PropertyCircles extends BaseComponent {

    constructor(
        noiseCircleId, noisePercentTextId, 
        sunCirlceId, sunPercentTextId, 
        safeCircleId, safePercentTextId, 
        designCircleId, designPercentTextId, 
        noiseDefaultPercent = 50, sunDefaultPercent = 50, 
        safeDefaultPercent = 50, designDefaultPercent = 50) 
    {
        super();

        this._noiseCircleId = noiseCircleId;
        this._noisePercentTextId = noisePercentTextId;

        this._sunCirlceId = sunCirlceId;
        this._sunPercentTextId = sunPercentTextId;

        this._safeCircleId = safeCircleId;
        this._safePercentTextId = safePercentTextId;

        this._designCircleId = designCircleId;
        this._designPercentTextId = designPercentTextId;

        this._noiseDefaultPercent = noiseDefaultPercent;
        this._sunDefaultPercent = sunDefaultPercent;
        this._safeDefaultPercent = safeDefaultPercent;
        this._designDefaultPercent = designDefaultPercent;

        this._noiseProgressBar = null;
        this._sunProgressBar = null;
        this._safeProgressBar = null;
        this._designProgressBar = null;

        this._noicePercentText = null;
        this._sunPercentText = null;
        this._safePercentText = null;
        this._designPercentText = null;
    }

    init() {
        this._noiseProgressBar = new ProgressBar.Path(this._noiseCircleId, {
            easing: "easeInOut",
            duration: 800,
        });

        this._sunProgressBar = new ProgressBar.Path(this._sunCirlceId, {
            easing: "easeInOut",
            duration: 800,
        });

        this._safeProgressBar = new ProgressBar.Path(this._safeCircleId, {
            easing: "easeInOut",
            duration: 800,
        });

        this._designProgressBar = new ProgressBar.Path(this._designCircleId, {
            easing: "easeInOut",
            duration: 800,
        });

        this._noiseProgressBar.set(0);
        this._sunProgressBar.set(0);
        this._safeProgressBar.set(0);
        this._designProgressBar.set(0);
       
        this._noisePercentText = document.querySelector(this._noisePercentTextId);
        this._sunPercentText = document.querySelector(this._sunPercentTextId);
        this._safePercentText = document.querySelector(this._safePercentTextId);
        this._designPercentText = document.querySelector(this._designPercentTextId);

        this.setNoise(this._noiseDefaultPercent);
        this.setSun(this._sunDefaultPercent);
        this.setSafe(this._safeDefaultPercent);
        this.setDesign(this._designDefaultPercent);
    }

    //TODO решить вопрос с excetion при интенсивном вызове функции
    setNoise(percent) {
        this._noiseProgressBar.stop();
        this._noiseProgressBar.animate(this._getProgressBarValue(percent));
        this._noisePercentText.textContent = this._getPercentTextValue(percent);
    }
       

    setSun(percent) {
        this._sunProgressBar.stop();
        this._sunProgressBar.animate(this._getProgressBarValue(percent));
        this._sunPercentText.textContent = this._getPercentTextValue(percent);
    }

    setSafe(percent) {
        this._safeProgressBar.stop();
        this._safeProgressBar.animate(this._getProgressBarValue(percent));
        this._safePercentText.textContent = this._getPercentTextValue(percent);
    }

    setDesign(percent) {
        this._designProgressBar.stop();
        this._designProgressBar.animate(this._getProgressBarValue(percent));
        this._designPercentText.textContent = this._getPercentTextValue(percent);
    }

    _getProgressBarValue(percent) {
        return this._handlePercent(percent) * 0.01;
    }

    _getPercentTextValue(percent) {
        return this._handlePercent(percent) + "%";
    }

    _handlePercent(percent) {
        if(percent > 100) { percent = 100; }
        if(percent < 0) { percent = 0; }
        return percent;
    }
}