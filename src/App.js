import { useState } from 'react';
import './App.css';
import './components/Assets/Styles/base.scss'
import Header from './components/Header/header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ITtest from './components/Test/Test';
import LogIn from './components/Header/LogIn/LogIn';
import RegistrationForm from './components/Header/RegistrationForm/RegistrationForm';
import {
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [Tests, setTest] = useState(false);
  const [Registration, setRegistration] = useState(false);
  const [LogIntrue, setLogIntrue] = useState(false)
  return (
    <>
      <BrowserRouter>
      {Registration && <RegistrationForm closeTest = {setRegistration}/>}
      {LogIntrue && <LogIn closeTest = {setLogIntrue}/>}
      {Tests && <ITtest closeTest = {setTest}/>}
      <Header activeTest = {setTest} activereg ={setRegistration} activelog={setLogIntrue}/>
      <Main activeTest = {setTest}/>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
