import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Left from './Components/Left';
import Main from './Components/Main';
import Right from './Components/Right';
import Modal from './Components/Modal';
import jsonData from '../src/Assets/data.json'

function App() {
  return (
    <div className="App">
      <Header
        jsonData={jsonData}
      />
      <Banner
        jsonData={jsonData}
      />
      <div className="central-content-container">
        <Left
          jsonData={jsonData}
        />
        <Main
          jsonData={jsonData}
        />
        <Right
          jsonData={jsonData}
        />
      </div>
      <Modal
        jsonData={jsonData}
      />
    </div>
  );
}

export default App;
