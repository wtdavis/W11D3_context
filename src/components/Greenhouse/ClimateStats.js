import "./ClimateStats.css";
import { useClimate } from "../../context/ClimateContext";
import { useEffect, useState } from "react";
// debugger
function ClimateStats() {
  const { temperature, humidity, setTemperature, desiredTemp ,setDesiredTemp} = useClimate();
  const [currentTemp, setCurrentTemp] = useState(50);



  useEffect(() => {
    if (temperature !== desiredTemp) {
      let timer = setTimeout(() => {
        setTemperature(
          (prevTemp) => prevTemp + (desiredTemp > temperature ? 1 : -1)
        );
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [desiredTemp, temperature]);
  return (
    <div className="climate-stats">
      <div className="temperature">Temperature {temperature}°F</div>
      <div className="humidity">Humidity {humidity}%</div>
    </div>
  );
}

export default ClimateStats;
