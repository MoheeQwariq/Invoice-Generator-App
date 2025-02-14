import { useState, useEffect } from 'react';
import profile1 from '../assets/profileImages/profile (1).png';
import profile2 from '../assets/profileImages/profile (2).png';
import profile3 from '../assets/profileImages/profile (3).png';
import profile4 from '../assets/profileImages/profile (4).png';
import profile5 from '../assets/profileImages/profile (5).png';

const profileImages = [profile1, profile2, profile3, profile4, profile5];

const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * profileImages.length);
    return profileImages[randomIndex];
};

const useRandomImage = (invoiceNumber: string) => {
    const [image, setImage] = useState<string>('');

    useEffect(() => {
        const storedImage = localStorage.getItem(`invoiceImage-${invoiceNumber}`);
        if (storedImage) {
            setImage(storedImage);
        } else {
            const newImage = getRandomImage();
            localStorage.setItem(`invoiceImage-${invoiceNumber}`, newImage);
            setImage(newImage);
        }
    }, [invoiceNumber]);

    return image;
};

export default useRandomImage;
