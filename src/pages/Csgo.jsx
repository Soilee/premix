import React, { useState, useEffect } from "react";

function Csgo() {
  const [oyunModu, setOyunModu] = useState(0); 
  const [minRank, setMinRank] = useState(0); 
  const [maxRank, setMaxRank] = useState(8);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [players, setPlayers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newPlayer, setNewPlayer] = useState({
    username: "",
    oyunModu: 0,
    minRank: 0,
    maxRank: 8,
    lobbyCode: "",
    yasAraligi: "",
    aranan: "",
  });

  const ranks = ["Gümüş", "Gümüş Elit", "Altın Nova", "Usta Muhafız", "Usta Muhafız Elit", "Seçkin Usta Muhafız", "Efsanevi Kartal"," Efsanevi Kartal Usta", "Yüce Usta Birinci Sınıf", "Küresel Elit"];
  const modes = ["Seç","Tümü","Rekabetçi","Rahat","Ölüm Kalım Maçı","Kanat Oyunu","Silah Yarışı","Özel Oyun"];

  useEffect(() => {
    try {
      const stored = localStorage.getItem("csgoPlayers");
      if (stored) {
        const parsed = JSON.parse(stored);

        const formattedPlayers = parsed.map(player => ({
          ...player,
          oyunModu: Number(player.oyunModu),
          minRank: Number(player.minRank),
          maxRank: Number(player.maxRank)
        }));
        setPlayers(formattedPlayers);
        setFilteredPlayers(formattedPlayers);
      }
    } catch (error) {
      console.error("LocalStorage veri okuma hatası:", error);
      localStorage.removeItem("csgoPlayers");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("csgoPlayers", JSON.stringify(players));
  }, [players]);

const handleFilter = () => {
  console.log("Filtreleme yapılıyor:", { oyunModu, minRank, maxRank });
  const filtered = players.filter((player) => {
    const isModEqual = oyunModu === 0 || player.oyunModu === oyunModu;
    const isMinValid = player.minRank >= minRank;
    const isMaxValid = player.maxRank <= maxRank;
    console.log("Oyuncu:", player.username, { isModEqual, isMinValid, isMaxValid });
    return isModEqual && isMinValid && isMaxValid;
  });
  setFilteredPlayers(filtered);
};

  const handleModChange = (e) => setOyunModu(Number(e.target.value));
  const handleMinRankChange = (e) => setMinRank(Number(e.target.value));
  const handleMaxRankChange = (e) => setMaxRank(Number(e.target.value));

  const handleAddPlayer = (e) => {
    e.preventDefault();
    if (!newPlayer.username.trim()) {
      alert("Kullanıcı adı zorunludur!");
      return;
    }
    
    setPlayers([...players, newPlayer]);
    setFilteredPlayers([...filteredPlayers, newPlayer]);
    setNewPlayer({
      username: "",
      oyunModu: 0,
      minRank: 0,
      maxRank: 8,
      lobbyCode: "",
      yasAraligi: "",
      aranan: "",
    });
    setShowForm(false);
  };

  const rankOptions = () => {
    return ranks.map((rank, i) => (
      <option value={i} key={i}>{rank}</option>
    ));
  };

  const modeOptions = () => {
    return modes.map((mode, i) => (
      <option value={i + 1} key={i + 1}>{mode}</option>
    ));
  };

  const getModText = (cs) => {
    const csnum = parseInt(cs);
    if (csnum === 0) return "Seç";
    return modes[csnum - 1] || "Bilinmiyor";
  };

  const getRankText = (cs) => {
    const csnum = parseInt(cs);
    return ranks[csnum] || "Bilinmiyor";
  };

  return (
    <div className="csgo-container">
      <div className="filter-header">
        <div className="filter">
          <label>Oyun Modu</label>
          <select value={oyunModu} onChange={handleModChange}>
            {modes.map((mode, i) => (
              <option value={i + 1} key={i + 1}>{mode}</option>
            ))}
          </select>
        </div>

        <div className="filter">
          <label>Minimum Rank</label>
          <select value={minRank} onChange={handleMinRankChange}>
            {ranks.map((rank, i) => (
              <option value={i} key={i}>{rank}</option>
            ))}
          </select>
        </div>

        <div className="filter">
          <label>Maksimum Rank</label>
          <select value={maxRank} onChange={handleMaxRankChange}>
            {ranks.map((rank, i) => (
              <option value={i} key={i}>{rank}</option>
            ))}
          </select>
        </div>

        <button className="refresh-button" onClick={handleFilter}>
          Uygula / Yenile
        </button>

        <button 
          className="refresh-button" 
          onClick={() => setShowForm(!showForm)}
          aria-expanded={showForm}
        >
          {showForm ? "İptal" : "Kendi Bilgini Ekle"}
        </button>
      </div>

      {showForm && (
        <form className="form-popup" onSubmit={handleAddPlayer}>
          <h3>Bilgilerini Gir</h3>
          <input 
            placeholder="Kullanıcı Adı*" 
            value={newPlayer.username} 
            onChange={(e) => setNewPlayer({ ...newPlayer, username: e.target.value })}
            required
          />
          <input 
            placeholder="Lobi Kodu" 
            value={newPlayer.lobbyCode} 
            onChange={(e) => setNewPlayer({ ...newPlayer, lobbyCode: e.target.value })} 
          />
          <input 
            placeholder="Yaş Aralığı" 
            value={newPlayer.yasAraligi} 
            onChange={(e) => setNewPlayer({ ...newPlayer, yasAraligi: e.target.value })} 
          />
          <input 
            placeholder="Aradığı (örn. +1)" 
            value={newPlayer.aranan} 
            onChange={(e) => setNewPlayer({ ...newPlayer, aranan: e.target.value })} 
          />

          <label>Oyun Modu</label>
          <select 
            value={newPlayer.oyunModu} 
            onChange={(e) => setNewPlayer({ ...newPlayer, oyunModu: e.target.value })}
          >
            {modeOptions()}
          </select>

          <label>Minimum Rank</label>
          <select 
            value={newPlayer.minRank} 
            onChange={(e) => setNewPlayer({ ...newPlayer, minRank: e.target.value })}
          >
            {rankOptions()}
          </select>

          <label>Maksimum Rank</label>
          <select 
            value={newPlayer.maxRank} 
            onChange={(e) => setNewPlayer({ ...newPlayer, maxRank: e.target.value })}
          >
            {rankOptions()}
          </select>

          <button type="submit">Ekle</button>
        </form>
      )}

      <div className="find">
        <div className="find-header">
          <div>Kullanıcı</div>
          <div>Oyun modu</div>
          <div>Lobi kodu</div>
          <div>Min. - Maks. rank</div>
          <div>Yaş aralığı</div>
          <div>Aranan</div>
        </div>

        {(filteredPlayers.length > 0 ? filteredPlayers : players).map((player, index) => (
          <div className="table-row" key={`${player.username}-${index}`}>
            <div className="user-cell"><strong>{player.username}</strong></div>
            <div>{getModText(player.oyunModu)}</div>
            <div>{player.lobbyCode || "-"}</div>
            <div>{getRankText(player.minRank)} - {getRankText(player.maxRank)}</div>
            <div>{player.yasAraligi || "-"}</div>
            <div>{player.aranan || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Csgo;