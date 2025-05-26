import React from "react";
import { Link } from "react-router-dom";

function Header({isAuthenticated, onLogout}){
    const storedUser = JSON.parse(localStorage.getItem("user"));
    return(
        <header className="header">
            <div className="logo">
                <h1>PREMIX</h1>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><Link to="/">Anasayfa</Link></li>
                    <li><Link to="/about">Hakkımızda</Link></li>
                    {isAuthenticated ? (
                        <li>
                            <Link to="/account"> {storedUser.username} </Link>
                            <button onClick={onLogout} className="logout-btn">Çıkış Yap</button>
                        </li>
                    ) : (
                    <li><Link to="/login">Giriş Yap</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
export default Header;