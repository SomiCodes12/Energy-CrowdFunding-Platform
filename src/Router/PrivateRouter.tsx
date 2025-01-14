import jwtDecode from "jwt-decode";
import React, { PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onUserState } from "../global/globalState";
import { Navigate } from "react-router-dom";

const PrivateRouter: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    const decode = jwtDecode(user);
    if (user) {
      dispatch(onUserState(decode));
    }
  }, []);

  return <div>{user ? <div>{children}</div> : <Navigate to={`/login`} />}</div>;
};

export default PrivateRouter;
