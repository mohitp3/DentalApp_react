import React from "react";

const MaximSlider = () => {
  return (
    <div className="maximage-slider">
      <div
        id="maximage"
        className="z-index--1 mc-cycle"
        style={{width: "1600px", height:" 340px"}}
      >
        <div
          className="mc-image "
          title=""
          style = {{backgroundImage:'url("images/bg/bg4.jpg")',backgroundColor:'rgb(0, 0, 0)',position:"absolute",top: "0px", left: "0px", display: "block", zIndex: 3, opacity: 0, width: "1600px", height: "340px"}}
          data-href=""
        ></div>
        <div
          className="mc-image "
          title=""
          style = {{backgroundImage:'url("images/bg/bg2.jpg")',backgroundColor:'rgb(0, 0, 0)',position:"absolute",top: "0px", left: "0px", display: "block", zIndex: 4, opacity: 1, width: "1600px", height: "340px"}}
          data-href=""
        ></div>
        <div
          className="mc-image "
          title=""
          style = {{backgroundImage:'url("images/bg/bg3.jpg")',backgroundColor:'rgb(0, 0, 0)',position:"absolute",top: "0px", left: "0px", display: "block", zIndex: 3, opacity: 0, width: "1600px", height: "340px"}}
          data-href=""
        ></div>
      </div>
      <div className="fullscreen-controls">
        {" "}
        <a className="img-prev">
          <i className="pe-7s-angle-left"></i>
        </a>{" "}
        <a className="img-next">
          <i className="pe-7s-angle-right"></i>
        </a>{" "}
      </div>
    </div>
  );
};

export default MaximSlider;
