function Modal(props) {
    const { jsonData } = props;
    console.log(jsonData.user);

    function handleClickCancel() {
        document.getElementById('modal').classList.remove("show-modal")
    }

    return (
        <div id="modal" className="modal-container">
            <div className="modal">
                <div className="modal-title">
                    <p className="modal-title-title">Import Conversation</p>
                    <p className="modal-title-subtitle">Paste JSON of the conversation</p>
                </div>

                <div className="modal-main">
                    <textarea id="message" name="message" className="text-area-modal">
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis prae
                    </textarea>
                </div>

                <div className="modal-footer">
                    <button
                        className="btn btn-modal"
                        onClick={handleClickCancel}
                    >
                        Cancel
                    </button>
                    <button className="btn btn-modal btn-save">Save</button>
                </div>
            </div>
        </div>

    )
}

export default Modal