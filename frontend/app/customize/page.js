"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, Lock } from "lucide-react";

const colors = [
  "#f5edd0", "#f1dcb2", "#e8c89a", "#e7a4a4", "#e9b0c0", "#dfb6ef", "#c9c2f5", "#a8f0b1",
  "#efe672", "#f6c567", "#f2a35f", "#f78e8e", "#f36bb4", "#cd6eff", "#7d6ef4", "#65f06c",
  "#ece400", "#ffb700", "#ff9300", "#ff4d4d", "#ff003c", "#d12cff", "#2e2eff", "#00f000",
  "#6e6500", "#8d5d00", "#7b3d00", "#8b0000", "#6d004d", "#59006a", "#25008a", "#007000",
];

export default function CustomizePage() {
  const [selectedColor, setSelectedColor] = useState("#ffb700");

  return (
    <main className="customize-page">
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

      <section className="customize-content">
        <div className="customize-left">
          <h1 className="customize-title">
            Customize o
            <br />
            Flappy
          </h1>

          <div className="customize-bird-area">
            <div className="customize-bird-wrap">
              <img
                src="/icons/flappy-bird.png"
                alt="Flappy Bird"
                className="customize-bird"
              />
            </div>

            <div className="customize-shadow"></div>
          </div>

          <button className="customize-confirm-button">Confirmar</button>
        </div>

        <div className="customize-right">
          <div className="customize-color-card">
            <div className="customize-color-grid">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`color-swatch locked ${
                    selectedColor === color ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Cor bloqueada ${color}`}
                >
                  <Lock size={14} className="color-lock-icon" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

           <Link href="/mainScreen" className="back-button">
          <Play size={20} className="user-back-icon" />
          <span>Voltar</span>
        </Link>
    </main>
  );
}