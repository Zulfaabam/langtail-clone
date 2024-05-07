import { FaSave } from "react-icons/fa";
import { TbShare2, TbGitCompare } from "react-icons/tb";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import * as React from "react";
import PropTypes from "prop-types";
import { Select as BaseSelect, selectClasses } from "@mui/base/Select";
import { Option as BaseOption, optionClasses } from "@mui/base/Option";
import { styled } from "@mui/system";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import { useAppContext } from "../context/AppContext";
import { fromLocalStorage, toLocalStorage } from "../utils/localStorage";
import { useSnackbar } from "notistack";

const Diff = require("diff");

function Banner() {
  const { state, setState } = useAppContext();

  const { jsonData } = state;

  const { enqueueSnackbar } = useSnackbar();

  function handleClickShare() {
    // document
    //   .getElementById("modal-share-conversation")
    //   .classList.toggle("show-modal");
    const stringifiedJson = JSON.stringify(jsonData);

    navigator.clipboard.writeText(stringifiedJson);

    enqueueSnackbar("JSON Copied!", { variant: "success" });
  }

  function handleClickNew() {
    document
      .getElementById("modal-new-conversation")
      .classList.toggle("show-modal");
  }

  function handleClickSave() {
    toLocalStorage("jsonData", jsonData);
    enqueueSnackbar("Saved to Local Storage!", { variant: "success" });
  }

  function handleClickCompare() {
    const oldMessages = fromLocalStorage("jsonData")?.messages;

    const diff = Diff.diffJson(oldMessages, jsonData.messages);

    let output = "";
    let removed = [];
    let added = [];

    diff.forEach((item) => {
      // green for additions, red for deletions
      // grey for common parts
      const color = item.added ? "green" : item.removed ? "red" : "grey";

      if (color === "red") {
        removed.push(item.value);
      }

      if (color === "green") {
        added.push(item.value);
      }
    });
  }

  return (
    <div className="banner">
      <div className="banner-subsection banner-files">
        <h2 className="banner-files__logo">Playground</h2>

        <Select defaultValue={"Prompt_1"}>
          <Option value={"Prompt_1"}>Prompt 1</Option>
          <Option value={"Prompt_2"}>Prompt 2</Option>
          <Option value={"Prompt_3"}>Prompt 3</Option>
        </Select>

        <div className="banner-files__prompts banner-select"></div>
      </div>
      <div className="banner-subsection banner-user">
        <div className="banner-buttons">
          <button onClick={handleClickNew} className="btn btn-banner">
            <HiOutlineDocumentPlus />
            <span>New</span>
          </button>
          <button className="btn btn-banner" onClick={handleClickSave}>
            <FaSave />
            <span>Save</span>
          </button>
          <button onClick={handleClickCompare} className="btn btn-banner">
            <TbGitCompare />
            <span>Compare</span>
          </button>
          <button onClick={handleClickShare} className="btn btn-banner">
            <TbShare2 />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  900: "#003A75",
};

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
