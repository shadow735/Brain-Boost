import React, { useState } from 'react';
import './Marketplace.css'; // Import CSS file for styling
import animation1Gif from './1.gif'; // Import the GIF files
import animation2Gif from './2.gif'; 
import animation3Gif from './3.gif'; 
import sticker1 from './e1.png'; // Import the sticker images
import sticker2 from './e2.jpg'; // Import the sticker images
import sticker3 from './e3.jpg'; // Import the sticker images

function Marketplace() {
    const [selectedAnimation, setSelectedAnimation] = useState(null);
    const [selectedSticker, setSelectedSticker] = useState(null);
    const [coins, setCoins] = useState(100); // Example: initial coins for the user

    const buyAnimation = (animation) => {
        if (coins >= animation.price) {
            setCoins(coins - animation.price);
            setSelectedAnimation(animation);
            // Code to update user profile with the purchased animation
        } else {
            alert('Not enough coins to purchase this animation!');
        }
    };

    const buySticker = (sticker) => {
        if (coins >= sticker.price) {
            setCoins(coins - sticker.price);
            setSelectedSticker(sticker);
            // Code to update user profile with the purchased sticker
        } else {
            alert('Not enough coins to purchase this sticker!');
        }
    };

    // Dummy data for animations and stickers
    const animationsData = [
        { id: 1, name: 'Dancing', price: 20, image: animation1Gif }, // Include the imported GIF
        { id: 2, name: 'Runner', price: 30, image: animation2Gif },
        { id: 3, name: 'Hello ', price: 25,  image: animation3Gif},
    ];

    const stickersData = [
        { id: 1, name: 'Sticker 1', price: 10 , image: sticker1},
        { id: 2, name: 'Sticker 2', price: 15 , image: sticker2},
        { id: 3, name: 'Sticker 3', price: 12 , image: sticker3},
    ];

    return (
        <div className="marketplace-container">
            <h1>Marketplace</h1>
            <div>
                <h2>Animations</h2>
                <div className="items-container">
                    {animationsData.map((animation) => (
                        <div key={animation.id} className="item-card">
                            <div className="card-body">
                                <h5 className="card-title">{animation.name}</h5>
                                <img 
                                    src={animation.image} 
                                    alt={animation.name} 
                                    style={{ width: '200px', height: '200px' }} // Set fixed dimensions
                                />
                                <p className="card-text">Price: {animation.price} coins</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => buyAnimation(animation)}
                                >
                                    Buy
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2>Stickers</h2>
                <div className="items-container">
                    {stickersData.map((sticker) => (
                        <div key={sticker.id} className="item-card">
                            <div className="card-body">
                                <h5 className="card-title">{sticker.name}</h5>
                                <img 
                                    src={sticker.image} 
                                    alt={sticker.name} 
                                    style={{ width: '200px', height: '200px' }} // Set fixed dimensions
                                />
                                <p className="card-text">Price: {sticker.price} coins</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => buySticker(sticker)}
                                >
                                    Buy
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3>Available Coins: {coins}</h3>
            </div>
        </div>
    );
}

export default Marketplace;
