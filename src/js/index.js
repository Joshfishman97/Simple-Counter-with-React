//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";
//import { SecondCounter } from "./component/SimpleCounter"
//render your react application
function SecondsCounter(props) {
	return (
		<div className="bigCounter">
			<div className="clock">
				<i className="far fa-clock"> </i>
			</div>
            
			<div className="four">0</div>
			<div className="three">0</div>
			<div className="two">0</div>
			<div className="one">0</div>
		</div>
	);
}
ReactDOM.render(<SecondsCounter />, document.querySelector("#app"));
