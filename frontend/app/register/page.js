import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="register-page">
      <div className="sky-background"></div>

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

      <section className="register-card">
        <h1>Registre-se</h1>

        <form className="register-form">
          <label htmlFor="username">Usuário</label>
          <input id="username" type="text" />

          <label htmlFor="password">Senha</label>
          <input id="password" type="password" />

          <button type="submit" className="register-button">
            criar
          </button>
        </form>

        <p className="register-login-link">
          Já tem uma conta?{" "}
          <Link href="/">
            Faça login aqui
          </Link>
        </p>
      </section>
    </main>
  );
}