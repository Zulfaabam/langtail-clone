import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbMathFunction } from "react-icons/tb";

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';


// import { RiFileImageLine } from "react-icons/ri";

function MainMessage(props) {
    const { message, setMessages, i } = props;
    const [codeEditorsNum, setCodeEditorsNum] = useState([0]);
    const [code, setCode] = useState(
        message.content
    );

    const handleToolClick = () => {
        setCodeEditorsNum(prevState => [
            ...prevState,
            0
        ])
    }

    const handleDeleteClick = (i) => {
        setMessages(prevState => {
            // Create a copy of the messages array
            const updatedMessages = [...prevState];
            // Remove the message at the specified index
            updatedMessages.splice(i, 1);
            // Return the updated messages array
            return updatedMessages;
        });
    }

    return (
        <div className="container container-main__box container-main-message"
            id={`message ${i}`}>
            <div className="main-message__select">
                <select className="select-input" name="cars" id="cars">
                    <option value="volvo">{message.role}</option>
                    <option value="saab">system</option>
                    <option value="mercedes">assistant</option>
                </select>
            </div>
            <div className="main-message__text-area">
                {message.role === "tool" ?
                    codeEditorsNum.map((editor, i) => {
                        return (
                            <div className="code-editor-container">
                                <Editor
                                    key={`editor ${editor} ${message.content} ${i}`}
                                    value={code}
                                    onValueChange={code => setCode(code)}
                                    highlight={code => highlight(code, languages.js)}
                                    padding={10}
                                    style={{
                                        fontFamily: '"Fira code", "Fira Mono", monospace',
                                        fontSize: 14,
                                    }}
                                />
                            </div>
                        )
                    })

                    :
                    <>
                        <textarea id="message" name="message" rows="10" className="text-area-main">
                            {message.content}
                        </textarea>
                    </>


                }




            </div>
            <div className="main-message__buttons">
                {message.role === "tool" ?
                    <>
                        <button
                            className="btn-small"
                            onClick={handleToolClick}
                        >
                            <TbMathFunction />
                        </button>
                    </>
                    : ''}


                <button
                    className="btn-small"
                    onClick={() => handleDeleteClick(i)}
                ><RiDeleteBin6Line /></button>
            </div>
        </div>
    )
}

export default MainMessage