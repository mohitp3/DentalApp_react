import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryInitiate } from "../../redux/Actions";

const Gallery = () => {
  const { gallery } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGalleryInitiate());
  }, [dispatch]);
  return (
    <section id="gallery" className="bg-lighter">
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
                <div className="section-content">
                  <div className="row">
                    {gallery &&
                      gallery.length > 0 &&
                      gallery.map((item, index) => (
                        <div className="col-sm-6 col-md-4" key={item._id}>
                          <div
                            className="gallery-item design"
                            style={{ width: "100%", marginTop: "10px" }}
                          >
                            <div className="thumb">
                              <img
                                className="img-fullwidth"
                                src={"http://3.142.172.158:8000/" + item.imgUrl}
                                alt="project"
                              />
                              <div className="overlay-shade"></div>
                              <div className="text-holder">
                                <div className="title text-center">
                                  {item.title}
                                </div>
                              </div>
                              <div className="icons-holder">
                                <div className="icons-holder-inner">
                                  <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                                    <a
                                      href="images/gallery/full/1.jpg"
                                      data-lightbox-gallery="gallery"
                                      title={item.title}
                                    >
                                      <i className="fa fa-picture-o"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
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
