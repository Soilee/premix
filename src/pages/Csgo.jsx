import React from "react";

function CsGo() {
    return (
        <main>
            <div className="game-logo" >
            <h1>Counter-Strike</h1>
            </div>
            <div className="filter-header">
                <div className="filter">
                    <label>Oyun Modu</label>
                    <select>
                        <option value="0">Tümü</option>
                        <option value="1">Rekabetçi</option>
                        <option value="2">Rahat</option>
                        <option value="3">Ölüm Kalım Maçı</option>
                        <option value="4">Kanat Oyunu</option>
                        <option value="5">Silah Yarışı</option>
                        <option value="6">Özel Oyun</option>
                    </select>
                </div>
                <div className="filter">
                    <label>Minimum Rank</label>
                    <select>
                            <option value="0">Gümüş</option>
                            <option value="1">Usta Gümüş</option>
                            <option value="2">Altın</option>
                            <option value="3">Usta Altın</option>
                            <option value="4">Usta Koruyucu</option>
                            <option value="5">Seçkin Usta Koruyucu</option>
                            <option value="6">Distinguished Usta Koruyucu</option>
                            <option value="7">Usta Efsanevi Kartal</option>
                            <option value="8">Yüce Usta Birinci Sınıf</option>
                            <option value="9">Global Seçkin</option>
                    </select>
                </div>
                <div className="filter">
                    <label>Maksimum Rank</label>
                    <select>
                            <option value="0">Gümüş</option>
                            <option value="1">Usta Gümüş</option>
                            <option value="2">Altın</option>
                            <option value="3">Usta Altın</option>
                            <option value="4">Usta Koruyucu</option>
                            <option value="5">Seçkin Usta Koruyucu</option>
                            <option value="6">Distinguished Usta Koruyucu</option>
                            <option value="7">Usta Efsanevi Kartal</option>
                            <option value="8">Yüce Usta Birinci Sınıf</option>
                            <option value="9">Global Seçkin</option>
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
export default CsGo;