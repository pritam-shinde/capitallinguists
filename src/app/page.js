"use client";
import AboutLinguists from "@/sections/AboutLinguists";
import Banner from "@/sections/Banner";
import LanguageProvider from "@/sections/LanguageProvider";
import Team from "@/sections/Team";
import Testimonials from "@/sections/Testimonials";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
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
    <>
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>

      <div className="page-wrapper">
        <Banner />

        {/* Our service / Language Provider */}
        <LanguageProvider />

        {/* About us */}
        <AboutLinguists />

        {/* 1 */}
        <section className="about-four about-four-about" id="about">
          <div className="container">
            <div className="row gutter-y-30">
              <div className="col-xl-6 col-md-12">
                <div className="about-four__img bw-img-anim-left">
                  <img src="assets/images/resources/about-3-1.jpg" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 col-md-12">
                <div className="about-four__content">
                  <div className="sec-title text-left">
                    <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                      About Us
                    </div>

                    <h3 className="sec-title__title bw-split-in-up">
                      Experience the <br /> Best in{" "}
                      <span>Legal Excellence</span>
                    </h3>
                  </div>
                  <p className="about-four__text">
                    There are many variations of passages of one Lorem Ipsum
                    avalab but the majority have suffered alteration in some
                    form, by injed humour words randomised words which don't
                  </p>
                  <ul className="list-unstyled about-four__list">
                    <li className="about-four__item">
                      <i className="icon-check"></i>
                      Many variations of passages
                    </li>
                    <li className="about-four__item">
                      <i className="icon-check"></i>
                      Many variations of passages
                    </li>
                  </ul>
                  <div className="about-four__btns">
                    <a href="#" className="procounsel-btn ">
                      <i> Discover More</i>
                      <span> Discover More</span>
                    </a>
                    <img
                      src="assets/images/resources/about-2-signature.jpg"
                      alt="signature"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  2*/}
        <section className="about-four about-four-about" id="about">
          <div className="container">
            <div className="row gutter-y-30">
              <div className="col-xl-6 col-lg-8 col-md-12">
                <div className="about-four__content">
                  <div className="sec-title text-left">
                    <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                      About Us
                    </div>

                    <h3 className="sec-title__title bw-split-in-up">
                      Experience the <br /> Best in{" "}
                      <span>Legal Excellence</span>
                    </h3>
                  </div>
                  <p className="about-four__text">
                    There are many variations of passages of one Lorem Ipsum
                    avalab but the majority have suffered alteration in some
                    form, by injed humour words randomised words which don't
                  </p>
                  <ul className="list-unstyled about-four__list">
                    <li className="about-four__item">
                      <i className="icon-check"></i>
                      Many variations of passages
                    </li>
                    <li className="about-four__item">
                      <i className="icon-check"></i>
                      Many variations of passages
                    </li>
                  </ul>
                  <div className="about-four__btns">
                    <a href="#" className="procounsel-btn ">
                      <i> Discover More</i>
                      <span> Discover More</span>
                    </a>
                    <img
                      src="assets/images/resources/about-2-signature.jpg"
                      alt="signature"
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-md-12">
                <div className="about-four__img bw-img-anim-left">
                  <img src="assets/images/resources/about-3-1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  3*/}
        <section className="about-four about-four-about" id="about">
          <div className="container">
            <div className="row gutter-y-30">
              <div className="col-xl-6 col-md-12">
                <div className="about-four__img bw-img-anim-left">
                  <img src="assets/images/resources/about-3-1.jpg" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 col-md-12">
                <div className="about-four__content">
                  <div className="sec-title text-left">
                    <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                      About Us
                    </div>

                    <h3 className="sec-title__title bw-split-in-up">
                      Experience the <br /> Best in{" "}
                      <span>Legal Excellence</span>
                    </h3>
                  </div>
                  <p className="about-four__text">
                    There are many variations of passages of one Lorem Ipsum
                    avalab but the majority have suffered alteration in some
                    form, by injed humour words randomised words which don't
                  </p>
                  <ul className="list-unstyled about-four__list">
                    <li className="about-four__item">
                      <i className="icon-check"></i>
                      Many variations of passages
                    </li>
                    <li className="about-four__item">
                      <i className="icon-check"></i>
                      Many variations of passages
                    </li>
                  </ul>
                  <div className="about-four__btns">
                    <a href="#" className="procounsel-btn ">
                      <i> Discover More</i>
                      <span> Discover More</span>
                    </a>
                    <img
                      src="assets/images/resources/about-2-signature.jpg"
                      alt="signature"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*4  */}
        <section className="about-four about-four-about" id="about">
          <div className="container">
            <div className="row gutter-y-30">
              <div className="col-xl-6 col-lg-8 col-md-12">
                <div className="about-four__content">
                  <div className="sec-title text-left">
                    <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                      About Us
                    </div>

                    <h3 className="sec-title__title bw-split-in-up">
                      Experience the <br /> Best in{" "}
                      <span>Legal Excellence</span>
                    </h3>
                  </div>
                  <p className="about-four__text">
                    There are many variations of passages of one Lorem Ipsum
                    avalab but the majority have suffered alteration in some
                    form, by injed humour words randomised words which don't
                  </p>
                  <ul className="list-unstyled about-four__list">
                    <li className="about-four__item">
                      <i className="icon-check"></i>
                      Many variations of passages
                    </li>
                    <li className="about-four__item">
                      <i className="icon-check"></i>
                      Many variations of passages
                    </li>
                  </ul>
                  <div className="about-four__btns">
                    <a href="#" className="procounsel-btn ">
                      <i> Discover More</i>
                      <span> Discover More</span>
                    </a>
                    <img
                      src="assets/images/resources/about-2-signature.jpg"
                      alt="signature"
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-md-12">
                <div className="about-four__img bw-img-anim-left">
                  <img src="assets/images/resources/about-3-1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*   */}
        <section className="team-one" style={{ background: "#0E222A" }}>
          <div className="container">
            <div className="sec-title text-left">
              <h3 className="sec-title__title bw-split-in-up text-white">
                Our Core <span> Values</span>
              </h3>

              <h4 className="tailored-subtitle font-Merriweather text-white mt-2">
                The principle that guide everything we do
              </h4>
            </div>
            <div className="row gutter-y-30">
              <div
                className="col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="00ms"
              >
                <div
                  className="service-details__item"
                  style={{ height: "100%" }}
                >
                  <div className="service-details__item__icon">
                    <Image
                      width={31}
                      height={31}
                      src="/assets/distributor-img/excellence.png"
                      alt="response"
                    />
                    <span className="service-details__item__icon__zoom">
                      <Image
                        width={31}
                        height={31}
                        src="/assets/distributor-img/excellence.png"
                        alt="response"
                      />
                    </span>
                  </div>
                  <div className="service-details__item__content">
                    <h4 className="service-details__item__title text-white">
                      Excellence
                    </h4>

                    <p className="service-details__item__text text-white">
                      We strive for excellence in every aspect of our
                      operations, from logistics to customer service.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div
                  className="service-details__item"
                  style={{ height: "100%" }}
                >
                  <div className="service-details__item__icon">
                    <Image
                      width={31}
                      height={31}
                      src="/assets/distributor-img/market-penetration.png"
                      alt="response"
                    />
                    <span className="service-details__item__icon__zoom">
                      <Image
                        width={31}
                        height={31}
                        src="/assets/distributor-img/market-penetration.png"
                        alt="response"
                      />
                    </span>
                  </div>
                  <div className="service-details__item__content">
                    <h4 className="service-details__item__title text-white">
                      Integrity
                    </h4>

                    <p className="service-details__item__text text-white">
                      We conduct business with the highest ethical standards,
                      building trust with every interaction.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div
                  className="service-details__item"
                  style={{ height: "100%" }}
                >
                  <div className="service-details__item__icon">
                    <Image
                      width={31}
                      height={31}
                      src="/assets/distributor-img/partnership.png"
                      alt="response"
                    />
                    <span className="service-details__item__icon__zoom">
                      <Image
                        width={31}
                        height={31}
                        src="/assets/distributor-img/partnership.png"
                        alt="response"
                      />
                    </span>
                  </div>
                  <div className="service-details__item__content">
                    <h4 className="service-details__item__title text-white">
                      Partnership
                    </h4>

                    <p className="service-details__item__text text-white">
                      We believe in building long-term partnerships, treating
                      every brand's success as our own.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div
                  className="service-details__item"
                  style={{ height: "100%" }}
                >
                  <div className="service-details__item__icon">
                    <Image
                      width={31}
                      height={31}
                      src="/assets/distributor-img/growth-focus.png"
                      alt="response"
                    />
                    <span className="service-details__item__icon__zoom">
                      <Image
                        width={31}
                        height={31}
                        src="/assets/distributor-img/growth-focus.png"
                        alt="response"
                      />
                    </span>
                  </div>
                  <div className="service-details__item__content">
                    <h4 className="service-details__item__title text-white">
                      Sustainability
                    </h4>

                    <p className="service-details__item__text text-white">
                      We are committed to sustainable practices that benefit our
                      community and environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* team */}
        <Team />

        {/*  */}
        <section className="why-choose-four">
          <div
            className="why-choose-four__bg jarallax"
            data-jarallax
            data-speed="0.3"
            style={{
              backgroundImage:
                "url(/assets/distributor-img/what-we-offer-nagpur.jpg)",
            }}
          ></div>
          <div className="container">
            <div>
              <div className="row">
                <div className="col-xl-8 wow fadeInUp" data-wow-delay="00ms">
                  <div className="why-choose-four__content">
                    <div className="sec-title text-left">
                      <h3 className="sec-title__title bw-split-in-up">
                        What We
                        <span> Offer</span>
                      </h3>
                      <h4 className="tailored-subtitle font-Merriweather text-white mt-2">
                        End-to-end distribution services tailored to your
                        brand's unique needs
                      </h4>
                    </div>

                    <div className="why-choose-four__list">
                      <div className="why-choose-four__item">
                        <div className="why-choose-four__item__top">
                          <div className="why-choose-four__item__icon">
                            <Image
                              width={22}
                              height={22}
                              src="/assets/images/shapes/icon-01.png"
                              alt="response"
                            />
                          </div>
                          <h3 className="why-choose-four__item__title">
                            Full-Scale <br /> Distribution.
                          </h3>
                        </div>
                        <p className="why-choose-four__item__text text-white">
                          Complete distribution management from warehouse to
                          retail shelf, ensuring your products reach to your
                          store.
                        </p>
                      </div>
                      <div className="why-choose-four__item">
                        <div className="why-choose-four__item__top">
                          <div className="why-choose-four__item__icon">
                            <i className="icon-collaboration"></i>
                          </div>
                          <h3 className="why-choose-four__item__title">
                            Logistics & <br /> Supply Chain.
                          </h3>
                        </div>
                        <p className="why-choose-four__item__text text-white">
                          Efficient logistics solutions temperature control, and
                          optimized delivery routes.
                        </p>
                      </div>
                    </div>

                    <div className="why-choose-four__list">
                      <div className="why-choose-four__item">
                        <div className="why-choose-four__item__top">
                          <div className="why-choose-four__item__icon">
                            <Image
                              width={22}
                              height={22}
                              src="/assets/images/shapes/icon-03.png"
                              alt="response"
                            />
                          </div>
                          <h3 className="why-choose-four__item__title">
                            Retail <br /> Coverage.
                          </h3>
                        </div>
                        <p className="why-choose-four__item__text text-white">
                          Deep penetration across modern trade, general trade,
                          and emerging retail formats.
                        </p>
                      </div>
                      <div className="why-choose-four__item">
                        <div className="why-choose-four__item__top">
                          <div className="why-choose-four__item__icon">
                            <Image
                              width={22}
                              height={22}
                              src="/assets/images/shapes/icon-04.png"
                              alt="response"
                            />
                          </div>
                          <h3 className="why-choose-four__item__title">
                            E-commerce <br /> Distribution
                          </h3>
                        </div>
                        <p className="why-choose-four__item__text text-white">
                          Seamless integration with major online marketplaces
                          and D2C fulfillment solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 wow fadeInUp" data-wow-delay="100ms">
                  <div
                    className="why-choose-four__right"
                    style={{ height: "100%", marginTop: 0 }}
                  >
                    <div
                      className="why-choose-four__img mx-auto"
                      style={{ width: "100%", height: "80%" }}
                    >
                      <img
                        src="\assets\distributor-img\what-we-offer-nagpur.jpg"
                        alt="why-choose-us"
                        style={{
                          objectPosition: "right center",
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* testimonials */}
        <Testimonials />

        {/* Form */}
        <section className="contact-one">
          <div
            className="contact-one__bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/contact-1-bg.jpg)",
            }}
          ></div>
          <div className="contact-one__overlay"></div>
          <div className="container">
            <div className="contact-one__wrapper">
              <div className="row">
                <div className="col-xl-6">
                  <div className="sec-title text-left">
                    <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                      Contact With Us
                    </div>

                    <h3 className="sec-title__title bw-split-in-up">
                      Feel Free to <br />
                      <span> Write Us Anytime</span>{" "}
                    </h3>
                  </div>
                  <div className="contact-one__content">
                    <div
                      className="contact-one__content__bg bw-img-anim-left"
                      style={{
                        backgroundImage:
                          "url(assets/images/resources/contact-1-1.jpg)",
                      }}
                    ></div>
                    <ul className="list-unstyled contact-one__info">
                      <li className="contact-one__info__item">
                        <div className="contact-one__info__icon">
                          <i className="icon-telephone-call-1"></i>
                          <span className="contact-one__info__icon__zoom">
                            <i className="icon-telephone-call-1"></i>
                          </span>
                        </div>
                        <div className="contact-one__info__content">
                          <p className="contact-one__info__text">
                            <a href="tel:+9238008060">+92 3800 8060</a>
                            <br />
                            <a href="tel:+2195550114">+21 9555-0114</a>
                          </p>
                        </div>
                      </li>
                      <li className="contact-one__info__item">
                        <div className="contact-one__info__icon">
                          <i className="icon-glove"></i>
                          <span className="contact-one__info__icon__zoom">
                            <i className="icon-glove"></i>
                          </span>
                        </div>
                        <div className="contact-one__info__content">
                          <p className="contact-one__info__text">
                            <a href="mailto:mitc@example.com">
                              mitc@example.com
                            </a>
                            <br />
                            <a href="www.website.com">www.website.com</a>
                          </p>
                        </div>
                      </li>
                      <li className="contact-one__info__item">
                        <div className="contact-one__info__icon">
                          <i className="icon-map-pin"></i>
                          <span className="contact-one__info__icon__zoom">
                            <i className="icon-map-pin"></i>
                          </span>
                        </div>
                        <div className="contact-one__info__content">
                          <p className="contact-one__info__text">
                            3891 Ranchview Dr. Richardson, <br /> California
                            62639
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
                  <form
                    className="contact-one__form contact-form-validated form-one"
                    action="inc/sendemail.php"
                  >
                    <div className="contact-one__form__bg-one"></div>
                    <div className="contact-one__form__bg-two"></div>
                    <div className="form-one__group">
                      <div className="form-one__control form-one__control--full">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-one__control form-one__control--full">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-one__control form-one__control--full">
                        <input
                          id="phone"
                          type="text"
                          name="phone"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="form-one__control form-one__control--full">
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="form-one__control form-one__control--full">
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="form-one__control form-one__control--full">
                        <button type="submit" className="procounsel-btn">
                          <i>Send Message</i>
                          <span>Send Message</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        <div className="search-popup__content">
          <form
            role="search"
            method="get"
            className="search-popup__form"
            action="#"
          >
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="procounsel-btn"
            >
              <i>
                <i className="icon-search"></i>
              </i>
              <span>
                <i className="icon-search"></i>
              </span>
            </button>
          </form>
        </div>
      </div>

      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <span className="scroll-to-top__text">back top</span>
        <span className="scroll-to-top__wrapper">
          <span className="scroll-to-top__inner"></span>
        </span>
      </a>
    </>
  );
}
