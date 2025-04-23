// src/api.js

// Base URL of your Spring Boot backend
const BASE_URL = "http://localhost:8080/api";

/**
 * Log in with email & password.
 * @returns {Promise<string>} JWT token (as text)
 */
export async function login(email, password) {
    const res = await fetch(`${BASE_URL.replace(/\/api$/, "")}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `Login failed: ${res.status}`);
    }
    return await res.text();
}

/**
 * Fetch dashboard summary.
 * @returns {Promise<object>} summary payload
 */
export async function getDashboardSummary() {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No auth token found");
    const res = await fetch(`${BASE_URL}/dashboard/summary`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    if (!res.ok) throw new Error(`Failed to load summary: ${res.status}`);
    return await res.json();
}
/**
 * Fetch the list of rentable services.
 * @returns {Promise<Array>}
 */
export async function getServices() {
    const res = await fetch("http://localhost:8080/api/services", {
        headers: localStorage.getItem("token")
            ? { Authorization: `Bearer ${localStorage.getItem("token")}` }
            : {}
    });
    if (!res.ok) throw new Error(`Could not fetch services: ${res.status}`);
    return await res.json();
}