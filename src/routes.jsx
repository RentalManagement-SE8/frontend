import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RentalDetailPage from './pages/RentalDetailPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import SearchPage from './pages/SearchPage';
import UserDashboardPage from './pages/UserDashboardPage';
import OwnerDashboardPage from './pages/OwnerDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProtectedRoute from './components/common/ProtectedRoute';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/rentals/:id" element={<RentalDetailPage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />

            {/* Protected Routes */}
            <Route
                path="/user/dashboard/*"
                element={
                    <ProtectedRoute role="user">
                        <UserDashboardPage />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/owner/dashboard/*"
                element={
                    <ProtectedRoute role="owner">
                        <OwnerDashboardPage />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/dashboard/*"
                element={
                    <ProtectedRoute role="admin">
                        <AdminDashboardPage />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;