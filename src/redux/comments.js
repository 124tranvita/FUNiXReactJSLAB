import * as ActionType from "./ActionTypes";

export const Comments = (
  state = {
    errMess: null,
    comments: [],
  },
  action
) => {
  switch (action.type) {
    case ActionType.ADD_COMMENTS:
      return {
        ...state,
        isLoading: false,
        errorMess: null,
        comments: action.payload,
      };

    case ActionType.COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMess: action.payload,
        comments: [],
      };

    case ActionType.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.comments.length;
      comment.data = new Date().toISOString();
      return { ...state, comments: state.comments.concat(comment) };
    default:
      return state;
  }
};
