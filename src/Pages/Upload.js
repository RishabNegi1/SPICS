import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Main from '../Components/Main';

const Upload = ({ onPhotoAdd }) => {
  const [photos, setPhotos] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const updatedPhotos = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setPhotos([...photos, ...updatedPhotos]);
    onPhotoAdd([...photos, ...updatedPhotos]);
  }, [photos, onPhotoAdd]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} style={styles.dropzone}>
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

const styles = {
  dropzone: {
    border: '2px dashed #888',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
  },
};

export default Upload

  



