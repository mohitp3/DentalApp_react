import React from "react";

const Gallery = () => {
  return (
    <section className="bg-lighter">
      <div className="container">
        <div className="section-title text-center mt-0">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h2 className="mt-0 line-height-1">
                Our <span className="text-theme-colored">Gallery</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                autem
              </p>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio-filter text-center">
                <a href="#" className="active" data-filter="*">
                  All
                </a>
                <a href="#branding" className="" data-filter=".branding">
                  Checkup
                </a>
                <a href="#design" className="" data-filter=".design">
                  Whitening
                </a>
                <a href="#photography" className="" data-filter=".photography">
                  Whitening
                </a>
              </div>

              <div
                className="gallery-isotope default-animation-effect grid-3 gutter-small clearfix"
                data-lightbox="gallery"
                style={{ position: "relative", height: "774.798px" }}
              >
                <div
                  className="gallery-item design"
                  style={{ position: "absolute", left: "0px", top: "0px" }}
                >
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/gallery/1.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="text-holder">
                      <div className="title text-center">Sample Title</div>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            href="images/gallery/full/1.jpg"
                            data-lightbox-gallery="gallery"
                            title="Your Title Here"
                          >
                            <i className="fa fa-picture-o"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="gallery-item branding photography"
                  style={{ position: "absolute", left: "379px", top: "0px" }}
                >
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/gallery/2.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="text-holder">
                      <div className="title text-center">Sample Title</div>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            href="images/gallery/full/2.jpg"
                            data-lightbox-gallery="gallery"
                            title="Your Title Here"
                          >
                            <i className="fa fa-picture-o"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="gallery-item design"
                  style={{ position: "absolute", left: "759px", top: "0px" }}
                >
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/gallery/3.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="text-holder">
                      <div className="title text-center">Sample Title</div>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            href="images/gallery/full/3.jpg"
                            data-lightbox-gallery="gallery"
                            title="Your Title Here"
                          >
                            <i className="fa fa-picture-o"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="gallery-item branding"
                  style={{ position: "absolute", left: "0px", top: "258px" }}
                >
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/gallery/4.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="text-holder">
                      <div className="title text-center">Sample Title</div>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            href="images/gallery/full/4.jpg"
                            data-lightbox-gallery="gallery"
                            title="Your Title Here"
                          >
                            <i className="fa fa-picture-o"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="gallery-item design photography"
                  style={{ position: "absolute", left: "379px", top: "258px" }}
                >
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/gallery/5.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="text-holder">
                      <div className="title text-center">Sample Title</div>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            href="images/gallery/full/5.jpg"
                            data-lightbox-gallery="gallery"
                            title="Your Title Here"
                          >
                            <i className="fa fa-picture-o"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="gallery-item photography"
                  style={{ position: "absolute", left: "759px", top: "258px" }}
                >
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/gallery/6.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="text-holder">
                      <div className="title text-center">Sample Title</div>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            href="images/gallery/full/6.jpg"
                            data-lightbox-gallery="gallery"
                            title="Your Title Here"
                          >
                            <i className="fa fa-picture-o"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="gallery-item branding"
                  style={{ position: "absolute", left: "0px", top: "516px" }}
                >
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/gallery/7.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="text-holder">
                      <div className="title text-center">Sample Title</div>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            href="images/gallery/full/7.jpg"
                            data-lightbox-gallery="gallery"
                            title="Your Title Here"
                          >
                            <i className="fa fa-picture-o"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="gallery-item photography"
                  style={{ position: "absolute", left: "379px", top: "516px" }}
                >
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/gallery/8.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="text-holder">
                      <div className="title text-center">Sample Title</div>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            href="images/gallery/full/8.jpg"
                            data-lightbox-gallery="gallery"
                            title="Your Title Here"
                          >
                            <i className="fa fa-picture-o"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="gallery-item branding"
                  style={{ position: "absolute", left: "759px", top: "516px" }}
                >
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/gallery/9.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="text-holder">
                      <div className="title text-center">Sample Title</div>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            href="images/gallery/full/9.jpg"
                            data-lightbox-gallery="gallery"
                            title="Your Title Here"
                          >
                            <i className="fa fa-picture-o"></i>
                          </a>
                        </div>
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

export default Gallery;
