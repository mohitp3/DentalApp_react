import * as types from "./ActionTypes";
import axios from "axios";

export const setAppointment = (data) => ({
  type: types.SET_APPOINTMENT,
  payload: data,
});
export const getSlider = (data) => ({
  type: types.GET_SLIDERiMAGE,
  payload: data,
});
export const getAboutInfo = (data) => ({
    type: types.GET_ABOUTINFO,
    payload: data,
  });

export const addAppointmentInitiate = (
  name,
  email,
  appointmentDate,
  message
) => {
  return (dispatch) => {
    axios
      .post("https://dentalapp-nodebackend.herokuapp.com/api/addAppointment", {
        name,
        email,
        appointmentDate,
        message,
      })
      .then((response) => {
        dispatch(setAppointment(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getSliderInitiate = () => {
  return (dispatch) => {
    axios
      .get("https://dentalapp-nodebackend.herokuapp.com/api/getSliderImage")
      .then((response) => {
        dispatch(getSlider(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getAboutInfoInitiate = () => {
    return (dispatch) => {
      axios
        .get("https://dentalapp-nodebackend.herokuapp.com/api/getAboutInfo")
        .then((response) => {
          dispatch(getAboutInfo(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
