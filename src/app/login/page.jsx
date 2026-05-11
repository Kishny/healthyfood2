"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact">
      <div className="container" style={{ maxWidth: 480 }}>
        <h2>Connexion</h2>

        {submitted ? (
          <div>
            <p className="confirmation-message">
              Connexion non disponible pour le moment.
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
              <label htmlFor="email">Email :</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe :</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="btn" style={{ width: "100%" }}>
              Se connecter
            </button>
          </form>
        )}

        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Pas encore de compte ?{" "}
          <Link href="/register" style={{ color: "#4caf50" }}>
            S'inscrire
          </Link>
        </p>
      </div>
    </section>
  );
}
