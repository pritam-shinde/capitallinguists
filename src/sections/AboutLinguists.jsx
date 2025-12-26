"use client";

import { useState } from "react";

const AboutLinguists = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="about-one"
      id="about"
      style={{ backgroundColor: "var(--procounsel-primary, #19223a)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div
              className="about-one__image wow fadeInLeft "
              data-wow-delay="00ms"
            >
              <img src="/assets/capital-img/language.png" alt="procounsel" />
             
              {/* <img
                                src="assets/images/resources/signature.png"
                                alt=""
                                className="about-one__image__signature"
                            /> */}
              {/* <div className="about-one__image__left bw-img-anim-right">
                <img
                  src="/assets/capital-img/language2.png"
                  // src="assets/images/resources/about-1-2.png"
                  alt="procounsel"
                />
              </div> */}
              <div className="about-one__image__info" style={{ top: 0 }}>
                <div className="about-one__image__info__icon">
                  <i className="icon-phone-1"></i>
                </div>
                <div>
                  <span>Call anytime</span>
                  <a href="tel:+3035550105">(303) 555-0105</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 wow fadeInRight" data-wow-delay="300ms">
            <div className="about-one__inner">
              <div className="about-one__content">
                <div className="sec-title text-left">
                  <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                    Capital Linguists
                  </div>

                  <h3 className="sec-title__title sec-title__title-new bw-split-in-up">
                    Any Language. <span>Anywhere. Any Time</span>
                  </h3>
                </div>

                <p className="about-one__content__text fw-normal">
                  At Capital Linguists, we understand the importance of clear
                  communication. That’s why our experts are dedicated to
                  delivering top-tier translation, interpreting, and
                  interpretation equipment services. Our ISO 9001 certification
                  assures consistent quality and dependability at affordable
                  rates. With our expertise, your message will reach new,
                  multilingual audiences, while our website localization
                  services will tailor your online presence to the target
                  market.
                </p>

                <div className={`about-text ${expanded ? "expanded" : ""}`}>
                  <p className="about-one__content__text fw-normal">
                    Our team is committed to delivering fast, reliable, and
                    efficient services, always aiming for total client
                    satisfaction. With years of experience, and a rigorous
                    screening process, we’ve earned a reputation as one of the
                    leading translation services and interpretation agencies in
                    the USA. We’re available around the clock to support your
                    needs.
                  </p>

                  <p className="about-one__content__text fw-normal">
                    For the best translation and interpreting services anywhere
                    in the USA or worldwide, get in touch with us. We have
                    offices in{" "}
                    <a href="#" className="fw-bold">
                      Boston
                    </a>
                    ,{" "}
                    <a href="#" className="fw-bold">
                      Baltimore
                    </a>
                    ,{" "}
                    <a href="#" className="fw-bold">
                      Washington D.C.
                    </a>
                    ,{" "}
                    <a href="#" className="fw-bold">
                      Philadelphia
                    </a>
                    , and{" "}
                    <a href="#" className="fw-bold">
                      New York
                    </a>
                    , in addition to a worldwide network of over 10,000
                    linguists available to work locally, from your own
                    workplace.
                  </p>

                  <p className="about-one__content__text fw-normal mb-0">
                    Need to discuss your requirements? Call us on{" "}
                    <strong>612-817-7744</strong> or email{" "}
                    <a
                      href="mailto:info@capitallinguists.com"
                      className="fw-bold"
                    >
                      info@capitallinguists.com
                    </a>
                    .
                  </p>
                </div>

                {/* <div className="about-one__content__box">
                  <div className="about-one__content__box__img bw-img-anim-left">
                    <iframe
                      src="https://www.youtube.com/embed/KE4ivngOHWY"
                      title="YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "0",
                      }}
                    />
                  </div>

                  <div className="d-flex flex-column justify-content-between align-items-start">
                    <p>We have offices in:</p>
                    <ul className="about-one__content__list">
                      <li>
                        <span className="icon-check"></span>Boston
                      </li>
                      <li>
                        <span className="icon-check"></span>Baltimore
                      </li>
                      <li>
                        <span className="icon-check"></span>Washington D.C.
                      </li>
                      <li>
                        <span className="icon-check"></span>New York
                      </li>
                    </ul>
                    <a href="#" className="procounsel-btn">
                      <i>Discover More</i>
                      <span>Discover More</span>
                    </a>
                  </div>
                </div> */}
                <button
                  className="procounsel-btn mt-4"
                  onClick={() => setExpanded(!expanded)}
                  aria-expanded={expanded}
                >
                  <i>{expanded ? "Read Less..." : "Read More..."}</i>
                  <span>{expanded ? "Read Less..." : "Read More..."}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLinguists;
