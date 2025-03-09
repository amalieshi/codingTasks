import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <div className="navbar">
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="nav_link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="nav_link">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts" className="nav_link">
                            Contacts
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}