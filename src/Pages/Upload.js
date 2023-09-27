import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
import { storage } from '../firebase';
import { uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref } from 'firebase/storage'; 
import { useDropzone } from 'react-dropzone'; 

const Upload = () => {
  const [photoURL, setPhotoURL] = useState(null);
  const navigate = useNavigate();
  const { user } = UserAuth();

  const onDrop = useCallback(async (acceptedFiles) => {
    if (user && acceptedFiles.length > 0) {
      try {
        const photo = acceptedFiles[0]; 
        const storageRef = ref(storage, `users/${user.uid}/${photo.name}`);
        await uploadBytes(storageRef, photo);
        const downloadUrl = await getDownloadURL(storageRef);
        setPhotoURL(downloadUrl);
        navigate('/account');
      } catch (error) {
        console.error('Error uploading photo:', error);
      }
    } else {
      console.log('User not authenticated or no photo selected.');
    }
  }, [user, navigate]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*', 
    disabled: !user, 
  });

  return (
    <div>
      {user ? (
        <div>
          <div
            {...getRootProps()}
            className={`border-[2px] border-dashed #888 border-r-4 p-10 text-center cursor-pointer ${
              isDragActive ? 'bg-gray-100' : '' 
            }`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the photo here ...</p>
            ) : (
              <p>Drag and drop a photo here, or click to select a photo</p>
            )}
          </div>
          {photoURL && (
            <div>
              <h3>Uploaded Photo:</h3>
              <img src={photoURL} alt="Uploaded" width="300" />
            </div>
          )}
        </div>
      ) : (
        <p>Please log in to upload photos.</p>
      )}
    </div>
  );
};

export default Upload;
