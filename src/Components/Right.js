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
                <select className="select-input" name="cars" id="cars">
                    <option value="volvo">{jsonData.model}</option>
                    <option value="saab">Chat GPT 4</option>
                    <option value="mercedes">Chat GPT 3.5 Pus</option>
                </select>
            </div>

            <div className="container-right__slider">
                <div className="container-right__slider-title">
                    <h3>Temperature</h3>
                    <span className="info-slider__span">0.2</span>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0" max="2" step="0.1" value=".2" id="temperature">
                    </input>
                </div>
            </div>

            <div className="container-right__slider">
                <div className="container-right__slider-title">
                    <h3>Max tokens</h3>
                    <span className="info-slider__span">800</span>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0" max="4096" step="1" value="800" id="max-tokens">
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
                    <input type="range" min="0" max="1" step=".01" value="1" id="top-p">
                    </input>
                </div>
            </div>

            <div className="container-right__slider">
                <div className="container-right__slider-title">
                    <h3>Presence penalty</h3>
                    <span className="info-slider__span">.5</span>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0" max="2" step=".1" value=".5" id="presence-penalty">
                    </input>
                </div>
            </div>

            <div className="container-right__slider">
                <div className="container-right__slider-title">
                    <h3>Frequency penalty</h3>
                    <span className="info-slider__span">.5</span>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0" max="1" step=".1" value=".5" id="frequency-penalty">
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