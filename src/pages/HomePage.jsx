// frontend/src/pages/HomePage.jsx

import React, { useEffect, useState } from 'react';
import { rentalService } from '../services/rentalService';
import './HomePage.css'; // optional: create for page‐specific styles

export default function HomePage() {
    const [rentals, setRentals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchRentals() {
            try {
                const data = await rentalService.list();
                setRentals(data);
            } catch (err) {
                console.error('Error loading rentals:', err);
                setError('Failed to load rentals.');
            } finally {
                setLoading(false);
            }
        }
        fetchRentals();
    }, []);

    if (loading) {
        return (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <p>Loading rentals…</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ textAlign: 'center', marginTop: '2rem', color: 'red' }}>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Available Rentals</h2>
            {rentals.length === 0 ? (
                <p>No rentals found. Be the first to create one!</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {rentals.map((rental) => (
                        <li key={rental._id} style={{ margin: '0.5rem 0' }}>
                            <a href={`/rentals/${rental._id}`} style={{ textDecoration: 'none' }}>
                                <strong>{rental.title}</strong> — ${rental.price}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
