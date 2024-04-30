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

    const newChat = ()=>{
        setLoading(false);
        setShowResult(false);

    }
    


    const onSent = async(prompt)=> {


        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if (prompt !== undefined) {
            response = await runChat(prompt)
            setRecentPrompt(prompt)
        }
        else{
            setPrevPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
            response= await runChat(input)
        }
        
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
        onSent,
        newChat

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