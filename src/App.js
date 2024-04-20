import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Left from './Components/Left';
import Main from './Components/Main';
import Right from './Components/Right';
import Modal from './Components/Modal';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="central-content-container">
        <Left />
        <Main />
        <Right />
      </div>
      <Modal />
    </div>
  );
}

export default App;
