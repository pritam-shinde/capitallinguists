import React from 'react'

const Testimonials = () => {
    return (
        <section className="testimonials-one" id="testimonial">
            <div
                className="testimonials-one__bg"
                style={{
                    backgroundImage:
                        "url(assets/images/shapes/testimonials-1-bg.png)",
                }}
            ></div>
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                        Testimonials
                    </div>

                    <h3 className="sec-title__title bw-split-in-up">
                        See What They Are <br />
                        <span>Talking About?</span>
                    </h3>
                </div>
                <div
                    className="testimonials-one__carousel procounsel-owl__carousel  procounsel-owl__carousel--basic-nav owl-carousel"
                    data-owl-options='{
				"items": 1,
				"margin": 30,
				"loop": false,
				"smartSpeed": 700,
				"nav": false,
				"navText": ["<span>Prev</span>","<span>Next</span>"],
				"dots": false,
				"autoplay": false,
				"responsive": {
					"0": {
						"items": 1
					},
					"768": {
						"items": 2
					},
					"992": {
						"items": 3
					}
				}
			}'
                >
                    <div className="item">
                        <div
                            className="testimonials-card wow fadeInUp"
                            data-wow-duration="1500ms"
                            data-wow-delay="000ms"
                        >
                            <div
                                className="testimonials-card__bg"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/testi-card-bg-1-1.jpg)",
                                }}
                            ></div>
                            <div className="testimonials-card__top">
                                <div className="testimonials-card__image bw-img-anim-right">
                                    <img
                                        src="/assets/capital-img/testi-1-1.jpg"
                                        alt="Alen Martin"
                                    />
                                </div>
                                <div className="testimonials-card__content">
                                    <div className="testimonials-card__quote">
                                        <i className="icon-quote"></i>
                                        <i className="icon-quote"></i>
                                    </div>
                                    <h3 className="testimonials-card__name">Alen Martin</h3>
                                    <p className="testimonials-card__designation">Customer</p>
                                    <div className="testimonials-card__rating">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonials-card__desc">
                                There are many variations passages to luck of Loem Ipsum
                                available to but the majority have live by injected humour,
                                suffered alteration in
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="testimonials-card wow fadeInUp"
                            data-wow-duration="1500ms"
                            data-wow-delay="100ms"
                        >
                            <div
                                className="testimonials-card__bg"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/testi-card-bg-1-1.jpg)",
                                }}
                            ></div>
                            <div className="testimonials-card__top">
                                <div className="testimonials-card__image bw-img-anim-right">
                                    <img
                                        src="/assets/capital-img/testi-1-2.jpg"
                                        alt="Hena Wiano"
                                    />
                                </div>
                                <div className="testimonials-card__content">
                                    <div className="testimonials-card__quote">
                                        <i className="icon-quote"></i>
                                        <i className="icon-quote"></i>
                                    </div>
                                    <h3 className="testimonials-card__name">Hena Wiano</h3>
                                    <p className="testimonials-card__designation">Customer</p>
                                    <div className="testimonials-card__rating">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonials-card__desc">
                                There are many variations passages to luck of Loem Ipsum
                                available to but the majority have live by injected humour,
                                suffered alteration in
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="testimonials-card wow fadeInUp"
                            data-wow-duration="1500ms"
                            data-wow-delay="200ms"
                        >
                            <div
                                className="testimonials-card__bg"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/testi-card-bg-1-1.jpg)",
                                }}
                            ></div>
                            <div className="testimonials-card__top">
                                <div className="testimonials-card__image bw-img-anim-right">
                                    <img
                                        src="/assets/capital-img/testi-1-3.jpg"
                                        alt="Keli Wiliam"
                                    />
                                </div>
                                <div className="testimonials-card__content">
                                    <div className="testimonials-card__quote">
                                        <i className="icon-quote"></i>
                                        <i className="icon-quote"></i>
                                    </div>
                                    <h3 className="testimonials-card__name">Keli Wiliam</h3>
                                    <p className="testimonials-card__designation">Customer</p>
                                    <div className="testimonials-card__rating">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonials-card__desc">
                                There are many variations passages to luck of Loem Ipsum
                                available to but the majority have live by injected humour,
                                suffered alteration in
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="testimonials-card wow fadeInUp"
                            data-wow-duration="1500ms"
                            data-wow-delay="300ms"
                        >
                            <div
                                className="testimonials-card__bg"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/testi-card-bg-1-1.jpg)",
                                }}
                            ></div>
                            <div className="testimonials-card__top">
                                <div className="testimonials-card__image bw-img-anim-right">
                                    <img
                                        src="assets/images/resources/testi-1-1.jpg"
                                        alt="Alice Genesis"
                                    />
                                </div>
                                <div className="testimonials-card__content">
                                    <div className="testimonials-card__quote">
                                        <i className="icon-quote"></i>
                                        <i className="icon-quote"></i>
                                    </div>
                                    <h3 className="testimonials-card__name">Alice Genesis</h3>
                                    <p className="testimonials-card__designation">Customer</p>
                                    <div className="testimonials-card__rating">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonials-card__desc">
                                There are many variations passages to luck of Loem Ipsum
                                available to but the majority have live by injected humour,
                                suffered alteration in
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="testimonials-card wow fadeInUp"
                            data-wow-duration="1500ms"
                            data-wow-delay="000ms"
                        >
                            <div
                                className="testimonials-card__bg"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/testi-card-bg-1-1.jpg)",
                                }}
                            ></div>
                            <div className="testimonials-card__top">
                                <div className="testimonials-card__image bw-img-anim-right">
                                    <img
                                        src="assets/images/resources/testi-1-2.jpg"
                                        alt="Alen Martin"
                                    />
                                </div>
                                <div className="testimonials-card__content">
                                    <div className="testimonials-card__quote">
                                        <i className="icon-quote"></i>
                                        <i className="icon-quote"></i>
                                    </div>
                                    <h3 className="testimonials-card__name">Alen Martin</h3>
                                    <p className="testimonials-card__designation">Customer</p>
                                    <div className="testimonials-card__rating">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonials-card__desc">
                                There are many variations passages to luck of Loem Ipsum
                                available to but the majority have live by injected humour,
                                suffered alteration in
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="testimonials-card wow fadeInUp"
                            data-wow-duration="1500ms"
                            data-wow-delay="100ms"
                        >
                            <div
                                className="testimonials-card__bg"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/testi-card-bg-1-1.jpg)",
                                }}
                            ></div>
                            <div className="testimonials-card__top">
                                <div className="testimonials-card__image bw-img-anim-right">
                                    <img
                                        src="assets/images/resources/testi-1-3.jpg"
                                        alt="Hena Wiano"
                                    />
                                </div>
                                <div className="testimonials-card__content">
                                    <div className="testimonials-card__quote">
                                        <i className="icon-quote"></i>
                                        <i className="icon-quote"></i>
                                    </div>
                                    <h3 className="testimonials-card__name">Hena Wiano</h3>
                                    <p className="testimonials-card__designation">Customer</p>
                                    <div className="testimonials-card__rating">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonials-card__desc">
                                There are many variations passages to luck of Loem Ipsum
                                available to but the majority have live by injected humour,
                                suffered alteration in
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials