import React, { useState, useEffect } from 'react';
import { ChatOpenAI } from "@langchain/openai";
import '../styles/langchain.css';

const model = new ChatOpenAI({
    openAIApiKey: ""
});

function Langchain({ extractedText }) {
    const [prompt, setPrompt] = useState(extractedText);
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');

    const title = "Welcome to the AI-powered Text Generator";
    const emphasizedText = "This is an emphasized text example.";

    useEffect(() => {
        setPrompt(extractedText);
    }, [extractedText]);

    const handleGenerate = async () => {
        try {
            const answer = await model.invoke(prompt);
            console.log(answer.content);
            setResponse(answer.content);
            setError('');
        } catch (e) {
            console.error(e);
            setError('Error occurred while processing the prompt.');
            setResponse('');
        }
    };

    const handleClosePopup = () => {
        setResponse(''); // Clear response
        // window.location.href = '/upload'; // Redirect to /upload
    };

    return (
        <div className="langchain-container">
            <h1>{title}</h1>
            <p>{emphasizedText}</p>
            <input 
                type="text" 
                placeholder="Enter Prompt" 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
            />
            <button onClick={handleGenerate}>Generate</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {response && (
                <div className="popup">
                    <span className="close" onClick={handleClosePopup}>&times;</span>
                    {response.split('\n').map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Langchain;
