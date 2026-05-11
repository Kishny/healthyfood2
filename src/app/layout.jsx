import "./globals.css"; // Importation du fichier CSS global
import Header from "./components/Header"; // Importation du composant Header
import Footer from "./components/Footer"; // Importation du composant Footer
import CookiesPopup from "./components/CookiesPopup"; // Importation du composant de la popup
import { CartProvider } from "./components/CartContext"; // Importation du contexte

export const metadata = {
  title: "HealthyFood",
  description: "Repas diététiques livrés chez vous",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="HealthyFood - Repas diététiques livrés chez vous" />
        <meta name="keywords" content="HealthyFood, repas, diététique, livraison" />
        <meta name="author" content="HealthyFood Team" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider> {/* ✅ Panier dispo sur tout le site */}
          <Header /> {/* ✅ Header dispo sur tout le site */}
          <CookiesPopup /> {/* ✅ Popup cookies dispo sur tout le site */}
          {children}
          <Footer /> {/* ✅ Footer dispo sur tout le site */}
        </CartProvider> {/* ✅ Panier dispo sur tout le site */}
      </body>
    </html>
  );
}


