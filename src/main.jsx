import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Loading from "./pages/Loading/Loading";
import "./index.css";

const Root = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 8000); // 8 seconds to check the loading screen, then load the homepage
        return () => clearTimeout(timer);
    }, []);

    return isLoading ? <Loading /> : <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
);
