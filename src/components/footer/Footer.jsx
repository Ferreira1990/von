import React, { useState, useRef } from 'react';
import '../footer/Footer.css';
import LOGOV from '../../assets/von.png';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm('service_zhjk43m', 'template_tnso4aw', form.current, {
        publicKey: 'b1t609-OyAEl7PJNv',
      })
      .then(
        () => {
          setSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSending(false);
        }
      );
  };

  return (
    <div id='contactox' className='Boxfooter'>
      <div className='Footertitle'>
        <h1>VON PLÖTZ</h1>
      </div>

      <div className='Footerlogo'>
        <img src={LOGOV} alt="" />
      </div>

      <div className='Formulario'>
        <form className='field' ref={form} onSubmit={sendEmail}>
          <label>Nombre</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label className='mensajelabel'>Mensaje</label>
          <textarea name="message" required />
          <input  type="submit" value={sending ? (sent ? "Enviado!" : "Enviando...") : "Enviar"} disabled={sending} />
        </form>
      </div>

      <div className='Derechos'>
        <h4>VONPLÖTZ © todos los derechos reservados</h4>
      </div>
    </div>
  );
}

export default Footer;
