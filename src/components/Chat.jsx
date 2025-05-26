import React, { useState } from "react";
import "./Chat.css";

function Chat(props) {
  const [acikMi, setAcikMi] = useState(false);
  const [mesajlar, setMesajlar] = useState([]);
  const [yeniMesaj, setYeniMesaj] = useState("");

  function sohbetiAcKapat() {
    setAcikMi(!acikMi);
  }

  function mesajGonder() {
    if (yeniMesaj.trim() === "") {
      return;
    }
    const mesaj = {
      kullanici: props.username,
      resim: props.profileImage,
      yazi: yeniMesaj,
      saat: new Date().toLocaleTimeString()
    };
    setMesajlar([...mesajlar, mesaj]);
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
                  <img src={mesaj.resim} alt="Profil" />
                  <div>
                    <b>{mesaj.kullanici}</b>
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