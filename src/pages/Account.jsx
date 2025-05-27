import React, { useState, useEffect } from 'react';
import ProfilePhoto from '../components/ProfilePhoto';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Account() {
    const firebaseUser = auth.currentUser;
    const storedUser = JSON.parse(localStorage.getItem('user'));

const [photo, setPhoto] = useState(
    localStorage.getItem('profileImage') ||
    firebaseUser?.photoURL ||
    'https://placehold.co/40x40'
);


    const [userData, setUserData] = useState({
        username: firebaseUser?.displayName || storedUser?.username || "",
        email: firebaseUser?.email || storedUser?.email || "",
        password: storedUser?.password || "",
        nickname: storedUser?.nickname || "",
        LoL: storedUser?.LoL || "",
        csgo: storedUser?.csgo || "",
        Valo: storedUser?.Valo || "",
        bio: storedUser?.bio || "",
    });

// Oyun istatistikleri için state
    const [csgoStats, setCsgoStats] = useState(null);
    const [lolStats, setLolStats] = useState(null);
    const [valoStats, setValoStats] = useState(null);

    useEffect(() => {
        if (storedUser) {
            setUserData({
             username: storedUser.username || "",
            email: storedUser.email || "",
            password: storedUser.password || "",
            nickname: storedUser.nickname || "",
            LoL: storedUser.LoL || "",
             csgo: storedUser.csgo || "",
            Valo: storedUser.Valo || "",
            bio: storedUser.bio || "",
            });
        }
    }, []);

    // CS:GO istatistiklerini çek
    useEffect(() => {
        if (userData.csgo) {
            // tracker.gg API anahtarını kendin almalısın!
            fetch(`https://public-api.tracker.gg/v2/csgo/standard/profile/steam/${userData.csgo}`, {
                headers: { "TRN-Api-Key": "39bf7a10-ff44-4c29-bfae-728ca4832407" }
            })
                .then(res => res.json())
                .then(data => setCsgoStats(data.data?.segments?.[0]?.stats))
                .catch(() => setCsgoStats(null));
        }
    }, [userData.csgo]);

    //lol istatistiklerini çek
    useEffect(() => {
        if (userData.LoL) {
            // tracker.gg API anahtarını kendin almalısın!
            fetch(`https://public-api.tracker.gg/v2/league-of-legends/standard/profile/by-summoner/${userData.LoL}`, {
                headers: { "TRN-Api-Key": "39bf7a10-ff44-4c29-bfae-728ca4832407" }
            })
                .then(res => res.json())
                .then(data => setLolStats(data.data?.segments?.[0]?.stats))
                .catch(() => setLolStats(null));
        }
    }, [userData.LoL]);
    // Valorant istatistiklerini çek
    useEffect(() => {
        if (userData.Valo) {
            // tracker.gg API anahtarını kendin almalısın!
            fetch(`https://public-api.tracker.gg/v2/valorant/standard/profile/riot/${userData.Valo}`, {
                headers: { "TRN-Api-Key": "39bf7a10-ff44-4c29-bfae-728ca4832407" }
            })
                .then(res => res.json())
                .then(data => setValoStats(data.data?.segments?.[0]?.stats))
                .catch(() => setValoStats(null));
        }
    }, [userData.Valo]);
// kişinin kendine özel buton gözükmesi için 
const isOwnProfile =
  (firebaseUser && firebaseUser.email === userData.email) ||
  (storedUser && storedUser.username === userData.username);
const navigate = useNavigate();

return (
    <div>
        <div className="account-header">
            <h1>Profil</h1>
            <img src={photo} alt="Profil Fotoğrafı" style={{width: 220, height: 220, borderRadius: "50%" }} />
            <p>{userData.username}</p>
            
            {isOwnProfile && (
                <button onClick={() => navigate("/AccountChange")}>Profil Düzenle</button>
            )}
        </div>

        {userData.csgo && csgoStats && (
            <div className="account-header"> 
                <h3>CS:GO</h3>
                <ul>
                    <li>Oynadığı Saat: {csgoStats.timePlayed?.displayValue || "?"}</li>
                    <li>HS Oranı: {csgoStats.headshotPct?.displayValue || "?"}</li>
                    <li>KDA: {csgoStats.kdRatio?.displayValue || "?"}</li>
                    <li>Winrate: {csgoStats.wlPercentage?.displayValue || "?"}</li>
                     <li>Rankı: {csgoStats.rankName?.displayValue || csgoStats.rank?.displayValue || "?"}</li>
                     <li>Ulaştığı en yüksek rank: {csgoStats.highestRank?.displayValue || csgoStats.peakRank?.displayValue || "?"}</li>
                </ul>
            </div>
        )}

        {userData.LoL && lolStats && (
            <div className="account-header">
                <h3>League of Legends</h3>
                <ul>
                    <li>Winrate: %{lolStats.winrate?.displayValue || "?"}</li>
                    <li>KDA: {lolStats.kda?.displayValue || "?"}</li>
                    <li>En Çok Oynadığı Şampiyon: {lolStats.mostPlayedChampion?.displayValue || "?"}</li>
                     <li>Rankı: {lolStats.rank?.displayValue || "?"}</li>
                      <li>Ulaştığı en yüksek rank: {lolStats.peakRank?.displayValue || "?"}</li>
                </ul>
            </div>
        )}

        {userData.Valo && valoStats && (
            <div>
                <h3>Valorant</h3>
                <p>{userData.Valo}</p>
                <ul>
                    <li>Winrate: %{valoStats.winrate?.displayValue || "?"}</li>
                    <li>KDA: {valoStats.kda?.displayValue || "?"}</li>
                    <li>HS Oranı: %{valoStats.headshotPct?.displayValue || "?"}</li>
                    <li>En Çok Oynadığı Ajan: {valoStats.mostPlayedAgent?.displayValue || "?"}</li>
                     <li>Rankı: {valoStats.rank?.displayValue || "?"}</li>
                     <li>Ulaştığı en yüksek rank: {valoStats.peakRank?.displayValue || "?"}</li>
                </ul>
            </div>
        )}
    </div>
);
}
