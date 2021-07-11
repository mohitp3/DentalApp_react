import React from "react";

const DoctorInfo = (props) => {
  const {doctorInfo} = props;
  return (
    <div>
    {doctorInfo && doctorInfo.length > 0 && doctorInfo.map((item,index)=>{
      if(index == 0){
          return (
            <div className="col-md-8" key={item._id}>
            <h2 className="text-theme-colored2 mb-0">{item.name}</h2>
            <p className="text-gray-aaa">{item.expertise}</p>
            <h2 className="mt-0">
              {item.aboutTitle}
            </h2>
            <p className="lead">
              {item.aboutDescription}
            </p>
      
            <div className="row mb-sm-30">
              {item.speciality && item.speciality.map((spec,ind) =>(
                <div className="col-sm-6 col-md-6" key={ind}>
                <div className="icon-box icon-left">
                  <a
                    className="icon bg-theme-colored icon-circled icon-border-effect effect-circled pull-left flip sm-pull-none"
                    href="#"
                  >
                    <i className={spec.icon}></i>
                  </a>
                  <h4 className="icon-box-title mt-10">{spec.title}</h4>
                  <p>{spec.description}</p>
                </div>
              </div>

              ))}
              
            </div>
          </div>
          )
      }


    })}
      </div>
    
  );
};

export default DoctorInfo;
