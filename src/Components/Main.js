import MainMessage from "./MainMessage"
import { LuPlusCircle } from "react-icons/lu";
import { IoSend } from "react-icons/io5";


function Main(props) {
    const { jsonData } = props;

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
                {jsonData.messages.map((message, index) => {
                    return (
                        <MainMessage 
                        key={`message ${index}`} 
                        message={message}
                        jsonData={jsonData} />
                    );
                })}
            </div>

            <div className="container-main__box container-main__controls">
                <div className="container-main__controls-btns">
                    <button className="btn btn-main__contrls">
                        <LuPlusCircle />
                        <span>Message</span>
                    </button>
                    <button className="btn btn-main__contrls btn-send">
                        <IoSend />
                        <span>Send</span>
                    </button>
                </div>
                <div className="container-main__info-box">
                    4500 Tokens
                </div>

            </div>
        </div>
    )
}

export default Main