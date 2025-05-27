import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { getUsername } from "../utils/getUsername";

function Footer() {
    const firebaseUser = auth.currentUser;
    const storedUser = JSON.parse(localStorage.getItem("user"));
    // kullanıcını adını her yerde sorunsuz kullanmak için gerekli kod 
    const username =
        firebaseUser?.displayName ||
        storedUser?.username ||
        storedUser?.displayName ||
        "Profil";
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h1>PREMIX</h1>
                </div>
                <div className="footer-columns">
                    <div className="footer-column">
                        <h3>SAYFALAR</h3>
                        <ul>
                            <li>
                               {/*   Sayfanın en üstüne çıkmak için */}
                           <button onClick={function() { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                              Başa dön
                            </button>
                            </li>
                            <li><Link to="/">Anasayfa</Link></li>
                            <li><Link to="/about">Hakkımızda</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>BİZE ULAŞ</h3>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/premixoffical/" target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://discord" target="_blank" rel="noopener noreferrer">
                                    Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>© 2025 Premix. Bütün haklar saklıdır.</p>
            </div>
        </footer>
    );
}

export default Footer;