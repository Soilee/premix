import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { Routes, Route, Navigate } from 'react-router-dom';
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
import { getUsername } from "./utils/getUsername";
import { useNavigate } from "react-router-dom";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

   const navigate = useNavigate();

  const username = "Kullanıcı";
  const profileImage = "https://placehold.co/40x40";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setCurrentUser(user);
      if (!user) {
        localStorage.clear();
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    alert("Çıkış yapıldı.");
    navigate("/login");

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
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<About />} />
            <Route path="/accountchange" element={<AccountChange />} />
          </Routes>
        </main>
        <Footer />
      </div>
{isAuthenticated && (
<Chat
  username={getUsername()}
  profileImage={
    localStorage.getItem("profileImage") ||
    (currentUser && currentUser.photoURL) ||
    "https://placehold.co/40x40"
  }
/>
)}
    </>
  );
}

export default App;