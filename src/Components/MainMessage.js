import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbMathFunction } from "react-icons/tb";
import * as React from "react";
import PropTypes from "prop-types";
import { Select as BaseSelect, selectClasses } from "@mui/base/Select";
import { Option as BaseOption, optionClasses } from "@mui/base/Option";
import { styled } from "@mui/system";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
// import { prettyPrintJson } from 'pretty-print-json';

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-json5";
import "prismjs/components/prism-jsonp";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-json";
import { useAppContext } from "../context/AppContext";
import { blue } from "../utils/consts";

function MainMessage(props) {
  const { message, idx } = props;
  const { setState } = useAppContext();

  const [codeEditorsNum, setCodeEditorsNum] = useState([0]);

  const handleToolClick = () => {
    setCodeEditorsNum((prevState) => [...prevState, 0]);
  };

  const handleClickDelete = (i) => {
    setState((prev) => {
      const updatedMessages = [...prev.jsonData.messages];
      updatedMessages.splice(i, 1);

      return {
        ...prev,
        jsonData: {
          ...prev.jsonData,
          messages: updatedMessages,
        },
      };
    });
  };

  const onChangeContent = (value) => {
    setState((prev) => {
      const updatedMessages = [...prev.jsonData.messages];
      updatedMessages[idx].content = value;

      return {
        ...prev,
        jsonData: {
          ...prev.jsonData,
          messages: updatedMessages,
        },
      };
    });
  };

  return (
    <div
      className="container container-main__box container-main-message"
      id={`message ${idx}`}
    >
      <div className="main-message__select">
        <Select
          value={message.role}
          onChange={(e) => {
            setState((prev) => {
              const updatedMessages = [...prev.jsonData.messages];
              updatedMessages[idx].role = e.target.textContent;

              return {
                ...prev,
                jsonData: {
                  ...prev.jsonData,
                  messages: updatedMessages,
                },
              };
            });
          }}
        >
          <Option value={message.role}>{message.role}</Option>
          <Option value={"user"}>user</Option>
          <Option value={"tool"}>tool</Option>
          <Option value={"assistant"}>assistant</Option>
          <Option value={"system"}>assistant</Option>
        </Select>
      </div>
      <div className="main-message__text-area main-message__text-area-container">
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Empty"
          defaultValue={message.name}
          onChange={(e) => {
            setState((prev) => {
              const updatedMessages = [...prev.jsonData.messages];
              updatedMessages[idx].name = e.target.value;

              return {
                ...prev,
                jsonData: {
                  ...prev.jsonData,
                  messages: updatedMessages,
                },
              };
            });
          }}
        />

        {message.role === "tool" || message.role === "assistant" ? (
          codeEditorsNum.map((editor, i) => {
            return (
              <div
                className="code-editor-container"
                key={`${editor} ${message.content} ${i}`}
              >
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Empty"
                  defaultValue={message.content}
                  onChange={(e) => onChangeContent(e.target.value)}
                />

                <Editor
                  key={`editor ${editor} ${message.content} ${i}`}
                  value={message.content || ""} // Ensure code is initialized
                  onValueChange={(code) => onChangeContent(code)}
                  highlight={(code) => highlight(code, languages.json)}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                  }}
                />
              </div>
            );
          })
        ) : (
          <>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Empty"
              defaultValue={message.content}
              onChange={(e) => onChangeContent(e.target.value)}
            />
          </>
        )}
      </div>
      <div className="main-message__buttons">
        {message.role === "assistant" ? (
          <>
            <button className="btn-small" onClick={handleToolClick}>
              <TbMathFunction />
            </button>
          </>
        ) : null}

        <button className="btn-small" onClick={() => handleClickDelete(idx)}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}

export default MainMessage;

const Select = React.forwardRef(function Select(props, ref) {
  const slots = {
    root: CustomButton,
    listbox: Listbox,
    popup: Popup,
    ...props.slots,
  };

  return <BaseSelect {...props} ref={ref} slots={slots} />;
});

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
  const { ownerState, ...other } = props;
  return (
    <StyledButton type="button" {...other} ref={ref}>
      {other.children}
      <UnfoldMoreRoundedIcon />
    </StyledButton>
  );
});

CustomButton.propTypes = {
  children: PropTypes.node,
  ownerState: PropTypes.object.isRequired,
};

const StyledButton = styled("button", { shouldForwardProp: () => true })(
  ({ theme }) => `
    position: relative;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-width: 120px;
    padding: 8px 12px;
    border-radius: 5px;
    text-align: left;
    line-height: 1.5;
    background: var(--clr-background);
    border: 1px solid var(--clr-border-light);
    color: var(--clr-gray)
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
    cursor: pointer;

    &:hover{
        background: var(--clr-background-hover)
    }

    &.${selectClasses.focusVisible} {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[700] : blue[200]
      };
    }
  
    & > svg {
      font-size: 1rem;
      position: absolute;
      height: 100%;
      top: 0;
      right: 10px;
    }
    `
);

const Listbox = styled("ul")(
  ({ theme }) => `
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 220px;
    border-radius: 5px;
    overflow: auto;
    outline: 0px;
    background: var(--clr-dark);
    border: 1px solid var(--clr-border-light);
    color: var(--clr-white)
    `
);

const Option = styled(BaseOption)(
  ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionClasses.selected} {
      background-color: var(--clr-background-hover)
      
    }
  
    &.${optionClasses.highlighted} {
        background-color: var(--clr-background-hover)
    }
  
    &:focus-visible {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
    }
  
    &.${optionClasses.highlighted}.${optionClasses.selected} {
        background-color: var(--clr-background)
    }
  
    &.${optionClasses.disabled} {
        background-color: var(--clr-background-hover)
    }
  
    &:hover:not(.${optionClasses.disabled}) {
        background-color: var(--clr-background-hover);
    }
    `
);

const Popup = styled("div")`
  z-index: 1;
`;

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
