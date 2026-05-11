export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Réseaux sociaux */}
        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-twitter-fill"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        {/* Rubriques */}
        <div className="footer-section">
          <h3>Rubriques</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/desserts">Desserts</a>
            </li>
            <li>
              <a href="/recettes">Recettes de la semaine</a>
            </li>
            <li>
              <a href="/panier">Panier</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Informations légales */}
        <div className="footer-section">
          <h3>Informations</h3>
          <ul className="footer-links">
            <li>
              <a href="/politique-de-confidentialite">
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a href="/conditions-generales">Conditions générales</a>
            </li>
            <li>
              <a href="/mentions-legales">Mentions légales</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="footer-contact">
            <li>
              <i className="fas fa-map-marker-alt"></i> 123 Rue de la Santé,
              75001 Paris
            </li>
            <li>
              <i className="fas fa-phone"></i> +33 1 23 45 67 89
            </li>
            <li>
              <i className="fas fa-envelope"></i>{" "}
              contact@recettesdietetiques.com
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 HealthyFood. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
