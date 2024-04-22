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
    const { jsonData } = props;
    const [code, setCode] = useState(`${JSON.stringify(jsonData.tools[0])}`);
    console.log(code)

    function handleClickCancel() {
        document.getElementById('modal').classList.remove("show-modal")
    }

    return (
        <div id="modal" className="modal-container">
            <div className="modal">
                <div className="modal-title">
                    <p className="modal-title-title">Edit Function</p>
                    <p className="modal-title-subtitle">Edit your existing function</p>
                </div>

                <div className="modal-main">
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