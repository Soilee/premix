import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Valorant from "./pages/Valorant";
import LoL from "./pages/LoL";
import CsGo from "./pages/Csgo";
import Chat from "./components/Chat";
import Account from "./pages/Account";
import About from "./pages/About";
import Footer from "./components/Footer";
import AccountChange from "./pages/AccountChange";




  


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate=useNavigate();
  
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const username = storedUser.username || "Misafir";
  const profileImage=localStorage.getItem("profileImage") || "https://placehold.co/40x40";


  // Tarayıcı kapansa bile giriş bilgisi kalsın diye localStorage kontrolü
  useEffect(()=>{
    const loggedIn=localStorage.getItem("isAuthenticated")==="true";
    setIsAuthenticated(loggedIn);
  },[]);

    const handleLogout=()=>{
    console.log('Logging out...');
    localStorage.clear();
    setIsAuthenticated(false);
    navigate("/login");
    alert("Çıkış yapıldı.");
  };


  return (
<>
    
      <div className="App">
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <main>
          <Routes>
            <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />

            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/valorant" element={isAuthenticated === null ? null : isAuthenticated ? <Valorant /> : <Navigate to="/login" />} />
            <Route path="/csgo" element={isAuthenticated === null ? null : isAuthenticated ? <CsGo /> : <Navigate to="/login" />} />
            <Route path="/lol" element={isAuthenticated === null ? null : isAuthenticated ? <LoL /> : <Navigate to="/login" />} />
            <Route path="/account" element={<Account />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/accountchange" element={<AccountChange />} />
          </Routes>
        </main>
        <Footer/>
      </div>
      
{isAuthenticated && (
  <Chat username={username} profileImage={profileImage} />
)}
    </>
  );
}

export default App;
