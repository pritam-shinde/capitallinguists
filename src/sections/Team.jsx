import Image from "next/image";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Philip Rosen MA",
      designation: "Managing Director",
      img: "/assets/capital-img/team1.png",
      // img: "/assets/images/team/team-1-1.jpg",
      delay: "000ms",
    },
    {
      id: 2,
      name: "Kathy Gallo",
      designation: "Senior Project Manager",
      img: "/assets/capital-img/team2.png",
      // img: "/assets/images/team/team-1-2.jpg",
      delay: "100ms",
    },
    {
      id: 3,
      name: "Claude Prevost",
      designation: "Marketing Director",
      img: "/assets/capital-img/team3.png",
      // img: "/assets/images/team/team-1-3.jpg",
      delay: "200ms",
    },
    {
      id: 4,
      name: "Becky Redfield",
      designation: "Project Manager",
      img: "/assets/capital-img/team1.png",
      // img: "/assets/images/team/team-1-4.jpg",
      delay: "200ms",
    },
    {
      id: 5,
      name: "Yuli Rosiana",
      designation: "Project Manager",
      img: "/assets/capital-img/team2.png",
      // img: "/assets/images/team/team-1-5.jpg",
      delay: "200ms",
    },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: "icon-facebook", label: "Facebook" },
    {
      href: "https://pinterest.com",
      icon: "icon-pinterest",
      label: "Pinterest",
    },
    { href: "https://twitter.com", icon: "icon-twitter", label: "Twitter" },
    { href: "https://youtube.com", icon: "icon-youtube", label: "Youtube" },
  ];
  return (
    <section
      className="team-one team-one-section"
      style={{ position: "relative" }}
    >
      {/* <Image
        src="/assets/images/team/team-1-1.jpg"
        // src="/assets/photos/our-team/homestead-site-assets-02.png"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "bottom",
          overflow: "hidden",
        }}
        alt="about-background"
      /> */}
      <div className="container">
        <div className="sec-title text-center">
          <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
            WE ARE THERE FOR YOU
          </div>

          <h3 className="sec-title__title bw-split-in-up">
            Leadership Team at <br />
            <span> Capital Linguists</span>
          </h3>
        </div>
        <div className="row gutter-y-30">
          {teamMembers.map((member) => (
            <div className="col-lg-4 col-md-6" key={member.id}>
              <div
                className="team-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay={member.delay}
                style={{
                  height: "100%", // ensure full height usage
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="team-card__image bw-img-anim-left"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="team-card__content">
                    <h3 className="team-card__title">
                      <a href="#">{member.name}</a>
                    </h3>
                    <p className="team-card__designation">
                      {member.designation}
                    </p>
                  </div>

                  {/* <div className="team-card__hover">
                         <span className="team-card__hover__btn">
                           <i className="icon-plus"></i>
                         </span>
                         <div className="team-card__hover__social">
                           {socialLinks.map((link, index) => (
                             <a href={link.href} key={index}>
                               <i className={link.icon}></i>
                               <span className="sr-only">{link.label}</span>
                             </a>
                           ))}
                         </div>
                       </div> */}

                  <img
                    src={member.img}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "425px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex">
          <a href="#" className="procounsel-btn mt-5 m-auto">
            <i>Contact Us Now</i>
            <span>Contact Us Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
