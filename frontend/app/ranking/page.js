"use client";

import { useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";

export default function RankingPage() {
  const [rankingType, setRankingType] = useState("global");

  const isGlobalRanking = rankingType === "global";

  function handleChangeRanking() {
    setRankingType(isGlobalRanking ? "local" : "global");
  }

  return (
    <main className="ranking-page">
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
      <section className="ranking-content">
        <button className="ranking-title-button" onClick={handleChangeRanking}>
          {isGlobalRanking ? "Global Ranking" : "Local Ranking"}
        </button>

        <div className="ranking-card">
          <p className="ranking-empty-message">
            {isGlobalRanking
              ? "Nenhum jogador no ranking global ainda."
              : "Você ainda não possui partidas registradas."}
          </p>
        </div>
      </section>

      <Link href="/mainScreen" className="ranking-back-button">
        <span>Voltar</span>
        <Play size={20} />
      </Link>
    </main>
  );
}