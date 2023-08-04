import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Upload from './Pages/Upload';

function App() {
  const handlePhotoAdd = (photos) => {
    // Handle the list of photos here, e.g., store it in state or send it to the server.
    console.log('Uploaded Photos:', photos);
  };
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<><Main/></>} />
          <Route path='/up' element={<Upload onPhotoAdd={handlePhotoAdd}/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
