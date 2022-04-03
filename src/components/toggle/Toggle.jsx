import "./toggle.css"
import {useContext} from "react";
import { ThemeContext } from "../../context";



const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"});
    }
    return (
       <div className="t">
            <img src="https://images.assetsdelivery.com/compings_v2/studiobarcelona/studiobarcelona1605/studiobarcelona160500031.jpg" alt="" className="t-icon"/>
            <img src="https://cdn-icons-png.flaticon.com/512/196/196685.png" alt="" className="t-icon"/>   
            <div className="t-button" onClick={handleClick} style={{left:theme.state.darkMode ? 0 : 25}}></div>
        
        </div>
    )
}

export default Toggle