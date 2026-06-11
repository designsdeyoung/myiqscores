const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Grid pattern */}
      <div
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          animation: "grid-move 8s linear infinite",
        }}
      />
      {/* Radial glow */}
      <div className="hidden sm:block fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)" }}
      />
      <div className="hidden sm:block fixed bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)" }}
      />
    </div>
  );
};

export default BackgroundEffect;
