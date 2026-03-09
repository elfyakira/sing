import Link from "next/link";

interface PageHeaderProps {
  label: string;
  title: string;
  backgroundImage?: string;
}

export default function PageHeader({ label, title, backgroundImage }: PageHeaderProps) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{
          height: "340px",
          background: backgroundImage
            ? undefined
            : "linear-gradient(135deg, #8B0000 0%, #C84B2F 40%, #D4553A 70%, #B22222 100%)",
        }}
      >
        {/* Background image (if provided) */}
        {backgroundImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(139,0,0,0.85) 0%, rgba(200,75,47,0.8) 40%, rgba(212,85,58,0.75) 70%, rgba(178,34,34,0.85) 100%)",
              }}
            />
          </>
        )}

        {/* Background large faint text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ overflow: "hidden" }}
        >
          <span
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(120px, 18vw, 260px)",
              color: "rgba(255,255,255,0.06)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        </div>

        <div className="relative z-10 pt-16">
          <h1
            className="text-white font-bold"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(36px, 5vw, 52px)",
              letterSpacing: "0.05em",
              marginBottom: "12px",
            }}
          >
            {label}
          </h1>
          <p className="text-white/80" style={{ fontSize: "14px" }}>
            {title}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div
        className="bg-white border-b border-gray-200"
        style={{ padding: "12px 20px" }}
      >
        <div className="mx-auto" style={{ maxWidth: "1200px" }}>
          <nav className="flex items-center gap-2" style={{ fontSize: "12px", color: "#999" }}>
            <Link href="/" className="hover:text-gray-700 transition-colors">トップ</Link>
            <span>/</span>
            <span style={{ color: "#333" }}>{title}</span>
          </nav>
        </div>
      </div>
    </>
  );
}
