import React, { useState, useEffect } from "react";
import ProfilePhoto from "../components/ProfilePhoto";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";

export default function AccountChange() {
    const navigate = useNavigate();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const firebaseUser = auth.currentUser; 
    const [photo, setPhoto] = useState(
        firebaseUser?.photoURL ||
        localStorage.getItem("profileImage") ||
        "https://placehold.co/40x40"
    );
    
    const [userData, setUserData] = useState({
        username: firebaseUser?.displayName || "",
        email: firebaseUser?.email || "",
        password: "",
        surname: "",
        nickname: "",
        LoL: "",
        csgo: "",
        Valo: "",
        social2: "",
        social3: "",
        social4: "",
        social5: "",
        bio: "",
    });
    

useEffect(() => {
    if (storedUser) {
        setUserData({
            username: storedUser.username || "",
            email: storedUser.email || "",
            password: storedUser.password || "",
            surname: storedUser.surname || "",
            nickname: storedUser.nickname || "",
            LoL: storedUser.LoL || "",
            csgo: storedUser.csgo || "",
            Valo: storedUser.Valo || "",
            social2: storedUser.social2 || "",
            social3: storedUser.social3 || "",
            social4: storedUser.social4 || "",
            social5: storedUser.social5 || "",
            bio: storedUser.bio || "",
        });
    }
}, []);

    const handleChange=(e)=>{
        const {id,value}=e.target;
        setUserData((prev)=>({
            ...prev,
            [id]:value,
        }));
    };

    const handleSave = async () => {

        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("profileImage", photo);

        let photoURL = photo;
        if (photo && photo.length > 500) {
            photoURL = "https://placehold.co/100x100";
        }

        if (firebaseUser) {
            await updateProfile(firebaseUser, {
                displayName: userData.username,
                photoURL: photoURL,
            });
        }

    alert("Değişiklikler kaydedildi.");
    navigate("/account");
    window.location.reload();
};

    const handleDelete=()=>{
        localStorage.removeItem("user");
        localStorage.removeItem("profileImage");
        alert("Kullanıcı bilgileri silinmiştir. Lütfen tekrar giriniz.");
        setUserData({
            username: "",
            email: "",
            password: "",
            nickname: "",
            LoL: "",
            csgo: "",
            Valo: "",
            bio: "",
        });
        setPhoto("https://placehold.co/40x40");
    };

    return(
        <div>
            <div className="account-header">
                <h1>Profil</h1>
                <p>Merhaba, {userData.username}</p>
            </div>
            <div className="account-page">
                <div className="account-left">
                    <div className="account-photo">
                        <img src={photo} alt="Profil Fotoğrafı" className="photo-style"/>
                        <ProfilePhoto onUploadProfilePhoto={(photo)=>{setPhoto(photo);}} className="photo" />            
                    </div>
                </div>
                <div className="account-mid">
                    <label>İsim:</label>
                    <input type="text" placeholder="İsim Giriniz." id="username" value={userData.username} onChange={handleChange} />
                
                    <label>Email:</label>
                    <input type="email" placeholder="Mail Giriniz." id="email" value={userData.email} onChange={handleChange} />

                    <label>Şifre:</label>
                    <input type="password" placeholder="Şifre Giriniz." id="password" value={userData.password} onChange={handleChange} />
                
                    <label>Takma Ad:</label>
                    <input type="text" placeholder="Takma Adınızı Giriniz." id="nickname" value={userData.nickname} onChange={handleChange} />
                
                    <label>Oyun Hesaplarınız</label>
                    <input type="text" placeholder="League Of Legends hesabınızın ismini ve etiketini yazınız." id="LoL" value={userData.LoL} onChange={handleChange} /><br />
                    <input type="text" placeholder="Valorant hesabınızın ismini ve etiketini yazınız." id="Valo" value={userData.Valo} onChange={handleChange} /><br />
                    <input type="text" placeholder="Counter-Strike için steam profilinizi yapıştırın." id="csgo" value={userData.csgo} onChange={handleChange} /><br />
                
                    <label>Hakkımda:</label>
                    <textarea id="bio" placeholder="Hakkımda..." value={userData.bio} onChange={handleChange} ></textarea>
                    <div className="buttons">
                        <button className="save-btn" onClick={handleSave}>Kaydet</button>
                        <button className="delete-btn" onClick={handleDelete}>Sil</button>
                    </div>
                </div>
            </div>
        </div>    
    );
}