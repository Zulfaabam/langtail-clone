import { createContext, useContext, useState } from "react";
import initialJsonData from "../Assets/TestProject/data.json";

const initialState = {
  apiKey: "",
  jsonData: initialJsonData,
  parameters: {
    temperature: 0.2,
    max_tokens: 800,
    stop: "",
    top_p: 0.1,
    presence_penalty: 0.5,
    frequency_penalty: 0.5,
  },
};

const AppContext = createContext(initialState);

const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useAppContext };
