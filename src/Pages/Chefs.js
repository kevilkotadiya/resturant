import React from 'react'

const Chefs = () => {
    return (
        <div>
            <div>
                <section id="testimonials" className="testimonials section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Testimonials</h2>
                            <p>What they're saying about us</p>
                        </div>
                        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
                                        <h3>Jena Karlis</h3>
                                        <h4>Store Owner</h4>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
                                        <h3>Matt Brandon</h3>
                                        <h4>Freelancer</h4>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                        <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
                                        <h3>John Larson</h3>
                                        <h4>Entrepreneur</h4>
                                    </div>
                                </div>{/* End testimonial item */}
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </section>{/* End Testimonials Section */}
                {/* ======= Gallery Section ======= */}
                <section id="gallery" className="gallery">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Gallery</h2>
                            <p>Some photos from Our Restaurant</p>
                        </div>
                    </div>
                    <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row g-0">
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                        <img src="assets/img/gallery/gallery-1.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-2.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                        <img src="assets/img/gallery/gallery-2.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-3.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                        <img src="assets/img/gallery/gallery-3.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-4.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                        <img src="assets/img/gallery/gallery-4.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-5.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                        <img src="assets/img/gallery/gallery-5.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-6.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                        <img src="assets/img/gallery/gallery-6.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-7.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                        <img src="assets/img/gallery/gallery-7.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-8.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                        <img src="assets/img/gallery/gallery-8.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Gallery Section */}
                {/* ======= Chefs Section ======= */}
                <section id="chefs" className="chefs">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Chefs</h2>
                            <p>Our Proffesional Chefs</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="member" data-aos="zoom-in" data-aos-delay={100}>
                                    <img src="assets/img/chefs/chefs-1.jpg" className="img-fluid" alt />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Walter White</h4>
                                            <span>Master Chef</span>
                                        </div>
                                        <div className="social">
                                            <a href><i className="bi bi-twitter" /></a>
                                            <a href><i className="bi bi-facebook" /></a>
                                            <a href><i className="bi bi-instagram" /></a>
                                            <a href><i className="bi bi-linkedin" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="member" data-aos="zoom-in" data-aos-delay={200}>
                                    <img src="assets/img/chefs/chefs-2.jpg" className="img-fluid" alt />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Sarah Jhonson</h4>
                                            <span>Patissier</span>
                                        </div>
                                        <div className="social">
                                            <a href><i className="bi bi-twitter" /></a>
                                            <a href><i className="bi bi-facebook" /></a>
                                            <a href><i className="bi bi-instagram" /></a>
                                            <a href><i className="bi bi-linkedin" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="member" data-aos="zoom-in" data-aos-delay={300}>
                                    <img src="assets/img/chefs/chefs-3.jpg" className="img-fluid" alt />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>William Anderson</h4>
                                            <span>Cook</span>
                                        </div>
                                        <div className="social">
                                            <a href><i className="bi bi-twitter" /></a>
                                            <a href><i className="bi bi-facebook" /></a>
                                            <a href><i className="bi bi-instagram" /></a>
                                            <a href><i className="bi bi-linkedin" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Chefs
