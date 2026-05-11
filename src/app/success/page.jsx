// frontend/src/app/success/page.jsx
"use client";

import Link from "next/link";

export default function Success() {
  return (
    <section className="success-page container">
      <h2>✅ Paiement réussi !</h2>
      <p>Merci pour votre commande. Votre repas HealthyFood arrivera bientôt chez vous.</p>

      <div className="success-actions">
        <Link href="/">
          <button className="btn">Retour à l’accueil</button>
        </Link>
        <Link href="/recettes">
          <button className="btn">Explorer d’autres recettes</button>
        </Link>
      </div>
    </section>
  );
}
