// DMSfrontend-main/src/Components/CustomerDashboard.jsx

import React, { useState, useEffect } from "react";
import SupportChatWidget from "./SupportChatWidget";
import "../Styles/CustomerDashboard.css";
import { getDashboardSummary } from "../api";

export default function CustomerDashboard() {
    const [summary, setSummary] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDashboardSummary()
            .then((data) => setSummary(data))
            .catch((err) => setError(err.message));
    }, []);

    if (error) {
        return <div className="dashboard-error">Error: {error}</div>;
    }
    if (!summary) {
        return <div className="dashboard-loading">Loading…</div>;
    }

    return (
        <div className="dashboard-container">
            <h2>Welcome, {summary.userEmail}!</h2>

            <div className="dashboard-cards">
                <div className="card">
                    <h3>Total Properties</h3>
                    <p>{summary.totalProperties}</p>
                </div>
                <div className="card">
                    <h3>Active Rentals</h3>
                    <p>{summary.activeRentals}</p>
                </div>
                <div className="card">
                    <h3>Pending Payments</h3>
                    <p>{summary.pendingPayments}</p>
                </div>
            </div>

            <SupportChatWidget
                customerId={summary.customerId}
                managerId={summary.managerId}
            />
        </div>
    );
}
