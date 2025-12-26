"use client";
import { useEffect } from "react";

const LanguageProvider = () => {
  useEffect(() => {
    const scriptUrls = [
      "/assets/vendors/jquery/jquery-3.7.1.min.js",
      "/assets/vendors/owl-carousel/js/owl.carousel.min.js",
    ];

    const loadScript = (src) =>
      new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false; // preserve order
        script.onload = resolve;
        document.body.appendChild(script);
      });

    (async () => {
      // Load scripts sequentially
      for (const src of scriptUrls) {
        await loadScript(src);
      }

      // Now jQuery and Owl Carousel are ready
      const $ = window.jQuery;
      const carousel = $(".procounsel-owl__carousel");
      if (carousel.length && typeof $.fn.owlCarousel === "function") {
        carousel.each(function () {
          const elm = $(this);
          const options = elm.data("owl-options");
          elm.owlCarousel(
            typeof options === "object" ? options : JSON.parse(options)
          );
        });
      }
    })();
  }, []);

  return (
    <section className="service-one" style={{ background: "none !important" }}>
      <div
        className="service-one__bg"
        style={{
          backgroundImage: "url(assets/images/shapes/service-bg-1.png)",
        }}
      ></div>
      <div className="container-fluid">
        <div className="sec-title text-center">
          <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2 ">
            Our Services
          </div>

          <h3 className="sec-title__title bw-split-in-up text-black">
            Let Capital Linguists provide <br />{" "}
            <span>The best language experts for your team.</span>
          </h3>
        </div>
        <div className="row gutter-y-30">
          <div
            className="col-xxl-3 col-xl-4 col-lg-4  col-md-6 wow fadeInUp"
            data-wow-delay="00ms"
          >
            <div
              className="service-one__item mx-3 d-flex flex-column justify-content-between"
              style={{ maxHeight: "570px", height: "100%" }}
            >
              <div className="service-one__item__top">
                <h3 className="service-one__item__title">
                  <a className="fw-bold" href="#">
                    Interpreting
                  </a>
                </h3>
                <span className="service-one__item__count number-color"></span>
              </div>
              <p className="service-one__item__text text-black">
                Our exceptional interpreting services enable cross-cultural
                communication, enabling clear understanding among people who
                speak different languages.
              </p>
              <div className="service-one__item__image">
                <img
                  src="assets/images/resources/service-1-1.png"
                  alt="procounsel"
                />
                <div className="service-one__item__icon">
                  <i className="icon-criminal-law"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div
              className="service-one__item mx-3 d-flex flex-column justify-content-between"
              style={{ maxHeight: "570px", height: "100%" }}
            >
              <div className="service-one__item__top">
                <h3 className="service-one__item__title">
                  <a className="fw-bold" href="#">
                    Translation
                  </a>
                </h3>
                <span className="service-one__item__count number-color"></span>
              </div>
              <p className="service-one__item__text text-black">
                We provide our clients with professional, top-quality
                translation services, thanks to our impressive global network of
                translators, editors, and proofreaders who work with all major
                language pairs and combinations.
              </p>
              <div className="service-one__item__image">
                <img
                  src="assets/images/resources/service-1-2.png"
                  alt="procounsel"
                />
                <div className="service-one__item__icon">
                  <i className="icon-family-law"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div
              className="service-one__item mx-3 d-flex flex-column justify-content-between"
              style={{ maxHeight: "570px", height: "100%" }}
            >
              <div className="service-one__item__top">
                <h3 className="service-one__item__title">
                  <a className="fw-bold" href="#">
                    Conference Services
                  </a>
                </h3>
                <span className="service-one__item__count number-color"></span>
              </div>
              <p className="service-one__item__text text-black">
                Our conference translators provide top-level consecutive and
                simultaneous interpreting services, backed by advanced
                interpreting and audiovisual equipment. They are experts at
                translating speech quickly and with no loss of meaning.
              </p>
              <div className="service-one__item__image">
                <img
                  src="assets/images/resources/service-1-3.png"
                  alt="procounsel"
                />
                <div className="service-one__item__icon">
                  <i className="icon-real-estate-law"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div
              className="service-one__item mx-3 d-flex flex-column justify-content-between"
              style={{ maxHeight: "570px", height: "100%" }}
            >
              <div className="service-one__item__top">
                <h3 className="service-one__item__title">
                  <a className="fw-bold" href="#">
                    Translation Equipment
                  </a>
                </h3>
                <span className="service-one__item__count number-color"></span>
              </div>
              <p className="service-one__item__text text-black">
                We provide cutting-edge interpreting equipment and audiovisual
                equipment to ensure our clients’ events go without a hitch. We
                have both portable and fixed equipment options available, which
                can be tailored to any event or setting.
              </p>
              <div className="service-one__item__image">
                <img
                  src="assets/images/resources/service-1-4.png"
                  alt="procounsel"
                />
                <div className="service-one__item__icon">
                  <i className="icon-employment-law"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutter-y-30 mt-3">
          <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="00ms">
            <div
              className="service-one__item mx-3 d-flex flex-column justify-content-between"
              style={{ maxHeight: "570px", height: "100%" }}
            >
              <div className="service-one__item__top">
                <h3 className="service-one__item__title">
                  <a className="fw-bold" href="#">
                    Website Localization
                  </a>
                </h3>
                <span className="service-one__item__count number-color"></span>
              </div>
              <p className="service-one__item__text text-black">
                Our translation agency will localize your website to ensure you
                speak the same language as your customers. Our linguistic
                experts cover all major markets.
              </p>
              <div className="service-one__item__image">
                <img
                  src="assets/images/resources/service-1-1.png"
                  alt="procounsel"
                />
                <div className="service-one__item__icon">
                  <i className="icon-criminal-law"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div
              className="service-one__item mx-3 d-flex flex-column justify-content-between"
              style={{ maxHeight: "570px", height: "100%" }}
            >
              <div className="service-one__item__top">
                <h3 className="service-one__item__title">
                  <a className="fw-bold" href="#">
                    Multilingual Videos
                  </a>
                </h3>
                <span className="service-one__item__count number-color"></span>
              </div>
              <p className="service-one__item__text text-black">
                Our subtitling services make your videos accessible to speakers
                of other languages. We’ll transcribe the audio, translate it
                into the target language, and then insert it into the video.
              </p>
              <div className="service-one__item__image">
                <img
                  src="assets/images/resources/service-1-2.png"
                  alt="procounsel"
                />
                <div className="service-one__item__icon">
                  <i className="icon-family-law"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div
              className="service-one__item mx-3 d-flex flex-column justify-content-between"
              style={{ maxHeight: "570px", height: "100%" }}
            >
              <div className="service-one__item__top">
                <h3 className="service-one__item__title">
                  <a className="fw-bold" href="#">
                    Audio Transcription
                  </a>
                </h3>
                <span className="service-one__item__count number-color"></span>
              </div>
              <p className="service-one__item__text text-black">
                Our transcription services involve converting audio to text in
                all key language pairs. We can also provide transcription
                translation, where the audio is first transcribed before being
                translated into the target language.
              </p>
              <div className="service-one__item__image">
                <img
                  src="assets/images/resources/service-1-3.png"
                  alt="procounsel"
                />
                <div className="service-one__item__icon">
                  <i className="icon-real-estate-law"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div
              className="service-one__item mx-3 d-flex flex-column justify-content-between"
              style={{ maxHeight: "570px", height: "100%" }}
            >
              <div className="service-one__item__top">
                <h3 className="service-one__item__title">
                  <a className="fw-bold" href="#">
                    Voiceovers
                  </a>
                </h3>
                <span className="service-one__item__count number-color"></span>
              </div>
              <p className="service-one__item__text text-black">
                Our voiceover artists provide high-quality sound recordings for
                all your multilingual needs.
              </p>
              <div className="service-one__item__image">
                <img
                  src="assets/images/resources/service-1-4.png"
                  alt="procounsel"
                />
                <div className="service-one__item__icon">
                  <i className="icon-employment-law"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="barnds-one @@extraClassName">
        <div className="container">
          <div
            className="barnds-one__inner wow fadeInUp p-0"
            data-wow-delay="300ms"
          >
            <div className="row">
              <div className="col-lg-2">
                <div className="barnds-one__text">
                  <h3 className="text-black">
                    Clients We've <br /> worked with
                  </h3>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="barnds-one__logos">
                  <div
                    className="barnds-carousel__one procounsel-owl__carousel procounsel-owl__carousel--basic-nav owl-carousel"
                    data-owl-options='{
                        "loop": true,
                        "animateOut": "fadeOut",
                        "animateIn": "fadeIn",
                        "items": 6,
                        "autoplay": false,
                        "autoplayTimeout": 7000,
                        "smartSpeed": 1000,
                        "nav": false,
                        "navText": ["<span className=\"icon-arrow-left\"></span>","<span className=\"icon-arrow-right\"></span>"],
                        "dots": false,
                        "margin": 0,
                        "responsive": {
                            "0": {
                                "items": 2
                            },
                            "600": {
                                "items": 3
                            },
                            "768": {
                                "items": 4
                            },
                            "1200": {
                                "items": 6
                            }
                        }
                        }'
                  >
                    <div className="item">
                      <div className="barnds-one__img">
                        <img
                          className="img-fluid"
                          style={{ width: "150px", height: "80px" }}
                          src="/assets/capital-img/brazil-embassy.webp"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="barnds-one__img">
                        <img
                          className="img-fluid"
                          style={{ width: "150px", height: "80px" }}
                          src="/assets/capital-img/poultry-egg-council.webp"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="barnds-one__img">
                        <img
                          className="img-fluid"
                          style={{ width: "150px", height: "80px" }}
                          src="/assets/capital-img/ingram-micro.webp"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="barnds-one__img">
                        <img
                          className="img-fluid"
                          style={{ width: "150px", height: "80px" }}
                          src="/assets/capital-img/DOJ.webp"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* <div className="item">
                        <div className="barnds-one__img">
                          <img
                            className="img-fluid"
                            style={{ width: "150px", height: "80px" }}
                            src="/assets/capital-img/stanford.png"
                            alt=""
                          />
                        </div>
                      </div> */}
                    <div className="item">
                      <div className="barnds-one__img">
                        <img
                          className="img-fluid"
                          style={{ width: "150px", height: "80px" }}
                          src="/assets/capital-img/ingram-micro.webp"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageProvider;
