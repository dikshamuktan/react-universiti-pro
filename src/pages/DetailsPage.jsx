import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
    const { country } = useParams();
    const [universities, setUniversities] = useState([]);
    const [favourites, setFavourites] = useState(() => JSON.parse(localStorage.getItem('favourites')) || []);

    useEffect(() => {
        fetch(`http://universities.hipolabs.com/search?country=${country}`)
            .then(res => res.json())
            .then(data => setUniversities(data));
    }, [country]);

    const addToFavourites = (university) => {
        setFavourites([...favourites, university]);
        localStorage.setItem('favourites', JSON.stringify([...favourites, university]));
    };

    return (
        <div>
            <h1>Universities in {country}</h1>
            <ul>
                {universities.map((uni, index) => (
                    <li key={index}>
                        <a href={uni.web_pages[0]} target="_blank" rel="noopener noreferrer">
                            {uni.name}
                        </a> - {uni.country}, {uni['state-province']}
                        <button onClick={() => addToFavourites(uni)}>Add to Favourites</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DetailsPage;