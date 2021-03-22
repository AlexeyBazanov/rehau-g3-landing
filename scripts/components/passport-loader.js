import BaseComponent from "./base-component.js";

export default class PassportLoader extends BaseComponent {
    constructor(passportApi, idTextSelector, orderTextSelector, 
        dateTextSelector, agentTextSelector, locationTextSelector, 
        profileTextSelector, glassTextSelector, accessoriesTextSelector) 
    {
        super();
        this._passportApi = passportApi;
     
        this._idTextSelector = idTextSelector;
        this._orderTextSelector = orderTextSelector;
        this._dateTextSelector = dateTextSelector;
        this._agentTextSelector = agentTextSelector;
        this._locationTextSelector = locationTextSelector;
        this._profileTextSelector = profileTextSelector;
        this._glassTextSelector = glassTextSelector;
        this._accessoriesTextSelector = accessoriesTextSelector;
    }

    init() {
        this._loadPassport();
    }

    _loadPassport() {
        (async () => {
            const passport = await this._passportApi.getPassportData();

            if(passport) {
                this._setId(passport.getId());
                this._setOrder(passport.getOrder());
                this._setDate(passport.getDate());
                this._setAgent(passport.getAgent());
                this._setLocation(passport.getLocation());
                this._setProfile(passport.getProfile());
                this._setGlass(passport.getGlass());
                this._setAccessories(passport.getAccessories());

                const propertyCircles = window.app.getComponent("propertyCircles");
               
                propertyCircles.setNoise(passport.getNoicePercent());
                propertyCircles.setSun(passport.getSunPercent());
                propertyCircles.setSafe(passport.getSafePercent());
                propertyCircles.setDesign(passport.getDesignPercent());

                const energyPanel = window.app.getComponent("energyPanel");
                
                energyPanel.setValue(passport.getEnergy());
            } else {
                //TODO
                return;
            }
        })();
    }

    _setId(text) {
        const idTextElement = document.querySelector(this._idTextSelector);
        if(idTextElement) {
            idTextElement.textContent = text;
        }
    }

    _setOrder(text) {
        const orderTextElement = document.querySelector(this._orderTextSelector);
        if(orderTextElement) {
            orderTextElement.textContent = text;
        }
    }

    _setDate(text) {
        const dateTextElement = document.querySelector(this._dateTextSelector);
        if(dateTextElement) {
            dateTextElement.textContent = text;
        }
    }

    _setAgent(text) {
        const agentTextElement = document.querySelector(this._agentTextSelector);
        if(agentTextElement) {
            agentTextElement.textContent = text;
        }
    }

    _setLocation(text) {
        const locationTextElement = document.querySelector(this._locationTextSelector);
        if(locationTextElement) {
            locationTextElement.textContent = text;
        }
    }

    _setProfile(text) {
        const profileTextElement = document.querySelector(this._profileTextSelector);
        if(profileTextElement) {
            profileTextElement.textContent = text;
        }
    }

    _setGlass(text) {
        const glassTextElement = document.querySelector(this._glassTextSelector);
        if(glassTextElement) {
            glassTextElement.textContent = text;
        }
    }

    _setAccessories(text) {
        const accessoriesTextElement = document.querySelector(this._accessoriesTextSelector);
        if(accessoriesTextElement) {
            accessoriesTextElement.textContent = text;
        }
    }

}