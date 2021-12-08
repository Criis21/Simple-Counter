//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/Index.scss";

//import your own components
import Timer from "./component/Timer.jsx";

//render your react application
ReactDOM.render(<Timer />, document.querySelector("#app"));
