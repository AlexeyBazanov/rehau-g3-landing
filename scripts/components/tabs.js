import BaseComponent from "./base-component.js";

export default class Tabs extends BaseComponent {
    constructor(tabsContainerSelector, contentContainerSelector, 
        tabSelector = ".tab", contentSelector = ".tab-content", 
        hiddenClass = "is-hidden", activeClass = "is-active") 
    {
        super();
        this._tabSelector = tabSelector;
        this._contentSelector = contentSelector;

        this._tabsContainer = document.querySelector(tabsContainerSelector);
        this._tabs = this._tabsContainer.querySelectorAll(tabSelector);

        this._tabContentContainer = document.querySelector(contentContainerSelector);
        this._tabContents = this._tabContentContainer.querySelectorAll(contentSelector);
        
        this._hiddenClass = hiddenClass;
        this._activeClass = activeClass;
    }

    init() {
        this._tabs.forEach(tab => {
            tab.addEventListener("click", (event) => {
                event.preventDefault();
                this._handleTabClick(tab);
            });
        });
    }

    _handleTabClick(tab) {
        if(tab.classList.contains(this._activeClass)) {
            return;
        }
        this._setTabActive(tab);
        this._showTabContent(tab);
    }

    _showTabContent(tab) {
        this._hideAllTabsContents();
        const tabContent = document.getElementById(tab.dataset.target);
        tabContent.classList.remove(this._hiddenClass);
    }

    _hideAllTabsContents() {
        const hiddenClass = this._hiddenClass;

        this._tabContents.forEach(tabContent => {
            if(!tabContent.classList.contains(hiddenClass)) {
                tabContent.classList.add(hiddenClass);
            }
        });
    }

    _setTabActive(tab) {
        this._setTabsNotActive();
        tab.classList.add(this._activeClass);
    }

    _setTabsNotActive() {
        const activeClass = this._activeClass;

        this._tabs.forEach(tab => {
            if(tab.classList.contains(activeClass)) {
                tab.classList.remove(activeClass);
            }
        });
    }
}