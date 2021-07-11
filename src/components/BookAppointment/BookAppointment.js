import React,{useEffect} from "react";
import AppointmentForm from "./AppointmentForm";
import DoctorInfo from "./DoctorInfo";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorInfoInitiate } from "../../redux/Actions";

const BookAppointment = () => {
  const { doctorInfo } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorInfoInitiate());
  }, [dispatch]);
  return (
    <section id="about">
      <div className="container pt-0">
        <div className="section-content">
          <div className="row">
            <DoctorInfo doctorInfo={doctorInfo ? doctorInfo : []} />
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
