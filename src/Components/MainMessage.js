function MainMessage() {
    return (
        <div className="container container-main__box container-main-message">
            <div className="main-message__select">
                <select className="select-input" name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div className="main-message__text-area">
                <textarea id="message" name="message" className="text-area-main">
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis prae
                </textarea>
                

            </div>
            <div className="main-message__buttons">
                <button className="btn-small"></button>
                <button className="btn-small"></button>
            </div>
        </div>
    )
}

export default MainMessage