import * as types from "./ActionTypes";

const initialState = {
  appointments: [],
  sliderImages:[],
  aboutInfo:[]
};

const dentalReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
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

    default:
      return state;
  }
};

export default dentalReducer;
