export default function ConditionsGenerales() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Conditions générales de vente</h2>

        <p><strong>Dernière mise à jour :</strong> mai 2025</p>

        <h3 style={{ marginTop: "2rem" }}>1. Objet</h3>
        <p>
          Les présentes conditions générales de vente régissent les relations
          contractuelles entre HealthyFood et ses clients dans le cadre de la
          vente de repas diététiques en ligne.
        </p>

        <h3 style={{ marginTop: "2rem" }}>2. Commandes</h3>
        <p>
          Toute commande passée sur le site vaut acceptation des présentes
          conditions. HealthyFood se réserve le droit de refuser toute commande
          pour un motif légitime.
        </p>

        <h3 style={{ marginTop: "2rem" }}>3. Prix</h3>
        <p>
          Les prix sont indiqués en euros TTC. HealthyFood se réserve le droit
          de modifier ses tarifs à tout moment, les prix applicables étant ceux
          en vigueur au moment de la commande.
        </p>

        <h3 style={{ marginTop: "2rem" }}>4. Paiement</h3>
        <p>
          Le paiement s'effectue en ligne par carte bancaire via la plateforme
          sécurisée Stripe. Le débit est réalisé au moment de la validation
          de la commande.
        </p>

        <h3 style={{ marginTop: "2rem" }}>5. Livraison</h3>
        <p>
          Les commandes sont livrées à l'adresse indiquée lors de la commande.
          Les délais de livraison sont communiqués lors de la confirmation.
        </p>

        <h3 style={{ marginTop: "2rem" }}>6. Droit de rétractation</h3>
        <p>
          Conformément à la législation en vigueur, les denrées alimentaires
          périssables ne sont pas soumises au droit de rétractation.
        </p>

        <div className="form-buttons" style={{ marginTop: "2rem" }}>
          <a href="/" className="btn">Retour à l'accueil</a>
        </div>
      </div>
    </section>
  );
}
