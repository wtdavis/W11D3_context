import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';
import { useEffect, useState } from 'react';
// debugger 
function ClimateStats() {

  const {temperature, humidity, setTemperature}= useClimate()
  const [currentTemp, setCurrentTemp] = useState(50)

  useEffect( () => { if (currentTemp !== temperature) {
    console.log(currentTemp)
    setTimeout(setCurrentTemp( (prevTemp) => { currentTemp = prevTemp + 1 }), 1000) }
     } , [currentTemp] 
  )


  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {currentTemp}°F
       
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
