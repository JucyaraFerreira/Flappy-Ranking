"use client";

import Link from "next/link";
import { Volume2, Music, KeyRound, LogOut} from "lucide-react";

export default function UserPage() {
  return (
    <main className="user-page">
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

      <section className="user-content">
        <section className="user-profile-card">
         <h2 className="profile-title">Usuário</h2>

         <div className="profile-info">
           <div className="profile-row">
            <span>Maior pontuação pessoal</span>
            <span className="profile-value"></span>
           </div>

           <div className="profile-row">
            <span>Último jogo</span>
            <span className="profile-value"></span>
           </div>

           <div className="profile-row">
            <span>Posição no Ranking</span>
            <span className="profile-value ranking-value"></span>
           </div>
         </div>
       </section>

        <section className="user-right-area">
          <div className="user-box achievements-box">
            <h2>Conquistas desbloqueadas</h2>
          </div>

          <div className="user-box settings-box">
            <h2>Configurações</h2>

            <button className="settings-item">
              <Volume2 size={18} />
              <span>Som</span>
            </button>

            <button className="settings-item">
              <Music size={18} />
              <span>Música</span>
            </button>

            <button className="settings-item reset-button">
              <KeyRound size={18} />
              <span>Redefinir senha</span>
            </button>

            <Link href="/" className="settings-item logoff-button">
              <LogOut size={18} />
              <span>Sair</span>
            </Link>
            
          </div>
        </section>
      </section>

      <Link href="/mainScreen" className="back-button">
        ◀ Voltar
      </Link>
    </main>
  );
}