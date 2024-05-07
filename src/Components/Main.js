import { useState, useEffect } from "react";
import MainMessage from "./MainMessage";
import { LuPlusCircle } from "react-icons/lu";
import { IoSend } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useAppContext } from "../context/AppContext";
import { sendToOpenAI } from "../service/OpenAIService";
import { useSnackbar } from "notistack";

function Main() {
  const { state, setState } = useAppContext();

  const { enqueueSnackbar } = useSnackbar();

  const { jsonData, apiKey, parameters } = state;

  const [isSending, setIsSending] = useState(false);
  const [tokens, setTokens] = useState(0);

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
    if (!apiKey) return;

    if (
      jsonData.model === "" ||
      jsonData.model === "Select model" ||
      !jsonData.model
    ) {
      alert("Please select a model");
      return;
    }

    setIsSending(true);

    sendToOpenAI(
      apiKey,
      jsonData.model,
      jsonData.messages,
      jsonData.tools,
      parameters
    )
      .then((res) => {
        if (res.error) {
          enqueueSnackbar(res.error?.message, { variant: "error" });
          setIsSending(false);
          return;
        }

        enqueueSnackbar("Message sent successfully", { variant: "success" });
        setIsSending(false);

        const responseMessage = res.response?.choices?.map(
          (choice) => choice.message
        );

        setState((prev) => ({
          ...prev,
          jsonData: {
            ...prev.jsonData,
            messages: [...prev.jsonData.messages, ...responseMessage],
          },
        }));
      })
      .catch((err) => {
        enqueueSnackbar(err, { variant: "error" });
        setIsSending(false);
      });
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
            disabled={isSending || !apiKey}
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
