import './App.css';
import './components/Assets/Styles/base.scss'
import Header from './components/Header/header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
