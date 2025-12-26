"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const sliderData = [
    {
      bg: "/assets/capital-img/banner-home.jpg",
      title: (
        <>
          With over 20,000 <br /> interpreters and translators
        </>
      ),
      text: (
        <>
          <p style={{ marginBottom: "20px" }} className="custom-max-width2">
            We provide services around the world in over 200 languages
          </p>
          {/* <p style={{ marginBottom: "20px" }} className="custom-max-width2">
            “When Success Depends on Every Word”
          </p> */}
        </>
      ),
    },
  ];
  return (
    <section className="hero-slider" style={{ background: "#0E222A" }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        // loop={true}
        // autoplay={{ delay: 8000, disableOnInteraction: false }}
        // speed={3000} // 3s smooth transition speed
        pagination={{ clickable: true }}
        className="heroSwiper"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="main-slider-one__overlay-one"></div>

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0, 0, 0, 0.25)",
                  zIndex: 1,
                }}
              />
              <div className="content container home-content">
                <h1 className="mt-3 fw-bold">{slide.title}</h1>
                <div>{slide.text}</div>

                {/* <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4">
                  <div>
                    <a
                      href="#"
                      className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start text-uppercase"
                    >
                      <i>instant quote</i>
                      <span className="text-uppercase">instant quote</span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start text-uppercase"
                    >
                      <i>instant quote</i>
                      <span className="text-uppercase">instant quote</span>
                    </a>
                  </div>
                </div> */}

                <div className="row mt-4">
                  <div
                    className="col-md-6 col-lg-4 wow fadeInUp"
                    data-wow-delay="00ms"
                  >
                    <div
                      className="service-one__item service-one__item-new mx-3 d-flex flex-column justify-content-between"
                      style={{ maxHeight: "570px", height: "100%" }}
                    >
                      <div className="service-one__item__top pb-1">
                        <h4
                          className="service-one__item__title fw-bold"
                          style={{ maxWidth: "100%", fontSize: "22px" }}
                        >
                          Live Interpreters
                        </h4>
                      </div>
                      <p className="service-one__item__text text-black mt-1 mb-0">
                       Available by phone, video, or in person
                      </p>
                      <button className="procounsel-btn mt-4 p-0">
                        <i>Instant Quote</i>
                        <span>Instant Quote</span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 wow fadeInUp mt-4 mt-md-0"
                    data-wow-delay="00ms"
                  >
                    <div
                      className="service-one__item service-one__item-new mx-3 d-flex flex-column justify-content-between"
                      style={{ maxHeight: "570px", height: "100%" }}
                    >
                      <div className="service-one__item__top pb-1">
                        <h4
                          className="service-one__item__title fw-bold"
                          style={{ maxWidth: "100%", fontSize: "22px" }}
                        >
                          Document Translation
                        </h4>
                      </div>
                      <p className="service-one__item__text text-black mt-1 mb-0">
                        Translate documents, books, or websites
                      </p>
                      <button className="procounsel-btn mt-4 p-0">
                        <i>Instant Quote</i>
                        <span>Instant Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="container">
                <div className="feature-one">
                    <div className="feature-one home-banner-service-info featured-dimension">
                        <div className="feature-one__inner">
                            <div className="row gutter-y-0">
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                                    <div className="feature-one__item ">
                                        <div className="feature-one__item__icon text-white">
                                            <Image
                                                width={54}
                                                height={54}
                                                src="/assets/distributor-img/year-of-exp.png"
                                                className="object-cover"
                                                alt="Year of Experience"
                                            />
                                        </div>
                                        <h2 className="feature-one__item__title font-Montserrat">
                                            <Link href="#" className="text-white">
                                                20+ Years <br /> of Experience 
                                            </Link>
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                                    <div className="feature-one__item feature-one__item--border-left justify-content-center">
                                        <div className="feature-one__item__icon text-white">
                                            <Image
                                                width={54}
                                                height={54}
                                                src="/assets/distributor-img/partner-brands.png"
                                                className="object-cover"
                                                alt="Partner Brands"
                                            />
                                        </div>
                                        <h2 className="feature-one__item__title font-Montserrat">
                                            <Link href="#" className="text-white">
                                                25+ Partner <br /> Brands 
                                            </Link>
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                                    <div className="feature-one__item feature-one__item--border-left justify-content-end">
                                        <div className="feature-one__item__icon text-white">
                                            <Image
                                                width={54}
                                                height={54}
                                                src="/assets/distributor-img/retail-point.png"
                                                className="object-cover"
                                                alt="Retail Point"
                                            />
                                        </div>
                                        <h2 className="feature-one__item__title font-Montserrat">
                                            <Link href="#" className="text-white">
                                                5000+ Retail <br /> Points 
                                            </Link>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   */}
    </section>
  );
};

export default Banner;
