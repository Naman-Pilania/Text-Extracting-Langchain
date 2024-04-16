import React from 'react';
import '../styles/about.css'

function About() {
    return (
        <div>
            <h1>PROJECT - 1: Enhanced Text Extractor Tool</h1>
            <section>
                <h2>Objective</h2>
                <p>
                    Develop an Enhanced Text Extraction and Enrichment tool that utilizes the Langchain library for text extraction and OpenAI for data enrichment. The tool will be implemented as a web application using Next.js/React.js/Node.js stack. It will allow users to upload files, extract text from PDF formats, enrich the extracted data using OpenAI, and display the processed results in an interactive table format.
                </p>
            </section>
            <section>
                <h2>Deliverables</h2>
                <ul>
                    <li>A fully functional Next.js/NodeJS web application.</li>
                    <li>An intuitive and interactive user interface for file uploads and data display.</li>
                    <li>Comprehensive documentation covering setup, usage, and design decisions.</li>
                </ul>
            </section>
            <section>
                <h2>Features</h2>
                <p>
                    <strong>Text Extraction:</strong>
                </p>
                <ul>
                    <li>Implement text extraction functionality to extract text from uploaded files.</li>
                    <li>Support extraction from PDF file formats.</li>
                </ul>
                <p>
                    <strong>Data Enrichment:</strong>
                </p>
                <ul>
                    <li>Utilize OpenAI to enrich the extracted text data with additional insights or context.</li>
                </ul>
                <p>
                    <strong>API Development:</strong>
                </p>
                <ul>
                    <li>Develop RESTful API routes for handling file uploads, text extraction, and data enrichment.</li>
                </ul>
            </section>
        </div>
    );
}

export default About;
