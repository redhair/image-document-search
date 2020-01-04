const modalReducer = (
  state = {
    open: false,
    content: undefined
  },
  action
) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        open: !state.open
      };
    case 'SET_MODAL_CONTENT':
      return {
        ...state,
        content: action.content
      };
    default:
      return state;
  }
};

export default modalReducer;
