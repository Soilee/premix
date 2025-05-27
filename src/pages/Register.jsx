import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { ref, set, get } from "firebase/database";
import { useNavigate, Link } from "react-router-dom";
import Sociallogin from "../components/Sociallogin";
import Fields from "../components/Fields";
import "../index.css";
import { useState } from "react";
import { updateProfile } from "firebase/auth";


const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setErrorMessage("Lütfen tüm alanları doldurun.");
      return;
    }

    const usernameRef = ref(db, `usernames/${username}`);
    const usernameSnap = await get(usernameRef);
    if (usernameSnap.exists()) {
      setErrorMessage("Bu kullanıcı adı zaten kayıtlı.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
      await set(ref(db, `usernames/${username}`), email);
      alert("Kayıt başarılı! Giriş yapabilirsiniz.");
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Bu e-posta zaten kayıtlı.");
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Kayıt Ol</h2>
      <Sociallogin />

      <p className="separator">
        <span>Veya</span>
      </p>

      <form className="login-form" onSubmit={handleRegister}>
        <Fields
          type="text"
          placeholder="Kullanıcı Adı"
          icon="person"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Fields
          type="email"
          placeholder="E-posta"
          icon="mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Fields
          type="password"
          placeholder="Şifre"
          icon="lock"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button className="login-button" type="submit">Kayıt Ol</button>
      </form>

      <p className="signup-text">
        Zaten hesabın var mı? <Link to="/login">Giriş Yap</Link>
      </p>
    </div>
  );
};

export default Register;