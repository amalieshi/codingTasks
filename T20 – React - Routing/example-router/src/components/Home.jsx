import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext"; // Import ThemeContext

export default function Home() {
    const nav = useNavigate();
    // Get the theme and setTheme from the ThemeContext
    const { theme, setTheme } = useContext(ThemeContext);
    const [userName, setUserName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        if (userName.trim() !== "") {
            setIsLoggedIn(true);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserName("");
    };

    return (
        <div className={`app ${theme}`}>
            <div style={{ display: "flex", gap: "10px" }}>
                <button
                    onClick={() => nav(`/products`, { state: { product: "iPhone 16" } })}
                >
                    Buy
                </button>
                <button onClick={() => nav(`/about`)}>About</button>
            </div>
            <h1>Current Theme: {theme}</h1>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                Toggle Theme
            </button>
            <br></br>
            {/*  User login form */}
            {isLoggedIn ? (
                <div>
                    <h1>Welcome {userName}</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your name"
                    />
                    <button onClick={handleLogin} disabled={userName.trim() === ""}>
                        Login
                    </button>
                </div>
            )}
        </div>
    );
}