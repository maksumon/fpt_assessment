export const InitialState = {
  isSignedIn: false,
  hasError: false,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return {
        ...initialState,
        isSignedIn: true,
        hasError: false,
      };
    case 'SIGNIN_ERROR':
      return {
        ...initialState,
        isSignedIn: false,
        hasError: true,
      };
    case 'SIGNOUT':
      return {
        ...initialState,
        isSignedIn: false,
        hasError: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
