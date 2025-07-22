import {createContext, useContext, useState, type ReactNode} from 'react';

interface User {
    id: string;
    email: string;
    name: string;
    token: string;
}

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    login: (token: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (token: string) => {
        try {
            const response = await fetch("http://localhost:8080/api/profile", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const userData = await response.json();
            setUser({...userData, token});
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
    };

    const value = {
        user,
        setUser,
        login,
        logout,
        isAuthenticated: !!user,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserContextProvider');
    }
    return context;
};

export default UserContext;
