import App from "../components/app.js";
// import CircleProgressbar from "../components/circle-progressbar.js";
import ProgressBar from "../../node_modules/progressbar.js/dist/progressbar.js";

const passportApp = new App();

window.addEventListener("load", (event) => {
    passportApp.start();

    var bar = new ProgressBar.Path("#heart-path", {
        easing: "easeInOut",
        duration: 5400,
    });
      
    bar.set(0);
    bar.animate(1);
    // const circleProgressbar = new CircleProgressbar(".passport__property-others-object", "property-circle-4");
    // const circleProgressbar2 = new CircleProgressbar(".passport__property-others-object", "property-circle-3");
});