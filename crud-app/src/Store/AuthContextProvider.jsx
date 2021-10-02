import React, { useState } from "react";

const initialState = {
  email: "",
  password: "",
  isLogin: false,
  isAdmin: false,
};

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
  const [LoginUser, setLoginUser] = useState(initialState);
  return (
    <AuthContext.Provider value={[LoginUser, setLoginUser]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
