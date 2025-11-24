export default function ProjectsDummyList() {
  const images = Array.from(
    { length: 100 },
    (_, i) => `https://loremflickr.com/800/600/construction?random=${i}`
  );
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "12px",
        width: "100%",
        padding: "12px",
      }}
    >
      {images.map((img, i) => (
        <div
          key={i}
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={img}
            alt="project"
            style={{
              width: "100%",
              height: "240px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "8px", fontWeight: 600 }}>Project {i + 1}</div>
        </div>
      ))}
    </div>
  );
}
