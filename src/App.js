import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Upload from './Pages/Upload';
import Login from './Pages/Login';

function App() {
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const handlePhotoAdd = (photos) => {
    setUploadedPhotos([...uploadedPhotos, ...photos]);
  }
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar/>
      <Login path='login'/>
      <Routes>
      <Route path='/' element={<Main photos= {uploadedPhotos}/>}/>
      <Route path='/up' element={<Upload onPhotoAdd={handlePhotoAdd}/>} />
      </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
