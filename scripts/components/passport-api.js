class Passport {
    constructor(id, order, date, agent, location,
        noise, sun, safe, design, energy, 
        noiseMax, sunMax, safeMax, designMax, energyMax, 
        profile, glass, accessories) 
    {
        this._id = id;
        this._order = order;
        this._date = date;
        this._agent = agent;
        this._location = location;

        this._noise = noise;
        this._sun = sun;
        this._safe = safe;
        this._design = design;
        this._energy = energy;

        this._noiseMax = noiseMax;
        this._sunMax = sunMax;
        this._safeMax = safeMax;
        this._designMax = designMax;
        this._energyMax = energyMax;

        this._profile = profile;
        this._glass = glass;
        this._accessories = accessories;
    }

    getId() {
        return this._id;
    }

    getOrder() {
        return this._order;
    }

    getDate() {
        return this._date;
    }

    getAgent() {
        return this._agent;
    }

    getLocation() {
        return this._location;
    }

    getNoicePercent() {
        return Math.round(this._noise / this._noiseMax * 100);
    }

    getSunPercent() {
        return Math.round(this._sun / this._sunMax * 100);
    }

    getSafePercent() {
        return Math.round(this._safe / this._safeMax * 100);
    }

    getDesignPercent() {
        return Math.round(this._design / this._designMax * 100);
    }

    getEnergy() {
        return this._energy;
    }

    getProfile() {
        return this._profile;
    }

    getGlass() {
        return this._glass;
    }

    getAccessories() {
        return this._accessories;
    }
}

export default class PassportApi {
    constructor(url, dataPath, checkPath) {
        this._url = url;
        this._dataPath = dataPath;
        this._checkPath = checkPath;
    }

    async isPassportExist(passportNumber) {
        // Заглушка
        return true;
    }

    async getPassportData(passportSecretId) {
        // Заглушка
        return new Passport(
            "2021-4241-1874", 
            "554-677-124", 
            "21.06.2021",
            "Московские окна",
            "Окно для кухни",
            1, 2, 3, 1, 5,
            3, 3, 3, 3, 7, 
            "GENEO цветнойt-test", 
            "4 Stopsol Phoenix-14-4-14-33.1-test", 
            "NT Designo II: RC1, RC2, RC3, TF; Ручка Swing/Line-test"
        );
    }
}