import React, { createContext, useContext, useState } from "react";

const HomeLoadingContext = createContext({
    isHomeLoading: false,
    setHomeLoading: () => {},
});

export function HomeLoadingProvider({ children }) {
    const [isHomeLoading, setHomeLoading] = useState(false);

    return (
        <HomeLoadingContext.Provider value={{ isHomeLoading, setHomeLoading }}>
            {children}
        </HomeLoadingContext.Provider>
    );
}

export function useHomeLoading() {
    return useContext(HomeLoadingContext);
}
