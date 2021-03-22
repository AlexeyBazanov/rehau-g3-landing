export default class CircleProgressbar {
    constructor(objectSelector, progressBarId) {
        this._progressbar = document.querySelector(objectSelector).contentDocument.getElementById(progressBarId);
        this._strokeLength = this._progressbar.getTotalLength();
        this._progressbar.style.strokeLinecap = "butt";
        this.setValue(50);
    }

    setValue(percent) {
        let value = percent * 0.5;

        if(value < 1) { value = 1; }
        if(value > 49.5) { value = 51; }

        const a = (this._strokeLength * value / 100);
        const b = this._strokeLength - this._strokeLength / 100 * (value + 1);

        // this._progressbar.style.strokeDasharray = a + " " + b;

        this._progressbar.style.strokeDasharray = this._strokeLength * percent / 100 + " " + this._strokeLength;

        // strokeLength*val/100+','+strokeLength
    }
}