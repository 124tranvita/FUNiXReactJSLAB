import * as ActionType from "./ActionTypes";

export const Dishes = (
  state = {
    isLoading: true,
    errorMess: null,
    dishes: [],
  },
  action
) => {
  switch (action.type) {
    case ActionType.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errorMess: null,
        dishes: action.payload,
      };
    case ActionType.DISHES_LOADING:
      return { ...state, isLoading: true, errorMess: null, dishes: [] };
    case ActionType.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMess: action.payload,
        dishes: [],
      };

    default:
      return state;
  }
};
