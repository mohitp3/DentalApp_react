import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getSliderInitiate } from "../../redux/Actions";

const MaximSlider = () => {
  const { sliderImages } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSliderInitiate())
    }, [dispatch]);
  return (
    <div className="maximage-slider">
      <div
        id="maximage"
        className="z-index--1 mc-cycle"
        style={{width: "1600px", height:" 340px"}}
      >
        {sliderImages && sliderImages.map((item,ind)=>(
          <div
          key={item._id}
          className="mc-image "
          title=""
          style = {{backgroundImage:'url("https://dentalapp-nodebackend.herokuapp.com/'+ item.imgUrl +'")',backgroundColor:'rgb(0, 0, 0)',position:"absolute",top: "0px", left: "0px", display: "block", zIndex: 3, opacity: 0, width: "1600px", height: "340px"}}
          data-href=""
        ></div>
        ))

        }       
        
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
