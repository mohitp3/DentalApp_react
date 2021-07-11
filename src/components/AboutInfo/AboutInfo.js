import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAboutInfoInitiate } from "../../redux/Actions";
import Slide from '@material-ui/core/Slide';


const AboutInfo = () => {
  const { aboutInfo } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAboutInfoInitiate());
  }, [dispatch]);
  return (
    <section>
      <div className="container">
        <div className="section-content">
          <div
            className="row equal-height-inner"
            data-margin-top="-150px"
            style={{ marginTop: "-150px" }}
          >
            {aboutInfo &&
              aboutInfo.map((item, index) => (
                <Slide key={item._id} in={true} direction="right" easing={{ enter: 5}} timeout={{ enter: 700}}> 
                  <div
                  
                  className="col-sm-12 col-md-3 pl-0 pl-sm-15 pr-0 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay1"
                  style={{ minHeight: "16.36em", visibility: "visible" }}
                >
                  <div
                    className="sm-height-auto bg-theme-colored"
                    style={{ minHeight: "229.04px" }}
                  >
                    <div className="text-center pt-30 pb-sm-30">
                      <div className="icon-box text-center">
                        <a
                          className="icon bg-silver-light icon-circled"
                          href="#"
                        >
                          {" "}
                          <i className={item.icon}></i>{" "}
                        </a>
                        <h3 className="text-white">{item.title}</h3>
                        <p className="text-white">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                </Slide>
                
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
