import React from "react";

function LoL() {
    return (
        <main>
            <div className="game-logo">
            <h1>League of Legends</h1>
            </div>
            <div className="filter-header">
                <div className="filter"> 
                    <label>Oyun Modu</label>
                    <select>
                        <option value="-0">Tümü</option>
                        <option value="1">Sihirdar Vadisi (Dereceli) Tek/Çift</option>
                        <option value="2">Sihirdar Vadisi (Dereceli) Esnek</option>
                        <option value="3">Aram 5v5</option>
                        <option value="4">Sihirdar Vadisi (Sıralı)</option>
                        <option value="5">Sihirdar Vadisi (Hızlı Oyun)</option>
                        <option value="6">TFT</option>
                        <option value="7">1 vs 1</option>
                        <option value="8">2 vs 2</option>
                        <option value="9">3 vs 3</option>
                        <option value="10">4 vs 4</option>
                        <option value="11">Özel Oyun</option>
                    </select>
                </div>
                <div className="filter">
                    <label >Minimum Rank</label>
                    <select>
                            <option value="0">Demir</option>
                            <option value="1">Bronz</option>
                            <option value="2">Gümüş</option>
                            <option value="3">Altın</option>
                            <option value="4">Platin</option>
                            <option value="5">Zümrüt</option>
                            <option value="6">Elmas</option>
                            <option value="7">Ustalık</option>
                            <option value="8">Büyük Usta</option>
                            <option value="9">Şampiyonluk</option>
                    </select>
                </div>
                <div className="filter">
                    <label>Maksimum Rank</label>
                    <select>
                            <option value="0">Demir</option>
                            <option value="1">Bronz</option>
                            <option value="2">Gümüş</option>
                            <option value="3">Altın</option>
                            <option value="4">Platin</option>
                            <option value="5">Zümrüt</option>
                            <option value="6">Elmas</option>
                            <option value="7">Ustalık</option>
                            <option value="8">Büyük Usta</option>
                            <option value="9">Şampiyonluk</option>
                    </select>
                </div>
                <button className="refresh-button">
                    Uygula / Yenile
                </button>
            </div>
            <div className="find">
                <div className="find-header">
                    <div>Kullanıcı</div>
                    <div>Oyun modu</div>
                    <div>Lobi kodu</div>
                    <div>Min. - Maks. rank</div>
                    <div>Yaş aralığı</div>
                    <div>Aranan</div>
                    <div>Tarih</div>
                </div>
            </div>    
        </main>
    );
    }
export default LoL;