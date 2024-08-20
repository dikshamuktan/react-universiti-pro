import React, { useState } from 'react';

const FavouritesPage = () => {
    const [favourites, setFavourites] = useState(() => JSON.parse(localStorage.getItem('favourites')) || []);

    const removeFromFavourites = (university) => {
        const updatedFavourites = favourites.filter(fav => fav.name !== university.name);
        setFavourites(updatedFavourites);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    };

    return (
        <div>
            <h1>Your Favourite Universities</h1>
            <ul>
                {favourites.map((uni, index) => (
                    <li key={index}>
                        <a href={uni.web_pages[0]} target="_blank" rel="noopener noreferrer">
                            {uni.name}
                        </a> - {uni.country}, {uni['state-province']}
                        <button onClick={() => removeFromFavourites(uni)}>Remove from Favourites</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavouritesPage;