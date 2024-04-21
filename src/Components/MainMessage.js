import { RiDeleteBin6Line } from "react-icons/ri";
import { RiFileImageLine } from "react-icons/ri";

function MainMessage(props) {
    const { jsonData, message } = props;
    console.log(jsonData.user);

    return (
        <div className="container container-main__box container-main-message">
            <div className="main-message__select">
                <select className="select-input" name="cars" id="cars">
                    <option value="volvo">{message.role}</option>
                    <option value="saab">User</option>
                    <option value="mercedes">Assistant</option>
                </select>
            </div>
            <div className="main-message__text-area">
                <textarea id="message" name="message" rows="10" className="text-area-main">
                    {message.content}
                </textarea>


            </div>
            <div className="main-message__buttons">
                <button className="btn-small"><RiFileImageLine /></button>
                <button className="btn-small"><RiDeleteBin6Line /></button>
            </div>
        </div>
    )
}

export default MainMessage