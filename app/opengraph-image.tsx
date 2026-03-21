import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Stock Sync Pro — Sincronización de stock para WooCommerce";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#06070f",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background:
              "radial-gradient(ellipse at center, rgba(79,70,229,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Icon */}
        <div
          style={{
            width: "96px",
            height: "96px",
            borderRadius: "20px",
            background: "#4f46e5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "28px",
          }}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 17L12 23L26 9"
              stroke="white"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 900,
            color: "white",
            letterSpacing: "-2px",
            marginBottom: "16px",
          }}
        >
          Stock Sync Pro
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "26px",
            color: "#64748b",
            marginBottom: "32px",
            textAlign: "center",
            maxWidth: "700px",
          }}
        >
          Sincronización de stock automática para WooCommerce
        </div>

        {/* Badge */}
        <div
          style={{
            padding: "10px 28px",
            borderRadius: "999px",
            background: "rgba(79,70,229,0.15)",
            border: "1px solid rgba(79,70,229,0.3)",
            color: "#818cf8",
            fontSize: "18px",
            fontWeight: 600,
            marginBottom: "40px",
          }}
        >
          Prueba 7 días gratis
        </div>

        {/* URL */}
        <div style={{ fontSize: "20px", color: "#334155" }}>
          stocksyncpro.com
        </div>
      </div>
    ),
    { ...size }
  );
}
