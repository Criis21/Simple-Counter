import React, { useState, useEffect } from "react";

const Timer = () => {

  //Seconds will store the value of our timer
	const [seconds, setSeconds] = useState(0);

  //isActive will store the timer’s state for whether it is currently timing or paused
  //Timer in paused state (isActive set to false) 
	const [isActive, setIsActive] = useState(false);

  //When the toggle function is called it will change the value of isActive to be the opposite of what it currently is
	function toggle() {
		setIsActive(!isActive);
	}

	function reset() {
		setSeconds(0);
		setIsActive(false);
	}


  // If isActive is true, assign the previously created interval variable to a new interval that triggers 
  //every 1,000 milliseconds
	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				setSeconds(seconds => seconds + 1);
			}, 1000);

      //If the isActive value is false, clearing out the interval 
		} else if (!isActive && seconds !== 0) {
			clearInterval(interval);
		}

      //Returning clearInterval out of the useEffect method to cleanup after
		return () => clearInterval(interval);
	}, [isActive, seconds]);

	return (
		<div className="app">
			<div className="time">{seconds}s</div>
			<div className="row">
				<button
					className={`button button-primary button-primary-${
						isActive ? "active" : "inactive"
					}`}
					onClick={toggle}>
					{isActive ? "Pause" : "Start"}
				</button>
				<button className="button" onClick={reset}>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Timer;
