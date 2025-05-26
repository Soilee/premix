import React, { useState } from 'react';

const ProfilePhoto=({onUploadProfilePhoto}) => {
  const [photo,setPhoto]=useState(null);

  const handlePhoto=(e)=>{
    const file=e.target.files[0];
    if(!file) return;

    const read=new FileReader();
    read.onloadend=()=> {
      const b64S=read.result;
      localStorage.setItem('profileImage',b64S);
      setPhoto(b64S);
      if (onUploadProfilePhoto) onUploadProfilePhoto(b64S);
      window.location.reload();
    };
    read.readAsDataURL(file);
  };
  return(
    <div>
      <input type="file" accept="image/*" onChange={handlePhoto} />
      {photo && <img src={photo} alt="Profil" style={{ maxWidth: "150px", maxHeight: "150px", borderRadius: "50%", marginTop: "10px" }}/>}
    </div>
  );
};

export default ProfilePhoto;
