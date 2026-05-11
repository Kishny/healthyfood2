export default function MentionsLegales() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Mentions légales</h2>

        <h3 style={{ marginTop: "2rem" }}>Éditeur du site</h3>
        <p>
          <strong>HealthyFood</strong><br />
          123 Rue de la Santé, 75001 Paris<br />
          Téléphone : +33 1 23 45 67 89<br />
          Email : contact@recettesdietetiques.com
        </p>

        <h3 style={{ marginTop: "2rem" }}>Hébergement</h3>
        <p>
          Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, États-Unis.
        </p>

        <h3 style={{ marginTop: "2rem" }}>Propriété intellectuelle</h3>
        <p>
          L'ensemble des contenus présents sur ce site (textes, images, logos)
          est la propriété exclusive de HealthyFood et est protégé par les lois
          relatives à la propriété intellectuelle.
        </p>

        <h3 style={{ marginTop: "2rem" }}>Responsabilité</h3>
        <p>
          HealthyFood s'efforce de maintenir les informations publiées sur ce
          site à jour et exactes. Toutefois, aucune garantie ne peut être donnée
          quant à l'exactitude ou l'exhaustivité de ces informations.
        </p>

        <div className="form-buttons" style={{ marginTop: "2rem" }}>
          <a href="/" className="btn">Retour à l'accueil</a>
        </div>
      </div>
    </section>
  );
}
