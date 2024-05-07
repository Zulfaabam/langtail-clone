import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { LuPlusCircle } from "react-icons/lu";
import { TbMathFunction } from "react-icons/tb";
import * as React from "react";
import { styled } from "@mui/system";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { useAppContext } from "../context/AppContext";

function Left() {
  const { state } = useAppContext();

  const { jsonData } = state;

  const [selectedFunction, setSelectedFunction] = useState(
    "no function selected"
  );
  const [tokens, setTokens] = useState(0);
  const [isToolOpen, setIsToolOpen] = useState(false);

  function handleTokenChange(newTokens) {
    console.log(`newTokens value: ${newTokens}`);
    setTokens(newTokens / 4);
  }

  function handleClick() {
    document.getElementById("modal-tool").classList.toggle("show-modal");
  }

  function handleClickEdit() {
    document
      .getElementById("modal-edit-function")
      .classList.toggle("show-modal");
  }

  function handleSelectFunction(name) {
    console.log(`clicked select function with name: ${name}`);
    setSelectedFunction(name);
  }

  function handleClickTools() {
    setIsToolOpen(!isToolOpen);
    document.getElementById("select-tool").classList.toggle("select-tool-show");
  }

  return (
    <div className="container container-left">
      <div className="container-left__box container-left-border">
        <div className="container-left__tools paragraph-white ">
          <TbMathFunction />
          <span>Tools</span>
          <div key={`tokens ${tokens}`} className="container-main__info-box">
            {tokens} Tokens
          </div>
          {isToolOpen ? (
            <FaChevronUp className="icon" onClick={handleClickTools} />
          ) : (
            <FaChevronDown className="icon" onClick={handleClickTools} />
          )}
        </div>
        <div id="select-tool" className="select-tool">
          {jsonData?.tools?.map((tool, idx) => {
            return (
              <div key={idx}>
                <p
                  className="paragraph-white"
                  onClick={() => {
                    handleClickEdit();
                    handleSelectFunction(tool.function.name);
                    handleTokenChange(JSON.stringify(tool.function).length);
                  }}
                >
                  {tool.function.name}
                </p>
                <p>{tool.function.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-left__box container-left-border tool-choice-container">
        <p className="paragraph-white">Tool choice</p>
        <p>Controls which (if any) function is called by the model</p>
        <TextareaAutosize
          key={selectedFunction}
          aria-label="empty textarea"
          defaultValue={selectedFunction}
        ></TextareaAutosize>
      </div>

      <div className="container-left__box container-left-border">
        <button className="btn btn-left" onClick={handleClick}>
          <LuPlusCircle />
          Tool
        </button>
      </div>
    </div>
  );
}

export default Left;

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  900: "#003A75",
};

const TextareaAutosize = styled(BaseTextareaAutosize)(
  ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 5px;
    color: var(--clr-light-gray);
    background: var(--clr-background-light);
    border: 1px solid var(--clr-border-light);

    &:focus {
      border-color: ${blue[400]};
      
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);
