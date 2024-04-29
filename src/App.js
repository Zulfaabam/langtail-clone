import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Left from "./Components/Left";
import Main from "./Components/Main";
import Right from "./Components/Right";
import Modal from "./Components/Modal";
import jsonData from "../src/Assets//TestProject/data.json";
import { AppProvider } from "./context/AppContext";

function App() {
  const [importedJsonData, setImportedJsonData] = useState(jsonData);

  console.log("importedJsonData updated:", importedJsonData);

  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Banner />
        <div className="central-content-container">
          <Left />
          <Main />
          <Right />
        </div>
        <Modal
          key={`key-modal-import-conversation ${importedJsonData.user}`}
          modalId={"modal-import-conversation"}
          content={""}
          title={"New conversation"}
          subtitle={"Paste JSON of the conversation"}
          isTextAreaSandbox={true}
          isModalImport={true}
        />
        <Modal
          key={`key-modal-edit-function ${importedJsonData.user}`}
          modalId={"modal-edit-function"}
          content={JSON.stringify(importedJsonData.tools[0].function, null, 2)}
          title={"Edit function"}
          subtitle={"Edit your existing function"}
          isTextAreaSandbox={true}
          isModalImport={false}
        />
        <Modal
          key={`key-modal-new-function ${importedJsonData.user}`}
          modalId={"modal-new-function"}
          content={""}
          title={"Write a new function"}
          subtitle={"Write a new function"}
          isTextAreaSandbox={true}
          isModalImport={false}
        />
        <Modal
          key={`key-modal-share-conversation ${importedJsonData.user}`}
          modalId={"modal-share-conversation"}
          content={""}
          title={"Share conversation"}
          subtitle={"Copy your modified conversation"}
          isTextAreaSandbox={true}
          isModalImport={false}
        />
      </div>
    </AppProvider>
  );
}

export default App;
