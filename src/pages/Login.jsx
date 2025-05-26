import Sociallogin from "../components/Sociallogin";
import Fields from "../components/Fields";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!username || !password) {
      setErrorMessage("Lütfen kullanıcı adı ve şifre girin!");
      return;
    }

    if (storedUser) {
      if (
        storedUser.username === username &&
        storedUser.password === password
      ) {
        localStorage.setItem("isAuthenticated", true);
        setIsAuthenticated(true);
        alert(`Hoşgeldin, ${storedUser.username}!`);
        navigate("/");
        window.location.reload();
      } else {
        setErrorMessage("Kullanıcı adı veya şifre hatalı!");
      }
    } else {
      setErrorMessage("Kullanıcı bulunamadı.");
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
          type="text"
          placeholder="Kullanıcı Adı"
          icon="person"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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