import * as types from "./ActionTypes";
import axios from "axios";


export const setLoader = (data) => ({
  type: types.LOADER,
  payload: data,
});
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
export const getDoctorInfo = (data) => ({
  type: types.GET_DOCTORINFO,
  payload: data,
});
export const getServices = (data) => ({
  type: types.GET_SERVICES,
  payload: data,
});
export const getClinicInfo = (data) => ({
    type: types.GET_CLINICINFO,
    payload: data,
  });
  export const getGallery = (data) => ({
    type: types.GET_GALLERY,
    payload: data,
  });
  export const getBlog = (data) => ({
    type: types.GET_BLOG,
    payload: data,
  });
export const addAppointmentInitiate = (
  data,
  notify
) => {
  return (dispatch) => {
    axios
      .post("http://3.142.172.158:8000/api/addAppointment", data)
      .then((response) => {
        notify("success");
        dispatch(setAppointment(response.data));        
      })
      .catch((err) => {
        notify("error");
      });
  };
};

export const getSliderInitiate = () => {
  return (dispatch) => {
    dispatch(setLoader(true));
    axios
      .get("http://3.142.172.158:8000/api/getSliderImage")
      .then((response) => {
        dispatch(getSlider(response.data));
        dispatch(setLoader(false));

      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getAboutInfoInitiate = () => {

  return (dispatch) => {
    dispatch(setLoader(true));

    axios
      .get("http://3.142.172.158:8000/api/getAboutInfo")
      .then((response) => {
        dispatch(getAboutInfo(response.data));
        dispatch(setLoader(false));

      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getDoctorInfoInitiate = () => {
  return (dispatch) => {
    axios
      .get("http://3.142.172.158:8000/api/getDoctorList")
      .then((response) => {
        dispatch(getDoctorInfo(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getServicesInitiate = () => {
  return (dispatch) => {
    axios
      .get("http://3.142.172.158:8000/api/getService")
      .then((response) => {
        dispatch(getServices(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getClinicInfoInitiate = () => {
    return (dispatch) => {
      axios
        .get("http://3.142.172.158:8000/api/getClinicData")
        .then((response) => {
          dispatch(getClinicInfo(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const getGalleryInitiate = () => {
    return (dispatch) => {
      axios
        .get("http://3.142.172.158:8000/api/getGalleryImage")
        .then((response) => {
          dispatch(getGallery(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const getBlogInitiate = () => {
    return (dispatch) => {
      axios
        .get("http://3.142.172.158:8000/api/getBlog")
        .then((response) => {
          dispatch(getBlog(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };