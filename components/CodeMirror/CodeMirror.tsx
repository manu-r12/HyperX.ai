"use client"
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback, useState } from 'react';

export default function Editor() {

    const [value, setValue] = useState("console.log('hello world!');");

    const onChange =useCallback((val: string) => {
      setValue(val);
    }, []);

    return <CodeMirror 
    theme={"dark"}
    value={value} 
    height="90vh" 
    extensions={[javascript({ jsx: true })]} 
    onChange={onChange} />;
}
