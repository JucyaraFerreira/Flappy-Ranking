import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="login-page">

      <section className="login-area">
        <div className="sky-background">
          <div className="clouds cloud-layer-one"></div>
          <div className="clouds cloud-layer-two"></div>
<div className="pipes">
  <div className="pipes-track">
    <div className="pipe-set pipe-set-1">
      <div className="pipe pipe-top"></div>
      <div className="pipe pipe-bottom"></div>
    </div>

    <div className="pipe-set pipe-set-2">
      <div className="pipe pipe-top"></div>
      <div className="pipe pipe-bottom"></div>
    </div>

    <div className="pipe-set pipe-set-3">
      <div className="pipe pipe-top"></div>
      <div className="pipe pipe-bottom"></div>
    </div>

    <div className="pipe-set pipe-set-4">
      <div className="pipe pipe-top"></div>
      <div className="pipe pipe-bottom"></div>
    </div>

    <div className="pipe-set pipe-set-5">
      <div className="pipe pipe-top"></div>
      <div className="pipe pipe-bottom"></div>
    </div>

    <div className="pipe-set pipe-set-6">
      <div className="pipe pipe-top"></div>
      <div className="pipe pipe-bottom"></div>
    </div>
  </div>

  <div className="pipes-track pipes-track-copy">
    <div className="pipe-set pipe-set-1">
      <div className="pipe pipe-top"></div>
      <div className="pipe pipe-bottom"></div>
    </div>

    <div className="pipe-set pipe-set-2">
      <div className="pipe pipe-top"></div>
      <div className="pipe pipe-bottom"></div>
    </div>

    <div className="pipe-set pipe-set-3">
      <div className="pipe pipe-top"></div>
      <div className="pipe pipe-bottom"></div>
    </div>

    <div className="pipe-set pipe-set-4">
      <div className="pipe pipe-top"></div>
      <div className="pipe pipe-bottom"></div>
    </div>

    <div className="pipe-set pipe-set-5">
      <div className="pipe pipe-top"></div>
      <div className="pipe pipe-bottom"></div>
    </div>

    <div className="pipe-set pipe-set-6">
      <div className="pipe pipe-top"></div>
      <div className="pipe pipe-bottom"></div>
    </div>
  </div>
</div>

          <div className="ground"></div>
        </div>

        <div className="login-card">
          <h1>Login</h1>

          <label>Usuário</label>
          <input type="text" />

          <label>Senha</label>
          <input type="password" />

          <div className="forgot-password">
            <Link href="/forgot-password">Esqueceu a senha?</Link>
          </div>

          <Link href="mainScreen" className="login-button-link">
            <button className="login-button">Login</button>
          </Link>

          <div className="login-links">
           <Link href="/mainScreen">Continue como visitante</Link>

            <p className="register-text">
              Não tem uma conta?{" "}
              <Link href="/register">Registre-se</Link>
           </p>
         </div>
        </div>
      </section>
    </main>
  );
}