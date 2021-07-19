import * as types from "./ActionTypes";

const initialState = {
  appointments: [],
  sliderImages: [],
  aboutInfo: [],
  doctorInfo: [],
  services: [],
  clinicInfo: [],
  gallery:[],
  blogs:[],
  loading:false
};

const dentalReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.LOADER:
      return {
        ...state,
        loading: payload,
      };
    case types.SET_APPOINTMENT:
      return {
        ...state,
        appointments: payload,
      };
    case types.GET_SLIDERiMAGE:
      return {
        ...state,
        sliderImages: payload,
      };
    case types.GET_ABOUTINFO:
      return {
        ...state,
        aboutInfo: payload,
      };
    case types.GET_DOCTORINFO:
      return {
        ...state,
        doctorInfo: payload,
      };
    case types.GET_SERVICES:
      return {
        ...state,
        services: payload,
      };
    case types.GET_CLINICINFO:
      return {
        ...state,
        clinicInfo: payload,
      };
    case types.GET_GALLERY:
      return {
        ...state,
        gallery: payload.images,
      };
      case types.GET_BLOG:
        return {
          ...state,
          blogs: payload,
        };
    default:
      return state;
  }
};

export default dentalReducer;
