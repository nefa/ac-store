"use client";

export default function TruckAnimation({ text }: { text: string }) {
  return (
    <>
      <style>{`
        @keyframes truck-drive {
          from { transform: translateX(clamp(200px, 60vw, 800px)); }
          to   { transform: translateX(0); }
        }
        @keyframes dust {
          0%   { opacity: 0; transform: translateX(0) scale(0.5); }
          40%  { opacity: 0.6; transform: translateX(12px) scale(1.2); }
          100% { opacity: 0; transform: translateX(28px) scale(1.8); }
        }
        @keyframes dust2 {
          0%   { opacity: 0; transform: translateX(0) scale(0.4); }
          40%  { opacity: 0.4; transform: translateX(18px) scale(1); }
          100% { opacity: 0; transform: translateX(36px) scale(1.6); }
        }
        @keyframes text-appear {
          from { opacity: 0; transform: translateX(-6px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <div className="flex items-center gap-2 font-medium overflow-hidden">
        <span className="relative inline-flex items-center">
          <span
            className="inline-block"
            style={{ animation: "truck-drive 1s cubic-bezier(0.33, 1, 0.68, 1) forwards" }}
          >
            🚚
          </span>
          <span
            className="absolute text-[10px] leading-none"
            style={{
              left: "100%",
              top: "50%",
              transform: "translateY(-50%)",
              animation: "dust 0.9s ease-out 0.1s infinite",
            }}
          >
            💨
          </span>
          <span
            className="absolute text-[8px] leading-none"
            style={{
              left: "100%",
              top: "20%",
              animation: "dust2 0.9s ease-out 0.3s infinite",
            }}
          >
            💨
          </span>
        </span>

        <span
          style={{ animation: "text-appear 0.4s ease-out 1.1s both" }}
        >
          {text}
        </span>
      </div>
    </>
  );
}