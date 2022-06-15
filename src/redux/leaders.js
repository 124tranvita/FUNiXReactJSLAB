import * as ActionType from "./ActionTypes";

export const Leaders = (
  state = {
    isLoading: true,
    errorMess: null,
    leaders: [],
  },
  action
) => {
  switch (action.type) {
    case ActionType.ADD_LEADER:
      return {
        ...state,
        isLoading: false,
        errorMess: null,
        leaders: action.payload,
      };
    case ActionType.LEADERS_LOADING:
      return { ...state, isLoading: true, errorMess: null, leaders: [] };
    case ActionType.LEADERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMess: action.payload,
        leaders: [],
      };
    default:
      return state;
  }
};
