"use client"

import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { useCallback, useEffect, useRef, useState } from 'react';
import { defaultKeymap } from "@codemirror/commands";
import { oneDark } from '@codemirror/theme-one-dark';
import {javascript} from "@codemirror/lang-javascript"


// the stats we need for the code editor are
// the filename , workspace , uid , 
// database to upload to persist the code file tp cloud 



// TODO: things to accomplish today
// use the original code mirror package  ✅

// TODO: Important ! .....
/* create a function or funcationality 
that is gonna higlight the line of code where the code suggestion is need
*/


// i am gonna use the original code mirror version from the official docs

export default function Editor() {

   const editorRef  = useRef<HTMLDivElement>(null)

   const languages = [
     javascript()
   ]

   useEffect(() =>{
    // if there is no ref just return 
     if (!editorRef.current) {
       return
     }

     const startState = EditorState.create({
        doc: "console.log('Hello Wor1d');",
        extensions: [keymap.of(defaultKeymap), 
                      languages,
                      oneDark,
                      EditorView.theme({
                        "&": { height: "100%" }, // Set the height
                      })
        ]
     })

     const view = new EditorView({
      state: startState,
      parent: editorRef.current
     });

    return () => {
      view.destroy();
    };

   }, [ ])



    return <div style={{height: "100vh"}}  ref={editorRef}/>
}
