import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClinicInfoInitiate } from "../../redux/Actions";
import CountUp from "react-countup";

const ClinicInfo = () => {
  const { clinicInfo } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClinicInfoInitiate());
  }, [dispatch]);
  return (
    <section
      id="clinicInfo"
      className="divider parallax layer-overlay overlay-white-8"
      data-bg-img="images/bg/bg5.jpg"
      style={{
        backgroundImage: "url(images/bg/bg5.jpg)",
        backgroundPosition: "center",
      }}
    >
      <div className="container pb-50">
        <div className="section-content">
          {clinicInfo &&
            clinicInfo.map((item) => (
              <div className="row" key={item._id}>
                <div className="col-xs-12 col-sm-6 col-md-3 mb-50">
                  <div className="funfact text-center">
                    <i className="flaticon-medical-male100 text-theme-colored"></i>
                    <h2 className="  font-38 appeared">
                      <CountUp start={0} end={item.dentists} duration={10} />
                    </h2>
                    <h5 className="text-uppercase mb-0">
                      Professional Dentists
                    </h5>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 mb-50">
                  <div className="funfact text-center">
                    <i className="flaticon-medical-family21 text-theme-colored"></i>
                    <h2 className="  font-38 appeared">
                      <CountUp start={0} end={item.patients} duration={3} />
                    </h2>
                    <h5 className="text-uppercase mb-0">Setisfied Patient</h5>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 mb-50">
                  <div className="funfact text-center">
                    <i className="flaticon-medical-hospital17 text-theme-colored"></i>
                    <h2 className="  font-38 appeared">
                      <CountUp start={0} end={item.rooms} duration={3} />
                    </h2>
                    <h5 className="text-uppercase mb-0">Hospital Rooms</h5>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 mb-50">
                  <div className="funfact text-center">
                    <i className="flaticon-medical-hospital36 text-theme-colored"></i>
                    <h2 className="  font-38 appeared">
                      <CountUp start={0} end={item.machines} duration={3} />
                    </h2>
                    <h5 className="text-uppercase mb-0">Our Machines</h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicInfo;
