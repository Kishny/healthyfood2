"use client";

export default function Recette2() {
  return (
    <section className="recette-details" id="recette-details">
      <div className="container">
        <h2>Riz sauté aux petits légumes et poisson</h2>
        <img
          src="/img/img-recettes/riz sauté.webp"
          alt="Riz sauté aux petits légumes et poisson "
        />
        <p>
          Un plat complet et équilibré, idéal pour un déjeuner léger et
          savoureux (4 personnes).
        </p>
        <span className="calories">250 kcal</span>

        <h3>Ingrédients</h3>
        <ul>
          <li>250 g de riz complet ou basmati</li>
          <li>2 filets de poisson blanc (cabillaud, colin ou lieu noir)</li>
          <li>1 carotte coupée en petits dés</li>
          <li>1 courgette coupée en petits dés</li>
          <li>1 poivron rouge coupé en petits morceaux</li>
          <li>100 g de petits pois</li>
          <li>2 gousses d’ail hachées</li>
          <li>2 cuillères à soupe de sauce soja allégée</li>
          <li>1 cuillère à soupe d’huile d’olive ou de sésame</li>
          <li>1 cuillère à café de gingembre râpé (optionnel)</li>
          <li>1 citron vert (pour le jus)</li>
          <li>Coriandre ou persil frais pour le dressage</li>
          <li>Sel, poivre</li>
        </ul>

        <h3>Préparation :</h3>

        <h4>1. Cuisson du riz</h4>
        <ul>
          <li>
            Faites cuire le riz selon les instructions du paquet. Égouttez et
            réservez.
          </li>
        </ul>

        <h4>2. Préparation du poisson</h4>
        <ul>
          <li>
            Coupez les filets de poisson en morceaux et assaisonnez-les avec
            un peu de sel, de poivre et du jus de citron.
          </li>
          <li>
            Faites chauffer une poêle avec un peu d’huile et faites cuire le
            poisson quelques minutes de chaque côté jusqu’à ce qu’il soit doré
            et cuit. Réservez.
          </li>
        </ul>

        <h4>3. Sauté de légumes</h4>
        <ul>
          <li>
            Dans la même poêle, ajoutez les légumes : carottes, courgettes,
            poivron, petits pois. Faites-les revenir 5-7 minutes.
          </li>
          <li>
            Ajoutez l’ail, le gingembre, la sauce soja et mélangez.
          </li>
        </ul>

        <h4>4. Assemblage</h4>
        <ul>
          <li>
            Ajoutez le riz cuit et les morceaux de poisson. Mélangez délicatement
            pour ne pas casser le poisson.
          </li>
          <li>
            Rectifiez l’assaisonnement et servez chaud, garni de coriandre ou
            persil frais.
          </li>
        </ul>
      </div>
    </section>
  );
}
