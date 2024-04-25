import { useState, useEffect } from 'react';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-json5';
import 'prismjs/components/prism-jsonp';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-json';

function Modal(props) {
    const { modalId, content, title, subtitle, isTextAreaSandbox, setJson, isModalImport } = props;
    const [code, setCode] = useState(content);
    const [isTextValidJson, setIsTextValidJson] = useState(true);

    function handleClickCancel() {
        document.getElementById(`${modalId}`).classList.remove("show-modal")
    }

    function handleClickSave() {
        if (isModalImport) {
            try {
                const parsedJson = JSON.parse(code);
                setJson(parsedJson);
                
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
            handleClickCancel();
        }
    }

    function testJSON(text) {
        if (typeof text !== "string") {
            return false;
        }
        try {
            JSON.parse(text);
            return true;
        } catch (error) {
            return false;
        }
    }

    useEffect(() => {
        // Check if code is valid JSON whenever code changes
        setIsTextValidJson(testJSON(code));
    }, [code]);
    
    console.log(content)

    return (
        <div id={modalId} className="modal-container">
            <div className="modal">
                <div className="modal-title">
                    <p className="modal-title-title">{title}</p>
                    <p className="modal-title-subtitle">{subtitle}</p>
                    {isTextValidJson? '': <p className="modal-title-subtitle warning">Your text is not valid JSON</p>}
                </div>

                <div className="modal-main">
                    {isTextAreaSandbox ?
                        <Editor
                            value={code}
                            onValueChange={newCode => {
                                setCode(newCode);
                            }}
                            highlight={code => highlight(code, languages.json)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 14,
                            }}
                        />
                        :
                        <textarea id="message" name="message" rows="10" className="text-area-main">
                            {content}
                        </textarea>
                    }

                </div>

                <div className="modal-footer">
                    <button
                        className="btn btn-modal"
                        onClick={handleClickCancel}
                    >
                        Cancel
                    </button>
                    <button className="btn btn-modal btn-save"
                        onClick={handleClickSave}
                    >Save</button>
                </div>
            </div>
        </div>

    )
}

export default Modal