function Left(props) {
    const { jsonData } = props;

    function handleClick() {
        document.getElementById('modal').classList.toggle("show-modal")
    }

    return (
        <div className="container container-left">
            <div className="container-left__box">
                <div className="container-left__tools paragraph-white">(x) Tools</div>
                <div>
                    <p className="paragraph-white">create_goal</p>
                    <p>Category for each different topic in the message. Be as incluse as possible and don't leave
                        any category missing. Get all the categories that related to the message...
                    </p>
                </div>
                <div>
                    <p className="paragraph-white">send_onsite_request_to_staff</p>
                    <p>Send an on-site reuqest to staff</p>
                </div>
            </div>
            <div className="container-left__box">
                <button
                    className="btn btn-left"
                    onClick={handleClick}
                >
                    Tool
                </button>
            </div>
        </div>
    )
}

export default Left