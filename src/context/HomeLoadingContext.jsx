import React, { createContext, useContext, useState } from "react";

const HomeLoadingContext = createContext({
    isHomeLoading: false,
    setHomeLoading: () => {},
});

export function HomeLoadingProvider({ children }) {
    /* Start true to avoid header flash on first paint when landing on Home with loading */
    const [isHomeLoading, setHomeLoading] = useState(true);

    return (
        <HomeLoadingContext.Provider value={{ isHomeLoading, setHomeLoading }}>
            {children}
        </HomeLoadingContext.Provider>
    );
}

export function useHomeLoading() {
    return useContext(HomeLoadingContext);
}
