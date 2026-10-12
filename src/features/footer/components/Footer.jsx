import { useState } from "react";
import { Button } from "@shared/components";
import { photos } from "@shared/data/photos";
import styles from "./Footer.module.css";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <strong>
            Tudo de Bom <em>Alimentos</em>
          </strong>
          <p>Salgados e café fresquinho. Todo dia, desde as 5 da manhã.</p>
          <div className={styles.social}>
            <a href="#" aria-label="Instagram">
              📸
            </a>
            <a href="#" aria-label="WhatsApp">
              💬
            </a>
            <a href="#" aria-label="TikTok">
              🎵
            </a>
          </div>
        </div>

        <div className={styles.newsletter}>
          <h3>Ganhe um pão de queijo 🧀</h3>
          <p>Cadastre seu e-mail e receba um cupom + as novidades da semana.</p>
          {subscribed ? (
            <p className={styles.thanks}>
              Valeu! Seu cupom já está a caminho. 💚
            </p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="newsletter-email" className="visually-hidden">
                E-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <Button type="submit">Quero!</Button>
            </form>
          )}
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <span>
          © {new Date().getFullYear()} Tudo de Bom Alimentos. Feito com 💚 no
          Brasil.
        </span>
        <span>CNPJ 00.000.000/0001-00</span>
      </div>
    </footer>
  );
}
