import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Main from '../Components/Main';
import { useNavigate } from 'react-router-dom';

const Upload = ({ onPhotoAdd }) => {
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate(); 
  
  const onDrop = useCallback((acceptedFiles) => {
    const updatedPhotos = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setPhotos([...photos, ...updatedPhotos]);
    onPhotoAdd([...photos, ...updatedPhotos]);

    navigate('/');
  }, [photos, onPhotoAdd, navigate]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} className=' border-[2px] border-dashed #888 border-r-4 p-10 text-center cursor-pointer'>    
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the photo here ...</p>
        ) : (
          <p>Drag and drop a photo here, or click to select a photo</p>
        )}
      </div>
      {photos.length > 0 && <Main photos={photos} />}
    </div>
  );
};



export default Upload

  



