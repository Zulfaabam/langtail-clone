import { FaChevronDown } from "react-icons/fa6";
import { LuPlusCircle } from "react-icons/lu";


function Left(props) {
    const { jsonData } = props;
    console.log(jsonData.user);

    function handleClick() {
        document.getElementById('modal-new-function').classList.toggle("show-modal")
    }

    function handleClickEdit() {
        document.getElementById('modal-edit-function').classList.toggle("show-modal")
    }

    function handleClickTools() {
        document.getElementById('select-tool').classList.toggle("select-tool-show")
    }

    return (
        <div className="container container-left">
            <div className="container-left__box container-left-border">
                <div className="container-left__tools paragraph-white ">
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
                    {jsonData.tools.map(tool => {
                        return (
                            <>
                                <p className="paragraph-white"
                                onClick={handleClickEdit}>{tool.function.name}</p>
                                <p>{tool.function.description}</p>
                            </>

                        )
                    })}


                </div>


            </div>
            <div className="container-left__box container-left-border">
                <button
                    className="btn btn-left"
                    onClick={handleClick}
                >
                    <LuPlusCircle />
                    Tool
                </button>
            </div>

        </div>
    )
}

export default Left