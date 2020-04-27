import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";


// import Carouselpartners from "./components/CarouselPartners";


// import Faqcomp from "./components/faqcomp";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(<Carousel />, document.getElementById("services"));
// ReactDOM.render(<Carouselpartners />, document.getElementById("services"));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
