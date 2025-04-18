import React, { createContext, useContext } from 'react';

const NotificationContext = createContext(null);

export function NotificationProvider({ children }) {
    // Replace this with real logic later
    const value = { notifications: [] };
    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
}

export function useNotifications() {
    return useContext(NotificationContext);
}
