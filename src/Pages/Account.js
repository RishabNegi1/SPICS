import React, { useEffect, useState } from 'react';
import { UserAuth } from '../Context/AuthContext';
import { storage } from '../firebase';
import { list, ref, getDownloadURL } from 'firebase/storage';

const Account = () => {
  const { user } = UserAuth();
  const [photoURLs, setPhotoURLs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserPhotos = async () => {
      if (user) {
        try {
          
          const userPhotosRef = ref(storage, `users/${user.uid}`);

          const photoItems = await list(userPhotosRef);

          const photoURLPromises = photoItems.items.map(async (photoItem) => {
            const downloadUrl = await getDownloadURL(photoItem);
            return downloadUrl;
          });

          const photoUrls = await Promise.all(photoURLPromises);

          setPhotoURLs(photoUrls);
        } catch (error) {
          console.error('Error fetching user photos from Firebase Storage:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserPhotos();
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 mt-6">Your Account</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container mx-auto px-5 2xl:px-0 mt-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 lg:container">
            {photoURLs.map((photoURL, index) => (
              <div key={index} className="relative">
                <img src={photoURL} alt={`Uploaded ${index + 1}`} className="w-full h-auto rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
