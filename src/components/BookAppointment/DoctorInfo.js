import React from "react";

const DoctorInfo = () => {
  return (
    <div className="col-md-8">
      <h2 className="text-theme-colored2 mb-0">Dr. Corvin Adams</h2>
      <p className="text-gray-aaa">Doctor of Dental Surgery (DDS)</p>
      <h2 className="mt-0">
        A dentist, also known as a dental surgeon, The dentist's supporting team
        aids in providing oral health services.
      </h2>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi
        molestiae autem fugit consectetur dolor ullam illo ipsa numquam, quod
        iusto enim ipsum amet iusto amet consec Lorem ipsum dolor sit amet
      </p>

      <div className="row mb-sm-30">
        <div className="col-sm-6 col-md-6">
          <div className="icon-box icon-left">
            <a
              className="icon bg-theme-colored icon-circled icon-border-effect effect-circled pull-left flip sm-pull-none"
              href="#"
            >
              <i className="flaticon-medical-first32 text-white"></i>
            </a>
            <h4 className="icon-box-title mt-10">Teeth Whitening</h4>
            <p>Lorem ipsum dolor sit amet, consectetur ipsum dolor.</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-6">
          <div className="icon-box icon-left">
            <a
              className="icon bg-theme-colored icon-circled icon-border-effect effect-circled pull-left flip sm-pull-none"
              href="#"
            >
              <i className="flaticon-medical-brush18 text-white"></i>
            </a>
            <h4 className="icon-box-title mt-10">Teeth Cleaning</h4>
            <p>Lorem ipsum dolor sit amet, consectetur ipsum dolor.</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-6">
          <div className="icon-box icon-left">
            <a
              className="icon bg-theme-colored2 icon-circled icon-border-effect effect-circled pull-left flip sm-pull-none"
              href="#"
            >
              <i className="flaticon-medical-microscope13 text-white"></i>
            </a>
            <h4 className="icon-box-title mt-10">Oral surgery</h4>
            <p>Lorem ipsum dolor sit amet, consectetur ipsum dolor.</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-6">
          <div className="icon-box icon-left">
            <a
              className="icon bg-theme-colored2 icon-circled icon-border-effect effect-circled pull-left flip sm-pull-none"
              href="#"
            >
              <i className="flaticon-medical-teeth2 text-white"></i>
            </a>
            <h4 className="icon-box-title mt-10">Quality Brackets</h4>
            <p>Lorem ipsum dolor sit amet, consectetur ipsum dolor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;
