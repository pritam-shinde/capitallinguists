import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials-one" id="testimonial">
      <div
        className="testimonials-one__bg"
        style={{
          backgroundImage: "url(assets/images/shapes/testimonials-1-bg.png)",
        }}
      ></div>
      <div className="container">
        <div className="sec-title text-center">
          <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
            Great Reviews For Our Services
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
                  backgroundImage: "url(assets/images/testi-card-bg-1-1.jpg)",
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
                  <h3 className="testimonials-card__name">Chandler Reed</h3>
                  <p className="testimonials-card__designation">
                    Executive Admin
                  </p>
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
                Capital Linguists is a top Language Translation Agency ever.
                They have the best interpreters and were extremely professional
                and responsive to our needs, even after hours and on weekends.
                Fancy interpreting equipment. Can’t wait to work with them
                again.
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
                  backgroundImage: "url(assets/images/testi-card-bg-1-1.jpg)",
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
                  <h3 className="testimonials-card__name">Charles Randolph</h3>
                  <p className="testimonials-card__designation">
                    Office Manager
                  </p>
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
                Great experience with Capital Linguists Language Translation
                Agency from start to finish. They found me an excellent
                interpreter who did his job to everyone’s satisfaction. The
                project manager was also quite accessible.
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
                  backgroundImage: "url(assets/images/testi-card-bg-1-1.jpg)",
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
                  <h3 className="testimonials-card__name">Salvador Sanchez</h3>
                  <p className="testimonials-card__designation">Attorney</p>
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
                Best translation agency I’ve ever done business with! They
                responded to my inquiry promptly, did an amazing job of
                Portuguese translation, and finished it well before the
                deadline.
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
                  backgroundImage: "url(assets/images/testi-card-bg-1-1.jpg)",
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
                Capital Linguists was awesome. Our interpreter was very
                professional and both parties were very appreciative of our
                meeting. The project manager was so efficient in setting us up
                with our interpreter. Very highly recommended.
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
                  backgroundImage: "url(assets/images/testi-card-bg-1-1.jpg)",
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
                  backgroundImage: "url(assets/images/testi-card-bg-1-1.jpg)",
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
        <div className="d-flex">
          <a href="#" className="procounsel-btn mt-4 m-auto">
            <i>View More</i>
            <span>View More</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
