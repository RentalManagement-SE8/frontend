import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import './assets/styles/main.css';

function App() {
    return (
        <Router>
            <AuthProvider>
                <NotificationProvider>
                    <div className="app-container">
                        <Navbar />
                        <main className="main-content">
                            <AppRoutes />
                        </main>
                        <Footer />
                    </div>
                </NotificationProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;