const toastReducer = (
  state = {
    shown: false,
    level: '',
    message: ''
  },
  action
) => {
  switch (action.type) {
    case 'SHOW_TOAST':
      return {
        ...state,
        shown: true,
        ...action.toastProps
      };
    case 'HIDE_TOAST':
      return {
        ...state,
        shown: false
      };
    default:
      return state;
  }
};

export default toastReducer;
