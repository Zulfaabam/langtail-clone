import { useState } from "react";
import MainMessage from "./MainMessage"
import { LuPlusCircle } from "react-icons/lu";
import { IoSend } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


function Main(props) {
    const { jsonData } = props;
    const [isSending, setIsSending] = useState(false);
    const [messages, setMessages] = useState(jsonData.messages);

    const handleMessageClick = () => {
        setMessages(prevState => [
            ...prevState,
            {
                name: "New_Name",
                role: "user",
                content: ""
            }
        ])
    }

    const handleClickSend = () => {
        setIsSending(true);
        setTimeout(() => {
            setIsSending(false)
        }, 1500)
    }

    return (
        <div className="container container-main">

            {/* <div className="container-main__box container-main__context">
                <div className="container-main__context-text">
                    <p>Always check the information in the conversation before dicidint the next action.</p>
                    <p>Getting more information is highly recommended.</p>
                    <p>Do note the special instruction when setting up a goal.</p>
                </div>


            </div>

            <div className="container-main__separator">
                -
            </div> */}


            <div className="container-main__messages">
                {messages.map((message, i) => {
                    return (
                        <MainMessage
                            key={`message ${Math.floor((Math.random() * 1000) + 1)}`}
                            message={message}
                            setMessages={setMessages}
                            i={i} />
                    );
                })}
            </div>

            <div className="container-main__box container-main__controls">
                <div className="container-main__controls-btns">
                    <button
                        className="btn btn-main__contrls"
                        onClick={handleMessageClick}
                    >
                        <LuPlusCircle />
                        <span>Message</span>
                    </button>
                    <button
                        className="btn btn-main__contrls btn-send"
                        onClick={handleClickSend}
                    >
                        {isSending ? (
                            <>
                                <AiOutlineLoading3Quarters 
                                className="loading-icon"/>
                                <span>Sending</span>
                            </>
                        ) : (
                            <>
                                <IoSend />
                                <span>Send</span>
                            </>
                        )}
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