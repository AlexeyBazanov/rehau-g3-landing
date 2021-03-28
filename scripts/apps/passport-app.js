import App from "../components/app.js";
import PassportApi from "../components/passport-api.js";
import PropertyCircles from "../components/property-circles.js";
import EnergyPanel from "../components/energy-panel.js";
import PassportLoader from "../components/passport-loader.js";
import PageLoader from "../components/page-loader.js";
import PdfSaver from "../components/pdf-saver.js";

const passportApp = new App();
const passportApi = new PassportApi("https://window-pass.ru/api", "/passport", "/passport_check");

passportApp.addComponent("propertyCircles", new PropertyCircles(
    "#circle-bars__noise-bar", "#circle-bars__noise-percent",
    "#circle-bars__sun-bar", "#circle-bars__sun-percent", 
    "#circle-bars__safe-bar", "#circle-bars__safe-percent",
    "#circle-bars__designing-bar", "#circle-bars__designing-percent",
    false
));

passportApp.addComponent("energyPanel", new EnergyPanel(
    ".energy-value", 
    "energy-value--shown", 
    1, 7, 3
));

passportApp.addComponent("pdfSaver", new PdfSaver(
    "#passport-page",
    ".passport__pdf-link"
));

passportApp.addComponent("passportLoader", new PassportLoader(
    passportApi,
    ".passport__number",
    ".passport__order",
    ".passport__date",
    ".passport__agent",
    ".passport__location",
    ".passport__profile",
    ".passport__glass",
    ".passport__accessories"
));

passportApp.addComponent("pageLoader", new PageLoader(
    ".pageloader", 
    "is-active")
);

(function() {
    window.app = passportApp;
})();

window.addEventListener("load", (event) => {
    passportApp.start();
});