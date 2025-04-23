// src/Components/ServiceCard.jsx
import React from "react";
import "../Styles/ServiceCard.css";

export default function ServiceCard({ service }) {
    return (
        <div className="service-card">
            <img
                src={`http://localhost:8080${service.imageUrl}`}
                alt={service.name}
            />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p className="price">${service.pricePerDay}/day</p>
            <button>Rent Now</button>
        </div>
    );
}
