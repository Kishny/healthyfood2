"use client";
import { useContext, useEffect } from "react";
import { CartContext } from "./components/CartContext";

export default function Home() {
 const { addToCart, message } = useContext(CartContext);


  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 20) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    {message && <p className="confirmation-message">{message}</p>}

      <section className="hero" id="hero">
        <div className="container">
          <h2>Des repas sains, livrés chez vous</h2>
          <p>
            Découvrez notre sélection de repas diététiques préparés par des
            nutritionnistes.
          </p>
          <a className="btn" href="#produits">
            Voir nos produits
          </a>
        </div>
      </section>

      <section className="promo" id="promo">
        <div className="container">
          <h2>Promotions du moment</h2>
          <div className="promo-list">
            <div className="promo-item">
              <img alt="Promo 1" src="/img/img2/salade césar.webp" />
              <h3>Salade César Light</h3>
              <p>Profitez de -20% sur cette salade fraîche et légère.</p>
              <span className="price">9,60€</span>
              <button
                className="btn add-to-cart"
                onClick={() =>
                  addToCart({
                    name: "Salade César Light",
                    price: 9.6,
                    image: "/img/img2/salade césar.webp",
                  })
                }
              >
                Ajouter au panier
              </button>
            </div>

            <div className="promo-item">
              <img alt="Promo 2" src="/img/img2/Bowl végan.webp" />
              <h3>Bowl Vegan</h3>
              <p>Offre spéciale : -15% sur ce bowl riche en légumes.</p>
              <span className="price">10,90€</span>
              <button
                className="btn add-to-cart"
                onClick={() =>
                  addToCart({
                    name: "Bowl Vegan",
                    price: 10.9,
                    image: "/img/img2/Bowl végan.webp",
                  })
                }
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="produits" id="produits">
        <div className="container">
          <h2>Nos Produits</h2>
          <div className="produit-list">
            {[
              {
                name: "Salade César Light",
                price: 12.95,
                image: "/img/img2/salade césar.webp",
              },
              {
                name: "Bowl Vegan",
                price: 13.3,
                image: "/img/img2/Bowl végan.webp",
              },
              {
                name: "Poulet Grillé et Quinoa",
                price: 14.5,
                image: "/img/img2/poulet et quinoa.webp",
              },
              {
                name: "Nouilles végétariennes",
                price: 11.2,
                image: "/img/img2/nouille végétarienne.webp",
              },
              {
                name: "Quiche gourmande au poulet",
                price: 12.8,
                image: "/img/img2/quiche au poulet.webp",
              },
              {
                name: "Terrine de Lentilles Nutritive",
                price: 11.65,
                image: "/img/img2/térine de lentilles.webp",
              },
              {
                name: "Escalope de Dinde aux Champignons",
                price: 13.9,
                image: "/img/img2/ecalope de d'inde.webp",
              },
              {
                name: "Gratin de Riz et Courgette",
                price: 11.95,
                image: "/img/img2/gratin riz courgette.webp",
              },
              {
                name: "Salade Fraîcheur au Saumon et Avocat",
                price: 12.35,
                image: "/img/img2/salade saumon et avocats.webp",
              },
              {
                name: "Papillote de Poisson",
                price: 11.95,
                image: "/img/img2/papillote de poisson.webp",
              },
              {
                name: "Potage de Légumes",
                price: 10.85,
                image: "/img/img2/potage légumes.webp",
              },
              {
                name: "Pâtes aux Aubergines",
                price: 11.5,
                image: "/img/img2/pâtes aubergines.webp",
              },
              {
                name: "Cabillaud aux Épices Fraîches",
                price: 12.0,
                image: "/img/img2/cabillaud.webp",
              },
              {
                name: "Riz Sauté aux Légumes et aux Crevettes",
                price: 12.95,
                image: "/img/img2/riz sauté.webp",
              },
              {
                name: "Croque-monsieur",
                price: 10.2,
                image: "/img/img2/croque.webp",
              },
            ].map((product, index) => (
              <div className="produit" key={index}>
                <img alt={product.name} src={product.image} />
                <h3>{product.name}</h3>
                <p>Un délicieux plat diététique !</p>
                <span className="price">{product.price.toFixed(2)}€</span>
                <button
                  className="btn add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Ajouter au panier
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
