import { useNavigate } from "react-router-dom";
import Sociallogin from "../components/Sociallogin";
import Fields from "../components/Fields";
import { Link } from "react-router-dom";
import "../index.css";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    // Form alanlarının boş olup olmadığını kontrol et
    if (!username || !email || !password) {
      setErrorMessage("Lütfen tüm alanları doldurun.");
      return;
    }

    // E-posta doğrulama (Basit bir regex ile)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    const userData = {
      username: username,
      email: email,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Kayıt başarılı! Giriş yapabilirsiniz.");
    navigate("/login");
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
