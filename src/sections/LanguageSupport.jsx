import Image from "next/image";

const languages = [
  {
    name: "Chinese to English",
    flag: "/assets/capital-img/flag2.png",
  },
  {
    name: "Hebrew to English",
    flag: "/assets/capital-img/flag3.png",
  },
  {
    name: "Mandarin to English",
    flag: "/assets/capital-img/flag4.png",
  },
  {
    name: "Haitian Creole to English",
    flag: "/assets/capital-img/flag5.png",
  },
  {
    name: "German to English",
    flag: "/assets/capital-img/china.png",
  },
  {
    name: "Korean to English",
    flag: "/assets/capital-img/flag3.png",
  },
];

export default function LanguageSupport() {
  return (
    <>
      <section
        className="team-one team-one-section"
        style={{ position: "relative" }}
      >
        <div className="container">
          <div className="sec-title text-center">
            <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
              OUR SUPPORT COUNTRIES
            </div>

            <h3 className="sec-title__title bw-split-in-up">
              We support all languages and collaborate <br />
              <span>with all sectors of industry.</span>
            </h3>
          </div>
          <div className="row gutter-y-30">
            {languages.map((item, index) => (
              <div
                key={index}
                className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"
                style={{ textAlign: "center" }}
              >
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

                <a
                  href="#"
                  className="team-one__member-name "
                  style={{ marginTop: "8px", fontSize: "16px" }}
                >
                  {item.name.split(" ").slice(0, -2).join(" ")} to <br /> English
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
