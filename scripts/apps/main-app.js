import App from "../components/app.js";
import TopNavbar from "../components/top-navbar.js";
import LinkAnchor from "../components/link-anchor.js";
import PassportCheckForm from "../components/forms/passport-check-form.js";
import DealersMap from "../components/dealers-map.js";
import Tabs from "../components/tabs.js";
import Modal from "../components/modal.js";
import Configurator from "../components/configurator.js";
import PropertyCircles from "../components/property-circles.js";
import EnergyPanel from "../components/energy-panel.js";
import PageLoader from "../components/page-loader.js";
import Overlay from "../components/overlay.js";
import CarouselInitializer from "../components/carousel-initializer.js";
import ElementAnimator from "../components/element-animator.js";
import {AnimateElement,} from "../components/element-animator.js";
import ApplyButton from "../components/apply-button.js";
import HeadlineCarousel from "../components/headline-carousel.js";
import FeedbackForm from "../components/forms/feedback-form.js";
import ApplyForm from "../components/forms/apply-form.js";


const mainApp = new App();

mainApp.addComponent("topNavbar", new TopNavbar(
    ".top-navbar__items", 
    ".top-navbar__item",
    ".top-navbar__burger")
);

mainApp.addComponent("linkAnchor", new LinkAnchor(
    ".link-anchor")
);

mainApp.addComponent("dealersMap", new DealersMap(
    "dealers-map__map")
);

mainApp.addComponent("tabs", new Tabs(
    ".window__tabs", 
    ".window__tabs-content")
);

mainApp.addComponent("carouselInitializer", new CarouselInitializer(
    ".carousel"
));

mainApp.addComponent("modal", new Modal(
    ".modal", ".modal__open-button", 
    ".modal__close-button", 
    "is-active",
    "is-clipped")
);

mainApp.addComponent("overlay", new Overlay(
    ".overlay__open", 
    ".overlay__close",
    "overlay", 
    "is-hidden", 
    "is-overlayed"
));

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

mainApp.addComponent("elementAnimator", new ElementAnimator(
    [
        new AnimateElement(".benefits__banner_1", "zoomInRight", 1, true),
        new AnimateElement(".benefits__banner_2", "zoomInLeft", 1, true),
        new AnimateElement(".benefits__banner_3", "zoomInRight", 1, true),

        new AnimateElement(".anchor--window", "fadeInDown", 1, true),
        new AnimateElement(".anchor--passport-check", "fadeInDown", 1, true),
        new AnimateElement(".anchor--dealers-map", "fadeInDown", 1, true),
        new AnimateElement(".anchor--feedback", "fadeInDown", 1, true),

        new AnimateElement(".feedback__contact--phone", "fadeInUp", 1, true),
        new AnimateElement(".feedback__contact--email", "fadeInUp", 1, true),
    ]
));

mainApp.addComponent("applyButton", new ApplyButton(
    ".button--apply", 
    ".tab[data-target='call-apply']", 
    "#call-apply__solution"
));

mainApp.addComponent("headlineCarousel", new HeadlineCarousel(
    ".headline__banner",
    ["headline__banner--img1", "headline__banner--img2", "headline__banner--img3",],
    "headline__banner--fade",
    12
));

mainApp.addComponent("feedbackForm", new FeedbackForm(".feedback__form"));

mainApp.addComponent("applyForm", new ApplyForm(".call-apply__form"));

mainApp.addComponent("passportCheckForm", new PassportCheckForm(
    ".passport-check__form",
    ".passport-check__number",
    ".passport-check__destination",
    "is-invisible"
));

(function() {
    window.app = mainApp;
})();

window.onload = function() { 
    mainApp.start();
    global.app = mainApp;
};