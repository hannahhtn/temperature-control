import { toBeEmptyDOMElement } from "@testing-library/jest-dom/dist/matchers";
import React, {useState} from "react";
import "./App.css";

const App = () => {
  const [temperature, setTemperature] = useState(10);
  const [color, setColor] = useState("cold");

  const setTempAndColor = (button) => {
    let newTemp = temperature;
    if(button === "increase")
    {
      setTemperature(temperature + 1);
      newTemp++;
    }
    else
    {
      setTemperature(temperature - 1);
      newTemp--;
    }

    if(newTemp >= 15)
    {
      setColor("hot");
    }
    else 
    {
      setColor("cold");
    }
  }

	return (
		<div className="app-container">
			<div className={`temperature + ${color}`}>{temperature}°</div>
			<div>
				<button
					type="button"
					className="btn btn-light rounded-pill m-2"
					onClick={() => setTempAndColor("increase")}
				>
					+
				</button>
				<button
					type="button"
					className="btn btn-light rounded-pill"
					onClick={() => setTempAndColor("decrease")}
				>
					-
				</button>
			</div>
		</div>
	);
};

export default App;
