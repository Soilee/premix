import Sociallogin from "../components/Sociallogin";
import Fields from "../components/Fields";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    setErrorMessage("Lütfen e-posta ve şifre girin!");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    setIsAuthenticated(true);
    alert("Hoşgeldin!");
    navigate("/");
    window.location.reload();
  } catch (error) {
    setErrorMessage("Mailiniz veya şifreniz yanlış!");
  }
};



  return (
    <div className="login-container">
      <h2 className="form-title">Giriş Yap</h2>
      <Sociallogin />

      <p className="separator">
        <span>Veya</span>
      </p>

      <form className="login-form" onSubmit={handleLogin}>
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

        <a href="#" className="forgot-pass-link">
          Şifreni mi Unuttun?
        </a>

        <button className="login-button">Giriş Yap</button>
      </form>

      <p className="signup-text">
        Kayıtlı Değil Misin? <Link to="/register">Hemen Kayıt Ol</Link>
      </p>
    </div>
  );
};

export default Login;