"use client";

import { useState } from "react";
import Image from "next/image";

// 押したときだけ動画を読み込む再生枠（TOPを重くしない）
export default function PvPlayer({
  src,
  poster,
  title,
}: {
  src: string;
  poster: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "16 / 9",
        backgroundColor: "#000",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
      }}
    >
      {playing ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            backgroundColor: "#000",
          }}
        />
      ) : (
        <button
          type="button"
          aria-label={`${title}を再生する`}
          onClick={() => setPlaying(true)}
          className="group"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
            padding: 0,
            cursor: "pointer",
            background: "none",
          }}
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 1040px) 100vw, 1000px"
            style={{ objectFit: "cover" }}
          />
          <span
            style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.18)" }}
            aria-hidden="true"
          />
          <span
            className="flex items-center justify-center rounded-full bg-white group-hover:scale-105 transition-transform"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "88px",
              height: "88px",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
            }}
            aria-hidden="true"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#C41E2F">
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
