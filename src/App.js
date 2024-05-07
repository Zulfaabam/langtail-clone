import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Left from "./Components/Left";
import Main from "./Components/Main";
import Right from "./Components/Right";
import Modal from "./Components/Modal";
import jsonData from "../src/Assets//TestProject/data.json";
import { AppProvider } from "./context/AppContext";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      ContentProps={{
        style: { fontSize: "1.4rem" },
      }}
      maxSnack={3}
    >
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
            modalId={"modal-new-conversation"}
            content={""}
            title={"New conversation"}
            subtitle={"Paste JSON of the conversation"}
            isTextAreaSandbox={true}
            isNewJson={true}
          />
          <Modal
            modalId={"modal-edit-function"}
            content={JSON.stringify(jsonData.tools[0].function, null, 2)}
            title={"Edit function"}
            subtitle={"Edit your existing function"}
            isTextAreaSandbox={true}
            isNewJson={false}
          />
          <Modal
            modalId={"modal-tool"}
            content={""}
            title={"Write a new function"}
            subtitle={"Write a new function"}
            isTextAreaSandbox={true}
            isNewJson={false}
          />
          <Modal
            modalId={"modal-share-conversation"}
            content={""}
            title={"Share conversation"}
            subtitle={"Copy your modified conversation"}
            isTextAreaSandbox={true}
            isNewJson={false}
          />
        </div>
      </AppProvider>
    </SnackbarProvider>
  );
}

export default App;
