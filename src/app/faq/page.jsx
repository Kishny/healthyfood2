export default function FAQ() {
  const questions = [
    {
      q: "Comment passer une commande ?",
      a: "Ajoutez les produits souhaités à votre panier depuis la page d'accueil ou la page desserts, puis cliquez sur « Valider la commande » dans votre panier.",
    },
    {
      q: "Quels modes de paiement acceptez-vous ?",
      a: "Nous acceptons les paiements par carte bancaire (Visa, Mastercard, American Express) via la plateforme sécurisée Stripe.",
    },
    {
      q: "Puis-je annuler ma commande ?",
      a: "Vous pouvez annuler votre commande jusqu'au moment du paiement. Une fois validée, contactez-nous rapidement par email.",
    },
    {
      q: "Vos repas sont-ils préparés par des professionnels ?",
      a: "Oui, tous nos repas sont élaborés par des nutritionnistes pour garantir un équilibre optimal.",
    },
    {
      q: "Comment contacter le service client ?",
      a: "Rendez-vous sur notre page Contact ou envoyez-nous un email à contact@recettesdietetiques.com.",
    },
    {
      q: "Les informations de paiement sont-elles sécurisées ?",
      a: "Absolument. Les paiements sont traités par Stripe, certifié PCI DSS. HealthyFood ne stocke aucune donnée bancaire.",
    },
  ];

  return (
    <section className="contact">
      <div className="container">
        <h2>Foire aux questions</h2>

        <div style={{ marginTop: "2rem" }}>
          {questions.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "1.5rem",
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ color: "#4caf50", marginBottom: "0.5rem" }}>
                {item.q}
              </h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>

        <div className="form-buttons" style={{ marginTop: "2rem" }}>
          <a href="/" className="btn">Retour à l'accueil</a>
        </div>
      </div>
    </section>
  );
}
