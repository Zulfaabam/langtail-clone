import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Left from './Components/Left';
import Main from './Components/Main';
import Right from './Components/Right';
import Modal from './Components/Modal';
import jsonData from '../src/Assets//TestProject/data.json'

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
        key={'key-modal-import-conversation'}
        modalId={"modal-import-conversation"}
        content={""}
        title={"New conversation"}
        subtitle={"Paste JSON of the conversation"}
        isTextAreaSandbox={true}
      />
      <Modal
        key={'key-modal-edit-function'}
        modalId={"modal-edit-function"}
        content={JSON.stringify(jsonData.tools[0].function)}
        title={"Edit function"}
        subtitle={"Edit your existing function"}
        isTextAreaSandbox={true}
      />
      <Modal
        key={'key-modal-share-conversation'}
        modalId={"modal-share-conversation"}
        content={""}
        title={"Share conversation"}
        subtitle={"Copy your modified conversation"}
        isTextAreaSandbox={true}
      />
    </div>
  );
}

export default App;
