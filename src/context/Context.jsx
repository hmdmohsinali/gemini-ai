import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext()



const ContextProvider = (props) =>{

    const [input,setInput] =  useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPropmts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    

    


    const onSent = async(prompt)=> {


        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        setPrevPrompts(prev=>[...prev,input])
        const response = await runChat(input)
        let formattedMessage = response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Format italic text
        formattedMessage = formattedMessage.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
        // Format headings
        formattedMessage = formattedMessage.replace(/## (.*?)(?:\n|$)/g, '<h2 className="text-lg">$1</h2>');
  
        // Format list items
        formattedMessage = formattedMessage.replace(/\* (.*?)(?:\n|$)/g, '<li>$1</li>');
  
        // Wrap paragraphs with <p> tags
        formattedMessage = formattedMessage.split(/\n\s*\n/).map(paragraph => `<p>${paragraph}</p>`).join('');
        
        
        setResultData(formattedMessage)
        setLoading(false)
        setInput("")

    }
    const contextValue = {

        prevPropmts,
        setPrevPrompts,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        onSent

    }

    return (
        <Context.Provider value={contextValue}>
            {
                props.children
            }
        </Context.Provider>
    )
}

export default ContextProvider