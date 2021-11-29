import './App.css';
import CountryPage from './Pages/CountryPage';
import WelcomePg from './Pages/WelcomePg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DarkModeToggle from './Components/DarkModeToggle';
import React, { useContext } from "react";
import { ThemeContext } from "./Contexts/ThemeContext";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <BrowserRouter>
      <div className={`App ${darkMode ? "app-dark" : "app-light"}`}>
        <p>React Router</p>
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<WelcomePg />}/>
          <Route path="/countries" element={<CountryPage />} />
        </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;
