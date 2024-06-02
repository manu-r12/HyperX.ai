"use client"
import { javascript } from '@codemirror/lang-javascript';
import { githubDark } from '@uiw/codemirror-theme-github';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback, useState } from 'react';

export default function Editor() {

  const customStyles = `
    .cm-keyword-manu { color: blue; font-weight: bold; } // Change the color and weight of 'function' keyword`;

    const [value, setValue] = useState("const hello = hello worldconsole.log(hello");
    
    // this the github dark theme
    const onChange = useCallback((val: string) => {
      setValue(val);
    }, []);

    return <CodeMirror 
            theme={githubDark}
            value={value} 
            height="85vh" 
            extensions={[javascript({ jsx: true })]} 
            onChange={onChange}
          />;
}
