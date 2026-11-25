"use client";

import { useState, type FormEvent } from "react";
import styles from "./page.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || !password) {
      alert("Email dan password wajib diisi!");
      return;
    }

    alert(`Login berhasil!\nEmail: ${email}`);
  }

  return (
    <main className={styles.page}>
      <section className={styles.loginCard} aria-label="Login yuupz">
        <aside className={styles.brandPanel}>
          <header className={styles.statusBar} aria-hidden="true">
            <span>9:41</span>
            <span className={styles.statusIcons}>● ◔ ▰</span>
          </header>

          <div className={styles.brandCopy}>
            <h1 className={styles.logo}>
              yuupz<span>.</span>
            </h1>
            <p className={styles.tagline}>Your learning, your way.</p>
          </div>

          <div className={styles.illustration} aria-hidden="true">
            <div className={styles.orbit} />
            <div className={styles.book}>
              <span />
              <span />
            </div>
            <div className={styles.laptop}>
              <div className={styles.laptopScreen}>
                <span>y.</span>
              </div>
              <div className={styles.laptopBase} />
            </div>
            <div className={styles.sparkle}>✦</div>
          </div>

          <p className={styles.brandNote}>
            Belajar hal baru,
            <br />
            dengan cara yang kamu suka.
          </p>
        </aside>

        <section className={styles.formPanel}>
          <div className={styles.formHeading}>
            <p className={styles.eyebrow}>SELAMAT DATANG KEMBALI</p>
            <h2>Senang melihatmu lagi.</h2>
            <p className={styles.subtitle}>
              Masuk untuk melanjutkan perjalanan belajarmu.
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Email atau Username
              </label>
              <input
                className={styles.input}
                id="email"
                name="email"
                type="text"
                placeholder="Masukkan email atau username"
                autoComplete="username"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <div className={styles.passwordWrapper}>
                <input
                  className={styles.input}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  type="button"
                  className={styles.showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                >
                  {showPassword ? "Sembunyikan" : "Lihat"}
                </button>
              </div>
            </div>

            <div className={styles.options}>
              <label className={styles.remember}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                Ingat saya
              </label>
              <button
                type="button"
                className={styles.forgot}
                onClick={() => alert("Fitur lupa password segera hadir.")}
              >
                Lupa password?
              </button>
            </div>

            <button type="submit" className={styles.loginButton}>
              Masuk <span aria-hidden="true">→</span>
            </button>
          </form>

          <div className={styles.divider}>
            <span />
            atau
            <span />
          </div>

          <button
            type="button"
            className={styles.googleButton}
            onClick={() => alert("Login Google belum diaktifkan.")}
          >
            <span className={styles.googleIcon} aria-hidden="true">
              G
            </span>
            Masuk dengan Google
          </button>

          <p className={styles.footer}>
            © 2026 yuupz. Made for better learning.
          </p>
        </section>
      </section>
    </main>
  );
}
