import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import NavBar from "../routes/NavBar";
export default function Contact() {
    // Get the theme from the ThemeContext
    const { theme } = useContext(ThemeContext);
    return (
        <div>
            <NavBar />
            <h1>Contact Page</h1>
        </div>
    );
}