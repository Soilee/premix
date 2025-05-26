import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  // Form elemanına erişmek için useRef kullanıyoruz
  const formRef = useRef();

  // Form gönderildiğinde çalışacak fonksiyon
  function handleSubmit(e) {
    e.preventDefault();

    // emailjs ile formu gönderiyoruz
    emailjs
      .sendForm(
        "service_jqwcz8n",
        "template_runtjhc",
        formRef.current,
        "F2l06hwVZV1aUuT4M"
      )
      .then(
        function () {
          alert("Mailiniz gönderildi.");
        },
        function (error) {
          alert("Bir hata oluştu. Tekrar deneyin.");
        }
      );
  }

  return (
    <div className="about-form">
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>İsim</label>
        <input type="text" name="user_name" required /><br />
        <label>Email</label>
        <input type="email" name="user_email" required /><br />
        <label>Mesajınız</label>
        <textarea name="message" required /><br />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default Contact;

/*import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jqwcz8n',
      'template_runtjhc',
      form.current,
      'F2l06hwVZV1aUuT4M' // direkt string olarak yazılmalı, nesne içinde değil!
    )
    .then(
      () => {
        alert("Mailiniz ulaşmıştır.");
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert("Bir hata oluştu: " + error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>İsim</label>
      <input type="text" name="user_name" required /><br />
      <label>Email</label>
      <input type="email" name="user_email" required /><br />
      <label>Mesajınız</label>
      <textarea name="message" required /><br />
      <input type="submit" value="Gönder" />
    </form>
  );
};

export default Contact;
*/