import React, { useState, useEffect } from "react";
import "./Chat.css";
import { db } from "../firebase";
import { ref, push, onValue } from "firebase/database";
import { getUsername } from "../utils/getUsername";




const firebaseConfig = {
  apiKey: "AIzaSyCef4FVHtdYAdceWqOcj4NJJYQRTx2Gi8w",
  authDomain: "premix-3a811.firebaseapp.com",
  databaseURL: "https://premix-3a811-default-rtdb.firebaseio.com", 
  projectId: "premix-3a811",
  storageBucket: "premix-3a811.appspot.com",
  messagingSenderId: "752449813800",
  appId: "1:752449813800:web:fe8551e86b5c2a6743241d",
  measurementId: "G-T6NVS61X1S"
};


function Chat(props) {
  const [acikMi, setAcikMi] = useState(false);
  const [mesajlar, setMesajlar] = useState([]);
  const [yeniMesaj, setYeniMesaj] = useState("");

    useEffect(() => {
    const mesajRef = ref(db, "mesajlar");
    onValue(mesajRef, (snapshot) => {
      const data = snapshot.val();
      const arr = data ? Object.values(data) : [];
      setMesajlar(arr);
    });
  }, []);

  function sohbetiAcKapat() {
    setAcikMi(!acikMi);
  }

function mesajGonder() {
  if (yeniMesaj.trim() === "") {
    return;
  }
  const mesaj = {
    kullanici: props.username || "Kullanıcı",
    resim: props.profileImage || "https://placehold.co/40x40",
    yazi: yeniMesaj,
    saat: new Date().toLocaleTimeString()
  };
  push(ref(db, "mesajlar"), mesaj);
  setYeniMesaj("");
}

  function tusKontrol(e) {
    if (e.key === "Enter") {
      mesajGonder();
    }
  }

  return (
    <div className="chat-container">
      <button className="chat-toggle" onClick={sohbetiAcKapat}>
        💬
      </button>
      {acikMi && (
        <div className="chat-box">
          <div className="chat-header">
            <h3>Global Sohbet</h3>
            <button onClick={sohbetiAcKapat}>Kapat</button>
          </div>
          <div className="chat-messages">
            {mesajlar.map(function(mesaj, i) {
              return (
                <div key={i} className="chat-message">
                  <img src={mesaj.resim || "https://placehold.co/40x40"} alt="Profil" />
                  <div>
                    <b>{mesaj.kullanici || "Kullanıcı"}</b>
                    <p>{mesaj.yazi}</p>
                    <span>{mesaj.saat}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Mesajınızı yazın..."
              value={yeniMesaj}
              onChange={function(e) { setYeniMesaj(e.target.value); }}
              onKeyDown={tusKontrol}
            />
            <button onClick={mesajGonder}>Gönder</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;