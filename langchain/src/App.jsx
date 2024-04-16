import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";// Import BrowserRouter and Route from react-router-dom
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Popup from './components/Popup';
import Langchain from './components/Langchain';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './components/About';


function App() {
  return (
    <div>
      <Navbar/>
      <Popup/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/upload" element={<Home />} />
          <Route path="/langchain" element={<Langchain />} />
          <Route path="/about" element={<About />} />

         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
