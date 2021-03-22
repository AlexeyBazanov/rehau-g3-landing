import App from "../components/app.js";
import TopNavbar from "../components/top-navbar.js";
import LinkAnchor from "../components/link-anchor.js";
import PassportCheckForm from "../components/passport-check-form.js";
import DealersMap from "../components/dealers-map.js";
import Tabs from "../components/tabs.js";
import Carousel from "../components/carousel.js";
import Modal from "../components/modal.js";
import Configurator from "../components/configurator.js";
import PropertyCircles from "../components/property-circles.js";
import EnergyPanel from "../components/energy-panel.js";
import PageLoader from "../components/page-loader.js";

const mainApp = new App();

mainApp.addComponent("topNavbar", new TopNavbar(
    ".top-navbar__items", 
    ".top-navbar__item",
    ".top-navbar__burger")
);

mainApp.addComponent("linkAnchor", new LinkAnchor(
    ".link-anchor")
);

mainApp.addComponent("passportCheckForm", new PassportCheckForm(
    ".passport-check__form", 
    ".passport-check__input")
);

mainApp.addComponent("dealersMap", new DealersMap(
    "dealers-map__map")
);

mainApp.addComponent("tabs", new Tabs(
    ".window__tabs", 
    ".window__tabs-content")
);

mainApp.addComponent("carousel", new Carousel(
    ".ready-solutions__carousel")
);

mainApp.addComponent("modal", new Modal(
    ".modal", ".modal__open-button", 
    ".modal__close-button", 
    "is-active",
    "is-clipped")
);

mainApp.addComponent("propertyCircles", new PropertyCircles(
    "#circle-bars__noise-bar", "#circle-bars__noise-percent",
    "#circle-bars__sun-bar", "#circle-bars__sun-percent", 
    "#circle-bars__safe-bar", "#circle-bars__safe-percent",
    "#circle-bars__designing-bar", "#circle-bars__designing-percent"
));

mainApp.addComponent("energyPanel", new EnergyPanel(
    ".energy-value", 
    "energy-value--shown", 
    1, 7, 3
));

mainApp.addComponent("configurator", new Configurator(
    ".slider--energy", 
    ".slider--noise", 
    ".slider--sun", 
    ".slider--safe", 
    ".slider--design")
);

mainApp.addComponent("pageLoader", new PageLoader(
    ".pageloader", 
    "is-active")
);

(function() {
    window.app = mainApp;
})();

window.onload = function() { 
    mainApp.start();
    global.app = mainApp;
};



