import React,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getSliderInitiate } from "../../redux/Actions";
import "./MaximumSlider.css";

const MaximSlider = () => {
  const { sliderImages } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const[index,setIndex] = useState(0);

    useEffect(()=>{
        const lastIndex = sliderImages.length - 1;
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0)
        }
    },[sliderImages.length, index])
    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index+1)
        },5000);
        return()=>{
            clearInterval(slider)
        }

    },[index])

  useEffect(() => {
    dispatch(getSliderInitiate())
    }, [dispatch]);


    return (
      <div >
              {sliderImages.map((image,imgIndex)=>{

                  let position = "nextSlide"
                  if(imgIndex === index){
                      position= "activeSlide"
                  }
                  if(imgIndex === index - 1 || (index ===0 && imgIndex === sliderImages.length-1)){
                      position="lastSlide"
                  }
                  return <article className = {position} key={imgIndex}>
                      <img src={"http://3.142.172.158:8000/"+ image.imgUrl} alt="banner-img" className="banner-img" />
                  </article>
              })}
              {/* <p className = "prev" onClick={()=>setIndex(index-1)}>
                      <ArrowBackIosIcon/>
              </p>
              <p className = "next" onClick={()=>setIndex(index+1)}>
                      <ArrowForwardIosIcon/>
              </p> */}
          
      </div>
  )
};

export default MaximSlider;
