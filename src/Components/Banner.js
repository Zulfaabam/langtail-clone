function Banner() {
    return (
        <banner className="banner">
            <div className="banner-subsection banner-files">
                <h2 className="banner-files__logo">Playground</h2>
                <select className="select-input" name="cars" id="cars">
                    <option value="volvo">Prompt 1</option>
                    <option value="saab">Prompt 2</option>
                    <option value="mercedes">Prompt 3</option>
                    <option value="audi">Prompt 4</option>
                </select>
                <div className="banner-files__prompts banner-select">

                </div>
            </div>
            <div className="banner-subsection banner-user">
                <div className="banner-buttons">
                    <button className="btn btn-banner">import</button>
                    <button className="btn btn-banner">save</button>
                    <button className="btn btn-banner">share</button>
                </div>
                <div className="banner-"></div>
            </div>
        </banner>
    )
}

export default Banner