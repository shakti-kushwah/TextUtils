/*****            Understanding State & Handling Events in React       ******/


import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperClick = () => {
        // console.log("UpperCase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case", "success")
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case", "success")
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text has been cleared", "success")
    }

    const handleOnChange = (Event) => {
        setText(Event.target.value)
    }

    const handleCopy = () => {
        // let text = document.getElementById("myBox");
        // text.select();
        // document.getSelection().removeAllRanges();
        // navigator.clipboard.writeText(text.value);
        /* OR */
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to clipboard", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success")
    }

    const [text, setText] = useState('')
    // text = 'new text'      // wrong way to change the state
    // setText = 'new text'   // right way to change the state
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'? 'white':'black'}}>
                <h1 className='mb-2'> {props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#13466e':'light', color: props.mode==='dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
                </div>

                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleUpperClick}> Convert to UpperCase </button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleLowerClick}> Convert to LowerCase </button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}> handle Extra Spaces </button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>  Copy </button>
                <button disabled={text.length===0} className='btn btn-primary' onClick={handleClearClick}> Clear text </button>
            </div>

            <div className='container my-3' style={{color: props.mode==='dark'? 'white':'black'}}>
                <h2> Your Text Summary </h2>

                <p> 
                    words count : {text.split(/\s+/).filter((element)=> {return element.length !== 0}).length}, 
                    characters count : {text.length}
                </p>

                <p> {0.008 * text.split(/\s+/).filter((element)=> {return element.length !== 0}).length} minutes to read words </p>
                <h2> Preview </h2>
                <p> {text.length>0 ? text : "Nothing to preview!"} </p>
            </div>
        </>
    )
}
