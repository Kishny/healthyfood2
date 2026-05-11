"use client";
import { useEffect, useState } from "react";

export default function CookiesPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookies_consent");
      if (!consent) setVisible(true);
    } catch {}
  }, []);

  const handleAccept = () => {
    try { localStorage.setItem("cookies_consent", "accepted"); } catch {}
    setVisible(false);
  };

  const handleDecline = () => {
    try { localStorage.setItem("cookies_consent", "declined"); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookies-popup">
      <p>Ce site utilise des cookies pour améliorer votre expérience.</p>
      <div className="cookies-buttons">
        <button className="btn accept" onClick={handleAccept}>Accepter</button>
        <button className="btn decline" onClick={handleDecline}>Refuser</button>
      </div>
    </div>
  );
}
