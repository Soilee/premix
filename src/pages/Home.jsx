import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';


import valorantImg from '../assets/valorant.png';
import csgoImg from '../assets/csgo.jpg';
import lolImg from '../assets/lol.jpg';

function Home({isAuthenticated}) {
 const navigate = useNavigate();
 


 
 const handleCardClick = (path) => {
    if (!isAuthenticated) {
        alert('Önce giriş yapmalısınız');
        navigate('/login');

    } else {
        navigate(path);
    }
 };


 
return (
    


    <div className='card-container'>
        <h2>Oyununuzu Seçiniz</h2>
        
        <div className="card">
            <div className="game-card" onClick={() => handleCardClick('/valorant')}>
                <img src={valorantImg} alt="Valorant" />
                <div className='game-title'>
                    <p>Valorant</p>
                </div>
            </div>

            <div className="game-card" onClick={() => handleCardClick('/csgo')}>
                <img src={csgoImg} alt="CS:GO" />
                <div className='game-title'>
                    <p>Counter-Strike</p>
                </div>
            </div>

            <div className="game-card" onClick={() => handleCardClick('/lol')}>
                <img src={lolImg} alt="LoL" />
                <div className='game-title'>
                    <p>League Of Legends</p>
                </div>
            </div>
        </div>

        
        
    </div>
);
}
export default Home;