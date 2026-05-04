import Link from "next/link";

export default function MainScreenPage() {
  return (
    <main className="main-screen-page">
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

      <section className="main-screen-content">
        <header className="main-screen-header">
          <Link href="/ranking" className="main-screen-top-link">
              <img src="/icons/ranking.png" alt="Ranking" className="button-icon" />
              Ranking
          </Link>

          <h1 className="main-screen-title">FLAPPY RANKED</h1>

            <div className="main-screen-user">
              <Link href="/user" className="user-icon-link">
                <img src="/icons/user.png" alt="User profile" className="user-icon" />
              </Link>

              <span className="user-name">Usuario</span>
            </div>

        </header>

      <div className="main-screen-actions">
        <Link href="/customize" className="main-screen-button">
          <img src="/icons/customize.png" alt="Customize" className="button-icon" />
          Customizar
        </Link>


          <Link href="/play" className="main-screen-button play-button">
            ▶ Jogar
          </Link>

          <Link href="/shop" className="main-screen-button">
          <img src="/icons/shop.png" alt="Customize" className="button-icon" />
             Loja
          </Link>
        </div>

        <Link href="/" className="main-screen-exit-button">
          ↪ Sair
        </Link>
      </section>
    </main>
  );
}