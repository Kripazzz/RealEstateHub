
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Listings.css';

const Listings = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/listings')
            .then(response => setListings(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="Listings">
            <h2>Listings</h2>
            <div className="listings-grid">
                {listings.map(listing => (
                    <div className="listing" key={listing._id}>
                        <img src={listing.imageUrl} alt={listing.title} />
                     +   <h2>{listing.title}</h2>
                        <p>{listing.description}</p>
                        <p>${listing.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Listings;