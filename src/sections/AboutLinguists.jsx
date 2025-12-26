import React from "react";

const AboutLinguists = () => {
    return (
        <section className="about-one" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div
                            className="about-one__image wow fadeInLeft "
                            data-wow-delay="00ms"
                        >
                            <img
                                src="assets/images/resources/about-1-1.png"
                                alt="procounsel"
                            />
                            <img
                                src="assets/images/resources/signature.png"
                                alt=""
                                className="about-one__image__signature"
                            />
                            <div className="about-one__image__left bw-img-anim-right">
                                <img
                                    src="assets/images/resources/about-1-2.png"
                                    alt="procounsel"
                                />
                            </div>
                            <div className="about-one__image__info">
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
                                        Capital Linguists:
                                    </div>

                                    <h3 className="sec-title__title bw-split-in-up">
                                        Any Language. <span>Anywhere. Any Time</span>
                                    </h3>
                                </div>

                                <p className="about-one__content__text">
                                    At Capital Linguists, we understand the importance of clear
                                    communication. That’s why our experts are dedicated to
                                    delivering top-tier translation, interpreting, and
                                    interpretation equipment services.
                                </p>

                                <div className="about-one__content__box">
                                    <div className="about-one__content__box__img bw-img-anim-left">
                                        {/* <img src="assets/images/resources/about-1-3.png" alt="" /> */}
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
                                        <ul className="about-one__content__list">
                                            <li>
                                                <span className="icon-check"></span>Many variations of
                                                passages{" "}
                                            </li>
                                            <li>
                                                <span className="icon-check"></span>Many variations of
                                                passages
                                            </li>
                                            <li>
                                                <span className="icon-check"></span>Expert many
                                                variations teacher{" "}
                                            </li>
                                        </ul>
                                        <a href="#" className="procounsel-btn">
                                            <i>Discover More</i>
                                            <span>Discover More</span>
                                        </a>
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

export default AboutLinguists;
