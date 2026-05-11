"use client";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
  const { cartItems, isCartUpdated } = useContext(CartContext);

  return (
    <header className="main-header">
      <h1 className="site-title">HealthyFood</h1>

      <nav className="main-nav">
        <ul className="nav-links">
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/desserts">Desserts</Link></li>
          <li><Link href="/recettes">Recettes</Link></li>
          <li>
            <Link href="/panier">
              Panier{" "}
              {cartItems.length > 0 && (
                <span className={`cart-count ${isCartUpdated ? "bounce" : ""}`}>
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="auth-header">
          <Link href="/login" className="btn-login">Connexion</Link>
          <Link href="/register" className="btn-register">Inscription</Link>
        </div>
      </nav>
    </header>
  );
}


