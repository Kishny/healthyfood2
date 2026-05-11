"use client";

export default function Recette1() {
  return (
    <section className="recette-details" id="recette-details">
      <div className="container">
        <h2>Pâtes aux blancs de poulet et crème légère</h2>
        <img
          src="/img/img-recettes/pâtes crème.webp"
          alt="Pâtes aux blancs de poulet et crème légère"
        />
        <p>
          Une recette simple, équilibrée et savoureuse pour 2 personnes.
        </p>
        <span className="calories">250 kcal</span>

        <h3>Ingrédients :</h3>
        <ul>
          <li>200g de blancs de poulet</li>
          <li>150g de pâtes complètes</li>
          <li>1 cuillère à soupe de crème légère (5% ou 15%)</li>
          <li>1 gousse d’ail émincée</li>
          <li>1 filet d’huile d’olive</li>
          <li>Sel, poivre, herbes de Provence</li>
        </ul>

        <h3>Préparation :</h3>
        <ul>
          <li>Faites cuire les pâtes dans une casserole d’eau bouillante salée.</li>
          <li>Coupez les blancs de poulet en morceaux. Faites-les revenir dans une poêle avec un filet d’huile d’olive.</li>
          <li>Ajoutez l’ail émincé, puis la crème. Assaisonnez.</li>
          <li>Égouttez les pâtes, ajoutez-les dans la poêle. Mélangez bien et servez chaud.</li>
        </ul>
      </div>
    </section>
  );
}

