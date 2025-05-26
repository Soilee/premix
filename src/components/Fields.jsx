import { useState } from 'react';

const Fields = ({ type, placeholder, icon, value, onChange }) => {
  // Şifre gösterme kısmı 
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="input-wrapper">
      <input
        type={type === 'password' ? (isPasswordShown ? 'text' : 'password') : type}
        placeholder={placeholder}
        className="input-field"
        required
        value={value}  
        onChange={onChange}  
      />
      <i className="material-symbols-rounded">{icon}</i> 
      {type === 'password' && (
        <i 
          onClick={() => setIsPasswordShown(prevState => !prevState)} 
          className="material-symbols-rounded eye-icon"
        >
          {isPasswordShown ? 'visibility' : 'visibility_off'}
        </i>
      )}
    </div>
  );
}

export default Fields;
