import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoggedUser = localStorage.getItem("isLoggedIn");
        if (storedLoggedUser === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (email, password) => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <React.Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={handleLogout} />
            <main>
                {!isLoggedIn && <Login onLogin={handleLogin} />}
                {isLoggedIn && <Home onLogout={handleLogout} />}
            </main>
        </React.Fragment>
    );
}

export default App;
