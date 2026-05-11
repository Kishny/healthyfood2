"use client";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact">
      <div className="container" style={{ maxWidth: 480 }}>
        <h2>Inscription</h2>

        {submitted ? (
          <div>
            <p className="confirmation-message">
              Inscription non disponible pour le moment.
            </p>
            <div className="form-buttons">
              <button className="btn" onClick={() => (window.location.href = "/")}>
                Retour à l'accueil
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom :</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email :</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe :</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirm">Confirmer le mot de passe :</label>
              <input type="password" id="confirm" name="confirm" required />
            </div>
            <button type="submit" className="btn" style={{ width: "100%" }}>
              S'inscrire
            </button>
          </form>
        )}

        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Déjà un compte ?{" "}
          <Link href="/login" style={{ color: "#4caf50" }}>
            Se connecter
          </Link>
        </p>
      </div>
    </section>
  );
}
