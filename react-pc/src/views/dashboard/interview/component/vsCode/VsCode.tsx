import React, { Fragment, useState } from "react";
import './VsCode.scss';
import MonacoEditor from 'react-monaco-editor';

export function VsCode(props: any) {

    const [code, setCode] = useState('code');
    props.code && setCode(props.code);
    const [options, setOptions] = useState({
        selectOnLineNumbers: true
    });
    props.options && setOptions(props.options);

    function editorDidMount(editor: { focus: () => void; }, monaco: any) {
        console.log('editorDidMount', editor);
        editor.focus();
    }
    function onChange(newValue: any, e: any) {
        console.log('onChange', newValue, e);
    }

    return (
        <Fragment>
            <MonacoEditor
                width="800"
                height="600"
                language="javascript"
                theme="vs-dark"
                value={code}
                options={options}
                onChange={onChange}
                editorDidMount={editorDidMount}
            />
        </Fragment>
    )
}