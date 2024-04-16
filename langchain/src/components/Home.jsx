import React, { useState } from 'react';
import '../styles/home.css';
import Langchain from './Langchain'; // Import the Langchain component

function Home() {
    const [extractedText, setExtractedText] = useState('');
    const [whattodo, setWhatToDo] = useState('');

    const handleUpload = () => {
        const fileInput = document.getElementById('inpFile');
        const formData = new FormData();
        formData.append('pdfFile', fileInput.files[0]);

        fetch('http://localhost:3001/extract-text', {
            method: 'post',
            body: formData
        })
        .then(response => response.text())
        .then(extractedText => {
            setExtractedText(extractedText);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="container">
            <input type="file" id="inpFile" />
            <button type="button" id="btnUpload" onClick={handleUpload}>Upload</button>
            <br />
            <br />
            <div className="text-area-container">
                <pre id="resultText" className="text-area">
                    {extractedText}
                </pre>
            </div>
            {/* Pass extractedText as a prop to the Langchain component */}
            <label htmlFor="whattodo">What To Do?</label>
            <input
                type="text"
                id="whattodo"
                value={whattodo}
                onChange={(e) => setWhatToDo(e.target.value)}
            />
            {extractedText && <Langchain extractedText={whattodo + extractedText} />}
        </div>
    );
}

export default Home;
