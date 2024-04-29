import { useState, useEffect } from "react";
import MainMessage from "./MainMessage";
import { LuPlusCircle } from "react-icons/lu";
import { IoSend } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useAppContext } from "../context/AppContext";

function Main() {
  const { state, setState } = useAppContext();

  console.log("state", state);

  const { jsonData } = state;

  const [isSending, setIsSending] = useState(false);
  const [tokens, setTokens] = useState(0);

  //   console.log("messages", messages);

  useEffect(() => {
    // Calculate tokens whenever jsonData changes
    const calculateTokens = () => {
      const tokensCount = JSON.stringify(jsonData).length / 4;
      setTokens(tokensCount);
    };

    calculateTokens();
  }, [jsonData]);

  const handleMessageClick = () => {
    setState((prev) => ({
      ...prev,
      jsonData: {
        ...prev.jsonData,
        messages: [
          ...prev.jsonData.messages,
          {
            name: "New_Name",
            role: "user",
            content: "",
          },
        ],
      },
    }));
  };

  const handleClickSend = () => {
    console.log("Sending message...", jsonData);
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
    }, 1500);
  };

  return (
    <div className="container container-main">
      <div className="container-main__messages">
        {jsonData?.messages?.map((message, idx) => {
          return (
            <MainMessage key={`message ${idx})}`} message={message} idx={idx} />
          );
        })}
      </div>

      <div className="container-main__box container-main__controls">
        <div className="container-main__controls-btns">
          <button
            className="btn btn-main__contrls"
            onClick={handleMessageClick}
          >
            <LuPlusCircle />
            <span>Message</span>
          </button>
          <button
            className="btn btn-main__contrls btn-send"
            onClick={handleClickSend}
          >
            {isSending ? (
              <>
                <AiOutlineLoading3Quarters className="loading-icon" />
                <span>Sending</span>
              </>
            ) : (
              <>
                <IoSend />
                <span>Send</span>
              </>
            )}
          </button>
        </div>
        <div
          key={`total-tokens-key${tokens}`}
          className="container-main__info-box"
        >
          {tokens} Tokens
        </div>
      </div>
    </div>
  );
}

export default Main;
