// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState } from "react";

export const ClimateContext = createContext();

export const ClimateProvider = (props) => {
  const [temperature, setTemperature] = useState(50);
  const [humidity, setHumidity] = useState(40);
  return (
    <ClimateContext.Provider value={{ temperature, setTemperature,humidity,setHumidity }}>
      {props.children}
    </ClimateContext.Provider>
  );
};
// debugger
export const useClimate = () => useContext(ClimateContext);
