import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import {useTheme} from "../../context/ThemeContext.js"

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  
  const {themeName} = useTheme()
  let theme = themeName === "day" ? (<img  className='greenhouse-img' src={dayImage}
  alt='greenhouse'
/>) : (<img  className='greenhouse-img'
            src={nightImage}
            alt='greenhouse' 
      />)

  return (
    <section>
      {theme}
      {/* {<img  className='greenhouse-img'
            src={dayImage}
            alt='greenhouse' 
      />} */}

      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;