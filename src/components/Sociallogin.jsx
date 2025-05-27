import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Sociallogin = () => {
  // Google ile giriş fonksiyonu 
  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      
      // Eğer kullanıcı dönerse yeniden yükle (şuanlık böyle)
  if (result.user) {
  window.location.reload(); 
      }
    } catch (err) {
        console.error("Google ile giriş başarısız:", err); 
        alert("Bir sorun oluştu, lütfen tekrar deneyin."); 
    }
  };

  return (
    <div className="social-login">
      <button className="social-button" onClick={handleGoogle}>
       <img src="google.svg" alt="Google" className="src" />
       Google
      </button>


      <button className="social-button" disabled>
        <img src="apple.svg" alt="Apple " className="src" />
        Apple
      </button>
    </div>
  );
};

export default Sociallogin;