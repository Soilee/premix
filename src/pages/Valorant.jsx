import React from "react";

function Valorant() {
    return (
        <div>
            <div className="game-logo">
            <h1>Valorant</h1>
            </div>
            <div className="filter-header">
                <div className="filter">
                    <label>Oyun Modu</label>
                    <select>
                        <option value="0">Tümü</option>
                        <option value="1">Dereceli</option>
                        <option value="2">Premier</option>
                        <option value="3">Derecesiz</option>
                        <option value="4">Tam Gaz</option>
                        <option value="5">Özel Oyun</option>
                        <option value="6">1 vs 1</option>
                        <option value="7">2 vs 2</option>
                    </select>
                </div>
                <div className="filter">
                    <label>Minimum Rank</label>
                    <select>
                            <option value="0">Demir</option>
                            <option value="1">Bronz</option>
                            <option value="2">Gümüş</option>
                            <option value="3">Altın</option>
                            <option value="4">Platin</option>
                            <option value="5">Elmas</option>
                            <option value="6">Yücelik</option>
                            <option value="7">Ölümsüz</option>
                            <option value="8">Radyant</option>
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
                            <option value="5">Elmas</option>
                            <option value="6">Yücelik</option>
                            <option value="7">Ölümsüz</option>
                            <option value="8">Radyant</option>
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
                <div class="table-row">
                    <div class="user-cell">
                        <img src="" alt="Avatar" class="avatar"/>
                        <span><strong>JOHARD#GAMER</strong></span>
                    </div>
                    <div><strong>Dereceli</strong></div>
                    <div class="lobby-code">TVQ660</div>
                    <div class="rank-cell">
                        <img src="" alt="Rank"/>
                        <span>-</span>
                        <img src="" alt="Rank"/>
                        </div>
                        <div>-</div>
                        <div><strong>+1</strong></div>
                        <div class="time-cell">
                        <span class="clock-icon">🕒</span>
                        <span><strong>1 dk.</strong></span>
                    </div>
                </div>
            </div>
        </div>
    );
    }
export default Valorant;
