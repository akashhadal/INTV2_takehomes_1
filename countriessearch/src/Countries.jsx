import React, { useState, useEffect } from 'react';
import { countryFlags } from './api';
import Tile from './Tile';

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');

    const getFlagsData = async () => {
        try {
            const res = await countryFlags();
            setCountries(res);
        } catch (error) {
            console.log(error);
            console.error('Error Happening:', error);
            return null;
        }
    };

    useEffect(() => {
        getFlagsData();
    }, []);


    const handleSearch = (event) => {
        const { value } = event.target;
        setSearch(value);
    };

    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
            <input
                type="text"
                placeholder="Search for a country..."
                value={search}
                onChange={handleSearch}
                style={{ margin: '20px', padding: '10px', width: '300px', fontSize: '16px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                        <Tile key={country.cca3} flagUrl={country.flags.png} name={country.name.common} altFlag={country.flags.alt} />
                    ))
                ) : (
                    <p>No countries found</p>
                )}
            </div>
        </div>
    );
}
