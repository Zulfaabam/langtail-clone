import { useState, useEffect } from "react";
import MainMessage from "./MainMessage";
import { LuPlusCircle } from "react-icons/lu";
import { IoSend } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useAppContext } from "../context/AppContext";
import { sendToOpenAI } from "../service/OpenAIService";
import { useSnackbar } from "notistack";
import { fromLocalStorage } from "../utils/localStorage";
const Diff = require("diff");

function Main() {
  const { state, setState } = useAppContext();

  const { enqueueSnackbar } = useSnackbar();

  console.log("state", state);

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

    console.log("Sending message...", { apiKey, jsonData, parameters });
    setIsSending(true);

    sendToOpenAI(
      apiKey,
      jsonData.model,
      jsonData.messages,
      jsonData.tools,
      parameters
    )
      .then((res) => {
        console.log("Response from OpenAI:", res);
        if (res.error) {
          enqueueSnackbar(res.error?.message, { variant: "error" });
          setIsSending(false);
          return;
        }

        enqueueSnackbar("Message sent successfully", { variant: "success" });
        setIsSending(false);
      })
      .catch((err) => {
        enqueueSnackbar(err, { variant: "error" });
        setIsSending(false);
      });
    // setTimeout(() => {
    //   setIsSending(false);
    // }, 1500);
  };

  useEffect(() => {
    const oldJson = fromLocalStorage("jsonData")?.messages;

    console.log(typeof oldJson);

    console.log(typeof jsonData?.messages);

    const diff = Diff.diffArrays(oldJson, jsonData?.messages);

    // const one = "beep boop";
    // const other = "beep boob blah";

    // const diff = Diff.diffChars(one, other);

    diff.forEach((part) => {
      // green for additions, red for deletions
      // grey for common parts
      const color = part.added ? "green" : part.removed ? "red" : "grey";
      console.table(part, color);
    });
  }, [jsonData]);

  // function compareStrings(string1, string2) {
  //   let results = Diff.diffChars(string1, string2);

  //   let output = "";
  //   results.forEach((item) => {
  //     if (item.removed) {
  //       output += `<span style="background-color:yellow">${item.value}</span>`;
  //     } else if (!item.added) {
  //       output += `${item.value}`;
  //     }
  //   });

  //   return output;
  // }

  // console.log(compareStrings("beep boop", "beep boob blah"));

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
