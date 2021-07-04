import React from "react";
import MaximSlider from "./MaximSlider";
import SliderDisplayTable from "./SliderDisplayTable";


const Slider = () => {
  return (
    <section
      id="home"
      className="divider parallax layer-overlay overlay-white-5"
      style={{backgroundPosition: "50% 59px"}}
    >
      <MaximSlider/>
      <SliderDisplayTable />
    </section>
  );
};

export default Slider;
