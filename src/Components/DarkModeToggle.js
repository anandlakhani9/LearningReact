import React, { useContext } from "react";
import '../Styles/DarkModeToggle.css'
import { ThemeContext } from '../Contexts/ThemeContext'

const DarkModeToggle = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const swapMode = (e) => {
        let isChecked = e.target.checked;
        if (isChecked){
            theme.dispatch({type: "DARKMODE"})
        }
        else{
            theme.dispatch({type: "LIGHTMODE"})
        }
    }

    return (
        <>
            <label class="switch">
                <input type="checkbox" onChange={swapMode}/>
                <span class="slider round"></span>
            </label>
        </>
    )
}

export default DarkModeToggle;