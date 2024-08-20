import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    const [country, setCountry] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (country) {
            history.push(`/details/${country}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter country name" 
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;