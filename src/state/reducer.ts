import { Action, IState } from "../types";

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "STORE_LOCAL_STORAGE":
      return { ...state, users: action.payload };

    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    case "LOGIN":
      return { ...state, loggedInUser: action.payload };

    case "LOGOUT":
      return { ...state, loggedInUser: null };

    case "ADD_INVOICE": {
      if (!state.loggedInUser) return state;
      const updatedUser = {
        ...state.loggedInUser,
        invoices: [...state.loggedInUser.invoices, action.payload],
      };
      return { ...state, loggedInUser: updatedUser };
    }
    case "SET_CURRENT_INVOICE": {
      if (!state.loggedInUser) return state;
      return {
        ...state,
        loggedInUser: { ...state.loggedInUser, currentInvoice: action.payload },
      };
    }

    default:
      return state;
  }
};
export default reducer;
