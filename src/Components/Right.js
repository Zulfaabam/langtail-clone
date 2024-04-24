import * as React from 'react';
import PropTypes from 'prop-types';
import { Select as BaseSelect, selectClasses } from '@mui/base/Select';
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import { styled } from '@mui/system';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import { BsFilterSquare } from "react-icons/bs";

function Right(props) {
    const { jsonData } = props;

    return (
        <div className="container container-right">
            <div className="right-parameters">
                <BsFilterSquare />
                    <span>Parameters</span>
                </div>
            <div className="container-right__select">
                <h3 className="banner-files__logo">Model</h3>
                <Select defaultValue={jsonData.model}>
                    <Option value={jsonData.model}>{jsonData.model}</Option>
                    <Option value="Chat GPT 4">Chat GPT 4</Option>
                    <Option value="Chat GPT 3.5 Plus">Chat GPT 3.5 Plus</Option>
                    
                </Select>
            </div>

            <div className="container-right__slider">
                <div className="container-right__slider-title">
                    <h3>Temperature</h3>
                    <span className="info-slider__span">0.2</span>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0" max="2" step="0.1" id="temperature">
                    </input>
                </div>
            </div>

            <div className="container-right__slider">
                <div className="container-right__slider-title">
                    <h3>Max tokens</h3>
                    <span className="info-slider__span">800</span>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0" max="4096" step="1" id="max-tokens">
                    </input>
                </div>
            </div>

            <div className="container-right__select">
                <h3 className="banner-files__logo">Stop sequences</h3>
                <input className="select-input" name="stop-sequences" id="stop-sequences" placeholder="Enter sequence">
                </input>
            </div>

            <div className="container-right__slider">
                <div className="container-right__slider-title">
                    <h3>Top P</h3>
                    <span className="info-slider__span">1</span>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0" max="1" step=".01" id="top-p">
                    </input>
                </div>
            </div>

            <div className="container-right__slider">
                <div className="container-right__slider-title">
                    <h3>Presence penalty</h3>
                    <span className="info-slider__span">.5</span>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0" max="2" step=".1" id="presence-penalty">
                    </input>
                </div>
            </div>

            <div className="container-right__slider">
                <div className="container-right__slider-title">
                    <h3>Frequency penalty</h3>
                    <span className="info-slider__span">.5</span>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0" max="1" step=".1" id="frequency-penalty">
                    </input>
                </div>
            </div>

            <div className="container-right__toggle">
                <h3>Streaming</h3>
                <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider-toggle round"></span>
                </label>
            </div>

            <div className="container-right__toggle">
                <h3>JSON Mode</h3>
                <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider-toggle round"></span>
                </label>
            </div>

        </div>
    )
}

export default Right


const Select = React.forwardRef(function Select(props, ref) {
    const slots = {
      root: CustomButton,
      listbox: Listbox,
      popup: Popup,
      ...props.slots,
    };
  
    return <BaseSelect {...props} ref={ref} slots={slots} />;
  });

  const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    900: '#003A75',
  };
  
 
  
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
  
  const StyledButton = styled('button', { shouldForwardProp: () => true })(
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
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
    }
  
    & > svg {
      font-size: 1rem;
      position: absolute;
      height: 100%;
      top: 0;
      right: 10px;
    }
    `,
  );
  
  const Listbox = styled('ul')(
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
    `,
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
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
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
    `,
  );
  
  const Popup = styled('div')`
    z-index: 1;
  `;