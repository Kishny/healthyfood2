"use client";
import { useState } from "react";
import { useCart } from "../components/CartContext";

export default function Panier() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const total = cartItems.reduce((sum, item) => {
    return sum + parseFloat(item.price.toString().replace(",", "."));
  }, 0);

  const handleCheckout = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="panier" id="panier">
      <div className="container">
        <h2>Votre panier</h2>

        {cartItems.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <>
            <div className="panier-liste">
              {cartItems.map((item, index) => (
                <div className="panier-item" key={index}>
                  <img src={item.image} alt={item.name} />
                  <div className="panier-details">
                    <h3>{item.name}</h3>
                    <p>Quantité : 1</p>
                    <p>Prix : {item.price}€</p>
                    <button
                      className="btn remove-btn"
                      onClick={() => removeFromCart(index)}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="panier-total">
              <p>
                Total :{" "}
                <strong>{total.toFixed(2).replace(".", ",")}€</strong>
              </p>

              {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}

              <div className="panier-actions" id="btn-group">
                <button className="btn clear-cart" onClick={clearCart}>
                  Vider le panier
                </button>
                <button
                  className="btn btn-pay"
                  onClick={handleCheckout}
                  disabled={loading}
                >
                  {loading ? "Redirection..." : "Valider la commande"}
                </button>
              </div>
              <div className="btn-return">
                <a href="/">Retour accueil</a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
