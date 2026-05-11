export default function PolitiqueConfidentialite() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Politique de confidentialité</h2>

        <p><strong>Dernière mise à jour :</strong> mai 2025</p>

        <h3 style={{ marginTop: "2rem" }}>1. Collecte des données</h3>
        <p>
          HealthyFood collecte uniquement les données nécessaires au bon fonctionnement
          du service : adresse e-mail, nom, et informations de commande. Ces données
          ne sont jamais revendues à des tiers.
        </p>

        <h3 style={{ marginTop: "2rem" }}>2. Utilisation des cookies</h3>
        <p>
          Notre site utilise des cookies pour améliorer votre expérience de navigation.
          Vous pouvez accepter ou refuser les cookies via la bannière présente sur le site.
        </p>

        <h3 style={{ marginTop: "2rem" }}>3. Paiement</h3>
        <p>
          Les paiements sont traités par Stripe, un prestataire sécurisé. HealthyFood
          ne stocke aucune donnée bancaire.
        </p>

        <h3 style={{ marginTop: "2rem" }}>4. Contact</h3>
        <p>
          Pour toute question relative à vos données personnelles, contactez-nous à{" "}
          <a href="mailto:contact@recettesdietetiques.com" style={{ color: "#4caf50" }}>
            contact@recettesdietetiques.com
          </a>.
        </p>

        <div className="form-buttons" style={{ marginTop: "2rem" }}>
          <a href="/" className="btn">Retour à l'accueil</a>
        </div>
      </div>
    </section>
  );
}
