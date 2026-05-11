"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="contact">
      <div className="container">
        <h2>Contactez-nous</h2>

        {!submitted ? (
          <form
            action="https://formspree.io/f/xgveqvoj"
            method="POST"
            onSubmit={() => {
              setSubmitted(true);
              setTimeout(() => {
                setSubmitted(false);
              }, 5000);
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Nom :</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email :</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="company">Société :</label>
              <input type="text" id="company" name="company" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message :</label>
              <textarea id="message" name="message" rows="5" required />
            </div>

            <button type="submit" className="btn">Envoyer</button>
          </form>
        ) : (
          <>
            <p className="confirmation-message">
              ✅ Merci ! Votre message a bien été envoyé.
            </p>
            <div className="form-buttons">
              <button className="btn" onClick={() => (window.location.href = "/")}>
                Retour à l'accueil
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

