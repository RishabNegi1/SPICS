import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Upload from './Pages/Upload';
import Login from './Pages/Login';
import Join from './Pages/Join';

function App() {
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const handlePhotoAdd = (photos) => {
    setUploadedPhotos([...uploadedPhotos, ...photos]);
  }
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Main photos= {uploadedPhotos}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/join' element={<Join/>}/>
      <Route path='/up' element={<Upload onPhotoAdd={handlePhotoAdd}/>} />
      </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
