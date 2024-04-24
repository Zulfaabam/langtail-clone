import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Left from './Components/Left';
import Main from './Components/Main';
import Right from './Components/Right';
import Modal from './Components/Modal';
import jsonData from '../src/Assets//TestProject/data.json'

function App() {

  const [importedJsonData, setImportedJsonData] = useState(jsonData);

  useEffect(() => {
    console.log("importedJsonData updated:", importedJsonData);
  }, [importedJsonData]);

  return (
    
    <div className="App">
      <Header
        jsonData={importedJsonData}
      />
      <Banner
        jsonData={importedJsonData}
      />
      <div className="central-content-container">
        <Left
          key={`left ${importedJsonData.user}`}
          jsonData={importedJsonData}
        />
        <Main
          key={`main ${importedJsonData.user}`}
          jsonData={importedJsonData}
        />
        <Right
          key={`right ${importedJsonData.user}`}
          jsonData={importedJsonData}
        />
      </div>
      <Modal
        key={`key-modal-import-conversation ${importedJsonData.user}`}
        modalId={"modal-import-conversation"}
        content={""}
        title={"New conversation"}
        subtitle={"Paste JSON of the conversation"}
        isTextAreaSandbox={true}
        setJson = {setImportedJsonData}
      />
      <Modal
        key={`key-modal-edit-function ${importedJsonData.user}`}
        modalId={"modal-edit-function"}
        content={JSON.stringify(jsonData.tools[0].function, null, 2)}
        title={"Edit function"}
        subtitle={"Edit your existing function"}
        isTextAreaSandbox={true}
        setJson = {setImportedJsonData}
      />
      <Modal
        key={`key-modal-new-function ${importedJsonData.user}`}
        modalId={"modal-new-function"}
        content={""}
        title={"Write a new function"}
        subtitle={"Write a new function"}
        isTextAreaSandbox={true}
        setJson = {setImportedJsonData}
      />
      <Modal
        key={`key-modal-share-conversation ${importedJsonData.user}`}
        modalId={"modal-share-conversation"}
        content={""}
        title={"Share conversation"}
        subtitle={"Copy your modified conversation"}
        isTextAreaSandbox={true}
        setJson = {setImportedJsonData}
      />
    </div>
  );
}

export default App;
