import { FaChevronDown } from "react-icons/fa6";


function Left(props) {
    const { jsonData } = props;
    console.log(jsonData.user);

    function handleClick() {
        document.getElementById('modal-edit-function').classList.toggle("show-modal")
    }

    function handleClickTools() {
        document.getElementById('select-tool').classList.toggle("select-tool-show")
    }

    return (
        <div className="container container-left">
            <div className="container-left__box">
                <div className="container-left__tools paragraph-white">
                    <span>(x) Tools</span>
                    <div className="container-main__info-box">
                        650 Tokens
                    </div>
                    <FaChevronDown
                        className="icon"
                        onClick={handleClickTools}
                    />
                </div>
                <div id="select-tool" className="select-tool">
                    <button
                        className="btn btn-left"
                        onClick={handleClick}
                    >
                        Tool
                    </button>

                </div>
                {/* <div>
                    <p className="paragraph-white">create_goal</p>
                    <p>Category for each different topic in the message. Be as incluse as possible and don't leave
                        any category missing. Get all the categories that related to the message...
                    </p>
                </div>
                <div>
                    <p className="paragraph-white">send_onsite_request_to_staff</p>
                    <p>Send an on-site reuqest to staff</p>
                </div> */}
            </div>

        </div>
    )
}

export default Left