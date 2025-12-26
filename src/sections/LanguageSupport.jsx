import Image from "next/image";

const languages = [
  {
    name: "Chinese to English",
    flag:'/assets/capital-img/flag2.png'
  },
  {
    name: "Hebrew to English",
    flag:'/assets/capital-img/flag3.png'
  },
  {
    name: "Mandarin to English",
    flag:'/assets/capital-img/flag4.png'
  },
  {
    name: "Haitian Creole to English",
    flag:'/assets/capital-img/flag5.png'
  },
  {
    name: "German to English",
    flag:'/assets/capital-img/china.png'
  },
  {
    name: "Korean to English",
    flag:'/assets/capital-img/flag3.png'
  },
];

export default function LanguageSupport() {
  return (
    <section
      style={{
        padding: "40px 20px",
        border: "2px solid #1e88ff",
        textAlign: "center",
      }}
    >
      <h3 className="sec-title__title bw-split-in-up fw-normal">
        We support all languages and collaborate with all <br />
        <span> sectors of industry.</span>
      </h3>

      <div className="mt-4"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {languages.map((item, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <div
              style={{
                width: "126px",
                height: "126px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              <Image
                src={item.flag}
                alt={item.name}
                width={126}
                height={126}
                style={{ objectFit: "cover" }}
              />
            </div>

            <p style={{ marginTop: "8px", fontSize: "12px" }}>
              {item.name.split(" ").slice(0, -2).join(" ")}
              <br />
              to English
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
