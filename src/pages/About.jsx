import React from "react";
import Contact from "../components/Contact";
function About(){
    return(
        <div className="about-page">
            <h1>Hakkımızda</h1>
            <p className="about-us">Biz iki geliştiriciyiz; üniversitede tanıştık, birlikte projeler yaparak başladık. Mezun olduktan sonra farklı yerlerde deneyim kazandık ama üretme isteğimiz hep devam etti.
            Bu siteyi, hem bildiklerimizi paylaşmak hem de kendi küçük işlerimizi sergilemek için kurduk. Karmaşık hayallerimiz yok, sadece sade, işlevsel ve faydalı bir şeyler ortaya koymak istedik.
            Her satır kodda öğrenmeye, gelişmeye ve paylaşmaya devam ediyoruz.</p>
            <div className="founders">
                <h3>Kurucular</h3>
                <div className="founder">
                    <img src="google.svg" alt="Kurucu"/>
                    <h4>Ozan</h4>
                </div>
                <div className="founder">    
                    <img src="google.svg" alt="Kurucu" />
                    <h4>Atilla</h4>
                </div>
            </div>
            <Contact />
        </div> 
    );
};
export default About;