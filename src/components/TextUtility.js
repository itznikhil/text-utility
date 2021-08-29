import React from 'react' 
import { Form, Button } from 'react-bootstrap'

export default function TextUtility(props) {
    const [text, setText] = React.useState('')
    const handleInputChange = (e) => {
        const value = e.target.value
        setText(value)
    }
    const countWords =(s)=>{
        s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
        s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
        s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
        return s.split(' ').filter(function(str){return str!=="";}).length;
        //return s.split(' ').filter(String).length; - this can also be used
    }
    const copyText = () =>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard!", "success");
    }
    const capitalizeEachWord = () =>{
        const words = text.split(' ')
        const capitalizedWords = words.map((word)=>{
            return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
        })       
        const eachWordCapitalizedText = capitalizedWords.join(" ") 
        setText(eachWordCapitalizedText)
        props.showAlert("Capitalized Each Word!", "success");
    }
    const lowerCase = () =>{
        setText(text.toLowerCase())
        props.showAlert("Converted to lowercase!", "success");
    }   
    const upperCase = () =>{
        setText(text.toUpperCase())
        props.showAlert("Converted to uppercase!", "success");
    }
    const removeSpecialCharacters = () =>{
        const specialCharactersRemovedString = text.replace(/[^a-zA-Z0-9 ]/g, "")
        setText(specialCharactersRemovedString)
        props.showAlert("Removed special characters!", "success");
    }
    const removeExtraSpaces = () =>{
        const filteredString = text.replace(/\s+/g, ' ').trim()
        setText(filteredString)       
        props.showAlert("Removed extra spaces!", "success"); 
    }
    return (
        <div className="container mt-3">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label style={{fontSize:36, fontWeight:500}}>Try Text Utility - word counter, character counter, remove extra spaces</Form.Label>
                    <Form.Control as="textarea" rows={8} onChange={handleInputChange} value={text} />
                </Form.Group>
                <Button variant="primary" className="me-3 my-2" onClick={capitalizeEachWord} disabled={text.length===0}>Capitalize Each Word</Button>
                <Button variant="primary" className="me-3 my-2" onClick={upperCase} disabled={text.length===0}>Convert to Uppercase</Button>
                <Button variant="primary" className="me-3 my-2" onClick={lowerCase} disabled={text.length===0}>Convert to Lowercase</Button>
                <Button variant="primary" className="me-3 my-2" onClick={removeExtraSpaces} disabled={text.length===0}>Remove Extra Spaces</Button>
                <Button variant="primary" className="me-3 my-2" onClick={removeSpecialCharacters} disabled={text.length===0}>Remove Special Characters</Button>
            </Form>

            <h2 className="mt-3">Your text summary</h2>
            <p>{countWords(text)} words and {text.length} characters</p>
            <p>{countWords(text) / 250} Minutes Read</p> 
            <h2 className="mt-3">Preview</h2>
            <p>{text?text:"Nothing to preview!"}</p>
            <Button variant="primary" className="my-2" onClick={copyText} disabled={text.length===0}>Copy Text</Button>
        </div>
    )
}
