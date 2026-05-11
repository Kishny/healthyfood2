"use client";

export default function Recette3() {
  return (
    <section className="recette-details" id="recette-details">
      <div className="container">
        <h2>Omelette aux champignons et fines herbes</h2>
        <img
          src="/img/img-recettes/omelette.webp"
          alt="Omelette aux champignons et fines herbes"
        />
        <p>
          Une omelette légère et savoureuse, parfaite pour un dîner rapide et
          équilibré (2 personnes).
        </p>
        <span className="calories">200 kcal</span>

        <h3>Ingrédients :</h3>
        <ul>
          <li>4 œufs</li>
          <li>150 g de champignons de Paris émincés</li>
          <li>1 échalote émincée</li>
          <li>1 cuillère à soupe de lait écrémé (facultatif)</li>
          <li>1 cuillère à café d’huile d’olive</li>
          <li>Persil, ciboulette ou herbes fraîches</li>
          <li>Sel, poivre</li>
        </ul>

        <h3>Préparation :</h3>

        <h4>1. Préparer les ingrédients</h4>
        <ul>
          <li>Lavez et émincez les champignons.</li>
          <li>Émincez l’échalote et les herbes fraîches.</li>
        </ul>

        <h4>2. Cuisson des légumes</h4>
        <ul>
          <li>Dans une poêle antiadhésive, faites chauffer l’huile d’olive.</li>
          <li>Ajoutez l’échalote, faites revenir 2 min puis ajoutez les champignons.</li>
          <li>Faites-les dorer à feu moyen pendant 5 à 7 minutes.</li>
        </ul>

        <h4>3. Préparation de l’omelette</h4>
        <ul>
          <li>Battez les œufs dans un bol, ajoutez le lait, les herbes, le sel et le poivre.</li>
          <li>Versez le mélange dans la poêle sur les champignons.</li>
          <li>Faites cuire à feu doux jusqu’à ce que l’omelette soit prise.</li>
          <li>Pliez l’omelette en deux et servez chaud.</li>
        </ul>
      </div>
    </section>
  );
}
