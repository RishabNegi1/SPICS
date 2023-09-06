import './App.css';
import React, { useState } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Upload from './Pages/Upload';
import Login from './Pages/Login';
import Join from './Pages/Join';
import Account from './Pages/Account';
import { AuthContextProvider } from './Context/AuthContext';
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const handlePhotoAdd = (photos) => {
    setUploadedPhotos([...uploadedPhotos, ...photos]);
  }
  return (
    <div className="App">
      <BrowserRouter>
      <AuthContextProvider>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Main photos= {uploadedPhotos}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/join' element={<Join/>}/>
      <Route path='/up' element={<ProtectedRoutes><Upload onPhotoAdd={handlePhotoAdd}/></ProtectedRoutes>} />
      <Route path='/account' element={<ProtectedRoutes><Account/></ProtectedRoutes>}/>
      </Routes>
      </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
