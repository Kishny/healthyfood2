"use client";
import { useCart } from "../components/CartContext";

export default function Desserts() {
  const { addToCart, message } = useCart();

  return (
    <>
      {/* Hero + Section intro = inchangé */}
      <section id="hero" className="hero">
        <div className="container">
          <h2>Bienvenue sur notre site de desserts diététiques</h2>
          <p>
            Découvrez des desserts sains et savoureux pour satisfaire vos envies
            sans culpabilité.
          </p>
          <a href="#desserts" className="btn">
            Voir les desserts
          </a>
        </div>
      </section>

      <section className="selection">
        <p>
          Nous vous proposons une sélection de desserts diététiques, légers et
          gourmands, pour terminer votre repas en toute légèreté, sans
          culpabiliser.
        </p>
      </section>

      {/* ✅ Message de confirmation */}
      {message && <div className="confirmation-message">{message}</div>}

      <section id="desserts" className="desserts">
        <div className="container">
          <h2>Nos Desserts</h2>
          <div className="dessert-list">

            <div className="dessert">
              <img src="/img/desserts/mousse-choco.webp" alt="Mousse au Chocolat" />
              <h3>Mousse au Chocolat Léger</h3>
              <p>Une mousse au chocolat légère, préparée avec du chocolat noir et du yaourt grec.</p>
              <span className="calories">180 kcal</span>
              <span className="price">12.95€</span>
              <button className="btn add-to-cart" onClick={() => addToCart({ name: "Mousse au Chocolat", price: 12.95 })}>
                Ajouter au panier
              </button>
            </div>

            <div className="dessert">
              <img src="/img/desserts/cheesecake-fruits.webp" alt="Cheesecake aux Fruits" />
              <h3>Cheesecake aux Fruits</h3>
              <p>Un cheesecake léger garni de fruits frais et d'une base croustillante aux céréales.</p>
              <span className="calories">210 kcal</span>
              <span className="price">13.20€</span>
              <button className="btn add-to-cart" onClick={() => addToCart({ name: "Cheesecake aux Fruits", price: 13.20 })}>
                Ajouter au panier
              </button>
            </div>

            <div className="dessert">
              <img src="/img/desserts/batonnet-melon.webp" alt="Batonnet de glace" />
              <h3>Bâtonnets glacés au melon</h3>
              <p>Découvrez nos délicieux bâtonnets glacés au melon sans sucre...</p>
              <span className="calories">170 kcal</span>
              <span className="price">11.90€</span>
              <button className="btn add-to-cart" onClick={() => addToCart({ name: "Bâtonnet glacé melon", price: 11.90 })}>
                Ajouter au panier
              </button>
            </div>

            <div className="dessert">
              <img src="/img/desserts/verrine.webp" alt="Verrine légère au fromage blanc et kiwi" />
              <h3>Verrine légère au fromage blanc et kiwi</h3>
              <p>La fraîcheur gourmande d'une verrine alliant le crémeux...</p>
              <span className="calories">150 kcal</span>
              <span className="price">8.95€</span>
              <button className="btn add-to-cart" onClick={() => addToCart({ name: "Verrine fromage kiwi", price: 8.95 })}>
                Ajouter au panier
              </button>
            </div>

            <div className="dessert">
              <img src="/img/desserts/croustade-pomme.webp" alt="Croustade de Pommes" />
              <h3>Croustade de Pommes</h3>
              <p>Des pommes fondantes sous une croûte dorée...</p>
              <span className="calories">200 kcal</span>
              <span className="price">10.50€</span>
              <button className="btn add-to-cart" onClick={() => addToCart({ name: "Croustade pommes", price: 10.50 })}>
                Ajouter au panier
              </button>
            </div>

            <div className="dessert">
              <img src="/img/desserts/pannaCotta.webp" alt="Pannacotta" />
              <h3>Panna Cotta à la Vanille</h3>
              <p>Une panna cotta légère à la vanille, servie avec un coulis de fruits rouges.</p>
              <span className="calories">130 kcal</span>
              <span className="price">7.80€</span>
              <button className="btn add-to-cart" onClick={() => addToCart({ name: "Panna Cotta", price: 7.80 })}>
                Ajouter au panier
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

