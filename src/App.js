import { useState } from 'react';
import './App.css';
import './components/Assets/Styles/base.scss'
import Header from './components/Header/header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ITtest from './components/Test/Test';

function App() {
  const [Tests, setTest] = useState(false)
  return (
    <>
      {Tests && <ITtest closeTest = {setTest}/>}
      <Header activeTest = {setTest}/>
      <Main activeTest = {setTest}/>
      <Footer />
    </>
  );
}

export default App;
