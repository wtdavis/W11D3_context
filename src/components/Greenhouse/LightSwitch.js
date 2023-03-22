import './LightSwitch.css';
import {useTheme} from "../../context/ThemeContext.js"


function LightSwitch() {
  const {themeName, setThemeName} = useTheme()
  console.log(themeName, setThemeName)

  const handleClick = (e) => {
    e.preventDefault()
    // console.log(e.target.id)
    setThemeName(e.target.id)
    alert (`changing themes to ${e.target.id}`)
  }

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" id="day" onClick={handleClick}>DAY</div>
      <div className="off" id="night" onClick={handleClick}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;