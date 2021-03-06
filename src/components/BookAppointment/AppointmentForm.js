import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { toast } from "react-toastify";

import { addAppointmentInitiate } from "../../redux/Actions";

const AppointmentForm = () => {
  const dispatch = useDispatch();
  const toastConf = {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }
  const notify = (typeofToast) =>{
    if(typeofToast == "success"){
      toast.info("Appointment is scheduled Successfully", toastConf);
    }else{
      toast.error("Appointment couldn't be scheduled , Please Try Again",toastConf );
    }
  }
    
  // const alert = useAlert();
  const { apointments } = useSelector((state) => state.data);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(
    new Date().toISOString().substr(0, 16)
  );
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addAppointmentInitiate({name, email, appointmentDate, message}, notify)
    );
    setName("");
    setEmail("");
    setAppointmentDate(new Date().toISOString().substr(0, 16));
    setMessage("");
  };
  // useEffect(()=>{
  //   alert.success("It's ok now!");
  // },[apointments])
  return (
    <div className="col-md-4">
      <div className="border-3px p-30 pt-10 pb-20 border-theme-colored bg-theme-colored2">
        <h3 className="text-white">Request An Appointment!</h3>
        <p className="text-white mt-0">
          Just make an appointment to get help from our experts
        </p>

        <form
          id="appointment_form_at_home"
          name="appointment_form_at_home"
          className=""
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group mb-10">
                <input
                  id="form_name"
                  name="form_name"
                  className="form-control"
                  type="text"
                  required={true}
                  placeholder="Enter Name"
                  aria-required="true"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group mb-10">
                <input
                  id="form_email"
                  name="form_email"
                  className="form-control required email"
                  type="email"
                  placeholder="Enter Email"
                  aria-required="true"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group mb-10">
                <input
                  name="form_appontment_date"
                  className="form-control required datetime-picker"
                  type="datetime-local"
                  placeholder="Appoinment Date &amp; Time"
                  aria-required="true"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group mb-10">
            <textarea
              name="form_message"
              className="form-control required"
              placeholder="Enter Message"
              rows="4"
              aria-required="true"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group mb-0 mt-20">
            <input
              name="form_botcheck"
              className="form-control"
              type="hidden"
              value=""
            />
            <button
              type="submit"
              className="btn btn-dark btn-theme-colored"
              data-loading-text="Please wait..."
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
