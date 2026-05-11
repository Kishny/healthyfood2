"use client";
import Link from "next/link";

export default function Recettes() {
  return (
    <>
      <section className="hero" id="hero">
        <div className="container">
          <h2>Bienvenue sur notre site de recettes diététiques</h2>
          <p>
            Découvrez des recettes saines et savoureuses pour une alimentation
            équilibrée.
          </p>
          <a className="btn" href="#recettes">
            Voir les recettes
          </a>
        </div>
      </section>

      <section className="selection">
        <p>
          Nous avons sélectionné quelques recettes pour la semaine simples à
          réaliser, pour le déjeuner ou le repas du soir. <br />
          Adaptées aux grands comme aux petits, à ajuster selon vos envies.
        </p>
      </section>

      <section className="recettes" id="recettes">
        <div className="container">
          <h2>Nos Recettes</h2>
          <div className="recette-list">
            <div className="recette">
              <img
                src="/img/img-recettes/pâtes crème.webp"
                alt="Pâtes aux blancs de poulet et crème légère"
              />
              <h3>Pâtes aux blancs de poulet et crème légère</h3>
              <p>
                Un plat de pâtes aux blancs de poulet et crème légère, idéal
                pour un repas équilibré.
              </p>
              <span className="calories">250 kcal</span>
              <Link href="/recettes/recette1" className="btn add-to-cart">
                Voir la recette
              </Link>
            </div>

            <div className="recette">
              <img
                src="/img/img-recettes/riz sauté.webp"
                alt="Riz sauté aux petits légumes et poisson"
              />
              <h3>Riz sauté aux petits légumes et poisson</h3>
              <p>
                Un riz sauté aux petits légumes et poisson, une recette simple
                et rapide à réaliser.
              </p>
              <span className="calories">300 kcal</span>
              <Link href="/recettes/recette2" className="btn add-to-cart">
                Voir la recette
              </Link>
            </div>

            <div className="recette">
              <img
                src="/img/img-recettes/omelette.webp"
                alt="Omelette aux champignons et fines herbes"
              />
              <h3>Omelette aux champignons et fines herbes</h3>
              <p>
                Une omelette aux champignons et fines herbes, idéale pour un
                repas léger et équilibré.
              </p>
              <span className="calories">200 kcal</span>
              <Link href="/recettes/recette3" className="btn add-to-cart">
                Voir la recette
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
