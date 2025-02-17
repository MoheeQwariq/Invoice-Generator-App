import { createContext, useReducer, useContext, useEffect } from "react";
import { IState } from "../types";
import reducer from "../state";

const initialState: IState = {
  users: JSON.parse(localStorage.getItem("users") || "[]"),
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser") || "null"),
};

export const UserContext = createContext<
  { state: IState; dispatch: React.Dispatch<any> } | undefined
>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state.users));
    if (state.loggedInUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(state.loggedInUser));
    } else {
      localStorage.removeItem("loggedInUser");
    }
  }, [state.users, state.loggedInUser]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUserContext must be used within a UserProvider");
  return context;
};
