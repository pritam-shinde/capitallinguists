"use client";
import AboutLinguists from "@/sections/AboutLinguists";
import Banner from "@/sections/Banner";
import LanguageProvider from "@/sections/LanguageProvider";
import LanguageSupport from "@/sections/LanguageSupport";
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
              <div className="col-md-4 col-12">
                <div className="about-four__img bw-img-anim-left">
                  <img src="assets/images/resources/about-3-1.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-8 col-12">
                <div className="about-four__content">
                  <div className="sec-title text-left">
                    <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                      Services We Offer
                    </div>

                    <h3 className="sec-title__title bw-split-in-up">
                      Translation <span>Services</span>
                    </h3>
                  </div>
                  <p
                    className="about-four__text"
                    style={{ fontWeight: "normal" }}
                  >
                    Is language an obstacle between you and your clients? Let us
                    help you eliminate those challenges. At Capital Linguists,
                    we offer a full range of translation, website localization,
                    and desktop publishing services, ensuring top-notch quality
                    at affordable prices. We have our service headquarters in
                    Washington D.C., New York, NY, and San Francisco, CA. Why
                    use our exceptional translation services?
                  </p>
                  <ul className="list-unstyled about-four__list row">
                    {[
                      "Highly Experienced Translators",
                      "Medical Translation",
                      "Legal Translation",
                      "Certified Translation",
                      "All Documents Edited",
                      "ISO 9001 Registered",
                      "Rapid Response Times",
                      "Over 200 Languages",
                    ].map((i, index) => (
                      <li
                        key={index}
                        className="about-four__item col-lg-6 col-md-12 col-sm-12 col-12"
                      >
                        <i className="icon-check"></i> {i}
                      </li>
                    ))}
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

        {/* 2*/}
        <section className="about-four about-four-about pt-0" id="about">
          <div className="container">
            <div className="row gutter-y-30">
              <div className="col-md-8 col-12">
                <div className="about-four__content">
                  <div className="sec-title text-left">
                    <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                      Services We Offer
                    </div>

                    <h3 className="sec-title__title bw-split-in-up">
                      Interpreting <span>Services</span>
                    </h3>
                  </div>
                  <p className="about-four__text">
                    Our highly trained and certified interpreters specialize in
                    all major language pairs, ready to facilitate communication
                    for any event. We offer conference interpretation services
                    that are perfect for business meetings and official
                    occasions. We provide same-day quotes and can arrange
                    interpreters at short notice. Our highly trained
                    interpreters and technicians work together to support
                    successful events. Benefits of our interpreting services
                    include:
                  </p>
                  <ul className="list-unstyled about-four__list row">
                    {[
                      "Highly Qualified Interpreters",
                      "Five Years Experience Minimum",
                      "Advanced Interpreting Equipment",
                      "Interpreters Available Locally",
                      "Video Remote Interpretation",
                      "Simultaneous Interpreters",
                      "Consecutive Interpreters",
                      "Dedicated Project Manager",
                    ].map((i, index) => (
                      <li
                        key={index}
                        className="about-four__item col-lg-6 col-md-12 col-sm-12 col-12"
                      >
                        <i className="icon-check"></i> {i}
                      </li>
                    ))}
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

              <div className="col-md-4 col-12">
                <div className="about-four__img bw-img-anim-left">
                  <img src="assets/images/resources/about-3-1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3*/}
        <section className="about-four about-four-about pt-0" id="about">
          <div className="container">
            <div className="row gutter-y-30">
              <div className="col-md-4 col-12">
                <div className="about-four__img bw-img-anim-left">
                  <img src="assets/images/resources/about-3-1.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-8 col-12">
                <div className="about-four__content">
                  <div className="sec-title text-left">
                    <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                      Services We Offer
                    </div>

                    <h3 className="sec-title__title bw-split-in-up">
                      Conference <span>Services</span>
                    </h3>
                  </div>
                  <p className="about-four__text">
                    Our professional interpreters and audiovisual technicians
                    offer quality interpreting services and conference support
                    throughout the United States and beyond. For fast, reliable,
                    and professional interpreting, reach out to us today. We
                    ensure outstanding experiences for your audience, fostering
                    positive connections between speakers and listeners. Our
                    interpreters, fluent at native or near-native levels in all
                    their working languages, are ready to assist. With
                    interpreters fluent in their working languages at a native
                    or near-native level, we provide the highest standard of
                    service. We offer a full range of interpreting services:
                  </p>
                  <ul className="list-unstyled about-four__list row">
                    {[
                      "Consecutive Interpreting",
                      "Face to Face Interpreting",
                      "Over-the-Phone Interpreting",
                      "Telephone Interpreting",
                      "Simultaneous Interpreting",
                      "Conference Interpreting",
                      "Onsite Interpreting",
                      "Remote Consecutive Interpreting",
                    ].map((i, index) => (
                      <li
                        key={index}
                        className="about-four__item col-lg-6 col-md-12 col-sm-12 col-12"
                      >
                        <i className="icon-check"></i> {i}
                      </li>
                    ))}
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

        {/* 4 */}
        <section className="about-four about-four-about pt-0" id="about">
          <div className="container">
            <div className="row gutter-y-30">
              <div className="col-md-8 col-12">
                <div className="about-four__content">
                  <div className="sec-title text-left">
                    <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                      Services We Offer
                    </div>

                    <h3 className="sec-title__title bw-split-in-up">
                      Interpreting <span>Equipment</span>
                    </h3>
                  </div>
                  <p className="about-four__text">
                    At Capital Linguists, our translation equipment is tailored
                    to enhance the success of your conferences, events, or
                    meetings. Our world-class interpretation equipment
                    guarantees seamless support for all your translation needs.
                    We provide both portable and fixed options to accommodate
                    every event, including:
                  </p>
                  <ul className="list-unstyled about-four__list row">
                    {[
                      "Transmitters, mixers and CCUS",
                      "Microphones",
                      "Soundproof booths",
                      "PA Systems",
                      "Infrared radiators",
                      "SM interpretation equipment",
                      "Digi-Wave equipment",
                      "Video monitors",
                    ].map((i, index) => (
                      <li
                        key={index}
                        className="about-four__item col-lg-6 col-md-12 col-sm-12 col-12"
                      >
                        <i className="icon-check"></i> {i}
                      </li>
                    ))}
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

              <div className="col-md-4 col-12">
                <div className="about-four__img bw-img-anim-left">
                  <img src="assets/images/resources/about-3-1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*   */}
        <section
          className="team-one"
          style={{ backgroundColor: "var(--procounsel-primary, #19223a)" }}
        >
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
                  style={{ height: "100%", alignItems: "flex-start" }}
                >
                  <div className="service-details__item__icon">
                    <Image
                      width={31}
                      height={31}
                      src="/assets/capital-img/excellence.png"
                      alt="response"
                    />
                    <span className="service-details__item__icon__zoom">
                      <Image
                        width={31}
                        height={31}
                        src="/assets/capital-img/excellence.png"
                        alt="response"
                      />
                    </span>
                  </div>
                  <div className="service-details__item__content">
                    <h4 className="service-details__item__title fw-bold mb-2 text-white">
                      Effective Project Management
                    </h4>

                    <p className="service-details__item__text text-white">
                      Each project is handled by a dedicated project manager who
                      acts as the key point of contact between you and our
                      linguistic/production team, ensuring the successful
                      delivery of translation and interpretation services.
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
                  style={{ height: "100%", alignItems: "flex-start" }}
                >
                  <div className="service-details__item__icon">
                    <Image
                      width={31}
                      height={31}
                      src="/assets/capital-img/market-penetration.png"
                      alt="response"
                    />
                    <span className="service-details__item__icon__zoom">
                      <Image
                        width={31}
                        height={31}
                        src="/assets/capital-img/market-penetration.png"
                        alt="response"
                      />
                    </span>
                  </div>
                  <div className="service-details__item__content">
                    <h4 className="service-details__item__title fw-bold mb-2 text-white">
                      Quality Assurance Checks
                    </h4>

                    <p className="service-details__item__text text-white">
                      Ensuring professional-grade quality is at the heart of our
                      process, with extensive checks on translated content. Our
                      elite TEP (translation, editing, and proofreading)
                      services involve thorough reviews by multiple linguists to
                      ensure consistency and excellence in the final
                      deliverable.
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
                  style={{ height: "100%", alignItems: "flex-start" }}
                >
                  <div className="service-details__item__icon">
                    <Image
                      width={31}
                      height={31}
                      src="/assets/capital-img/partnership.png"
                      alt="response"
                    />
                    <span className="service-details__item__icon__zoom">
                      <Image
                        width={31}
                        height={31}
                        src="/assets/capital-img/partnership.png"
                        alt="response"
                      />
                    </span>
                  </div>
                  <div className="service-details__item__content">
                    <h4 className="service-details__item__title fw-bold mb-2 text-white">
                      Top Caliber
                    </h4>

                    <p className="service-details__item__text text-white">
                      Our team of experienced translators and interpreters
                      provides high-quality services, backed by impressive
                      credentials such as degrees in translation and
                      interpreting, professional certifications, years of
                      experience, and expertise in diverse subjects.
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
                  style={{ height: "100%", alignItems: "flex-start" }}
                >
                  <div className="service-details__item__icon">
                    <Image
                      width={31}
                      height={31}
                      src="/assets/capital-img/growth-focus.png"
                      alt="response"
                    />
                    <span className="service-details__item__icon__zoom">
                      <Image
                        width={31}
                        height={31}
                        src="/assets/capital-img/growth-focus.png"
                        alt="response"
                      />
                    </span>
                  </div>
                  <div className="service-details__item__content">
                    <h4 className="service-details__item__title fw-bold mb-2 text-white">
                      Full Privacy Maintained
                    </h4>

                    <p className="service-details__item__text text-white">
                      Confidentiality is at the heart of what we do. To protect
                      your sensitive information, our team follows strict
                      confidentiality procedures, a commitment that is upheld by
                      our ISO 9001 certification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* team */}
        <Team />

        {/* Why Choose Us  */}
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
                        Why Choose
                        <span> Us</span>
                      </h3>
                      {/* <h4 className="tailored-subtitle font-Merriweather text-white mt-2">
                        End-to-end distribution services tailored to your
                        brand's unique needs
                      </h4> */}
                    </div>

                    <div className="why-choose-four__list">
                      <div className="why-choose-four__item">
                        <div className="why-choose-four__item__top">
                          <div className="why-choose-four__item__icon">
                            {/* <Image
                              width={22}
                              height={22}
                              src="/assets/images/shapes/icon-01.png"
                              alt="response"
                            /> */}
                            <i className="icon-collaboration"></i>
                          </div>
                          <h3 className="why-choose-four__item__title">
                            24×7 Service <br /> Availability.
                          </h3>
                        </div>
                        <p className="why-choose-four__item__text text-white">
                          A unique aspect of the translation and interpreting
                          industry is that needs often sprout up when you least
                          expect them – late on Friday evening, over the
                          weekend, or at the last minute.
                        </p>
                      </div>
                      <div className="why-choose-four__item">
                        <div className="why-choose-four__item__top">
                          <div className="why-choose-four__item__icon">
                            <i className="icon-collaboration"></i>
                          </div>
                          <h3 className="why-choose-four__item__title">
                            Reasonable, Transparent <br /> Pricing
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
                            {/* <Image
                              width={22}
                              height={22}
                              src="/assets/images/shapes/icon-03.png"
                              alt="response"
                            /> */}
                            <i className="icon-collaboration"></i>
                          </div>
                          <h3 className="why-choose-four__item__title">
                            Industry <br /> Expertise.
                          </h3>
                        </div>
                        <p className="why-choose-four__item__text text-white">
                          Our team comprises skilled, certified professionals
                          who specialize in providing high-quality translation
                          and interpretation services across various industries.
                        </p>
                      </div>
                      <div className="why-choose-four__item">
                        <div className="why-choose-four__item__top">
                          <div className="why-choose-four__item__icon">
                            {/* <Image
                              width={22}
                              height={22}
                              src="/assets/images/shapes/icon-04.png"
                              alt="response"
                            /> */}
                            <i className="icon-collaboration"></i>
                          </div>
                          <h3 className="why-choose-four__item__title">
                            Lorem, ipsum. <br /> lorem
                          </h3>
                        </div>
                        <p className="why-choose-four__item__text text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Earum mollitia molestias laborum, tempore ab
                          voluptate.
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
                        src="/assets/capital-img/why-choose-us.jpg"
                        // src="\assets\distributor-img\what-we-offer-nagpur.jpg"
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

        {/* countries section */}
        <LanguageSupport />

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
                      OUR OFFICES
                    </div>

                    <h3 className="sec-title__title bw-split-in-up fs-40">
                      Get In <span> TOUCH?</span>
                    </h3>
                    <p className="testimonials-card__desc">
                      Come and visit our quarters or simply send us an email
                      anytime you want. We are open to all suggestions from our
                      clients.
                    </p>
                  </div>
                  <div className="contact-one__content">
                    <div
                      className="contact-one__content__bg bw-img-anim-left"
                      style={{
                        backgroundImage:
                          "url( /assets/capital-img/contact-section.png)",
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
                            <a href="tel:+9238008060">+1 (612) 817-7744</a>
                            {/* <br />
                            <a href="tel:+2195550114">+21 9555-0114</a> */}
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
                          <p className="contact-one__info__text fs-15">
                            {/* <a href="mailto:info@capitallinguists.com">
                              info@capitallinguists.com
                            </a>
                            <br /> */}
                            <a href="https://capitallinguists.com/">
                              capitallinguists.com
                            </a>
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
                            Silver Spring 13, MD, USA
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
