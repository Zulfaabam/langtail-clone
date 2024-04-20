function Right() {
    return (
        <div className="container container-right">
            <div>Parameters</div>
            <div className="container-right__select">
                <h3 className="banner-files__logo">Model</h3>
                <select className="select-input" name="cars" id="cars">
                    <option value="volvo">Chat GPT 3.5</option>
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
                    <input type="range" min="1" max="100" value="50" class="slider" id="temperature">
                    </input>
                </div>
            </div>

            <div className="container-right__slider">
                <div className="container-right__slider-title">
                    <h3>Max tokens</h3>
                    <span className="info-slider__span">800</span>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="1" max="100" value="50" class="slider" id="max-tokens">
                    </input>
                </div>
            </div>

            <div className="container-right__select">
                <h3 className="banner-files__logo">Stop sequences</h3>
                <input className="select-input" name="cars" id="cars" placeholder="Enter sequence">
                </input>
            </div>

            <div className="container-right__slider">
                <div className="container-right__slider-title">
                    <h3>Top P</h3>
                    <span className="info-slider__span">1</span>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="1" max="100" value="50" class="slider" id="top-p">
                    </input>
                </div>
            </div>

            <div className="container-right__slider">
                <div className="container-right__slider-title">
                    <h3>Presence penalty</h3>
                    <span className="info-slider__span">0</span>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="1" max="100" value="50" class="slider" id="presence-penalty">
                    </input>
                </div>
            </div>

            <div className="container-right__slider">
                <div className="container-right__slider-title">
                    <h3>Frequency penalty</h3>
                    <span className="info-slider__span">0</span>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="1" max="100" value="50" class="slider" id="frequency-penalty">
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