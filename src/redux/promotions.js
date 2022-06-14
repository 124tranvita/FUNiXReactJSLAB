import * as ActionType from "./ActionTypes";

export const Promotions = (
  state = {
    isLoading: true,
    errorMess: null,
    promotions: [],
  },
  action
) => {
  switch (action.type) {
    case ActionType.ADD_PROMOS:
      return {
        ...state,
        isLoading: false,
        errorMess: null,
        promotions: action.payload,
      };
    case ActionType.PROMOS_LOADING:
      return { ...state, isLoading: true, errorMess: null, promotions: [] };
    case ActionType.PROMOS_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMess: action.payload,
        promotions: [],
      };
    default:
      return state;
  }
};
