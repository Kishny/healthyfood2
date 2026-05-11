"use client";
import Link from "next/link";

export default function Cancel() {
  return (
    <section className="cancel-page">
      <div className="container">
        <h2>Paiement annulé ❌</h2>
        <p>Votre paiement a été annulé. Aucun montant ne vous a été débité.</p>
        <p>Vous pouvez modifier votre commande ou réessayer plus tard.</p>
        
        <Link href="/panier">
          <button className="btn-return">Retour au panier</button>
        </Link>
      </div>
    </section>
  );
}
