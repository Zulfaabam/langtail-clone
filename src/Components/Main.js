import MainMessage from "./MainMessage"

function Main() {
    return (
        <div className="container container-main">

            <div className="container-main__box container-main__context">
                <div className="container-main__context-text">
                    <p>Always check the information in the conversation before dicidint the next action.</p>
                    <p>Getting more information is highly recommended.</p>
                    <p>Do note the special instruction when setting up a goal.</p>
                </div>
                

            </div>

            <div className="container-main__separator">
                    -
            </div>


            <div className="container-main__messages">
                <MainMessage />
            </div>

            <div className="container-main__box container-main__controls">
                <div className="container-main__controls-btns">
                    <button className="btn btn-main__contrls">Message</button>
                    <button className="btn btn-main__contrls">Send</button>
                </div>
                <div className="container-main__info-box">
                    4500 Tokens
                </div>

            </div>
        </div>
    )
}

export default Main