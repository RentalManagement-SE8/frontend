// src/Components/ServicesPage.jsx
import React, { useState, useEffect } from "react";
import { getServices } from "../api";
import ServiceCard from "./ServiceCard";
import "../Styles/ServicesPage.css";

export default function ServicesPage() {
    const [services, setServices] = useState([]);
    const [error, setError]     = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getServices()
            .then(setServices)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className="loading">Loading services…</p>;
    if (error)   return <p className="error">Error: {error}</p>;

    return (
        <div className="services-page">
            <div className="container">
                <h2>Our Available Rentals & Services</h2>
                <div className="services-grid">
                    {services.map(s => (
                        <ServiceCard key={s.id} service={s} />
                    ))}
                </div>
            </div>
        </div>
    );
}
