import { useState } from 'react';

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
    const { modalId, content, title, subtitle, isTextAreaSandbox } = props;
    const [code, setCode] = useState(`${content}`);
    console.log(content)

    function handleClickCancel() {
        document.getElementById(`${modalId}`).classList.remove("show-modal")
    }

    return (
        <div id={modalId} className="modal-container">
            <div className="modal">
                <div className="modal-title">
                    <p className="modal-title-title">{title}</p>
                    <p className="modal-title-subtitle">{subtitle}</p>
                </div>

                <div className="modal-main">
                    {isTextAreaSandbox ?
                        <Editor
                            value={code}
                            onValueChange={code => setCode(code)}
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
                    <button className="btn btn-modal btn-save">Save</button>
                </div>
            </div>
        </div>

    )
}

export default Modal