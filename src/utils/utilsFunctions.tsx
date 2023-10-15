import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store";

export default function ProtectedRoutes() {
  const user = useSelector((state: RootState) => state.userSlice.user);
  return user ? <Outlet /> : <Navigate to="/signin" />;
}


export const DenyLoginPage = () => {
  const user = useSelector((state: RootState) => state.userSlice.user);

  return !user ? <Outlet /> : <Navigate to="/" />;
};

export const DenySignUpPage = () => {
  const user = useSelector((state: RootState) => state.userSlice.user);

  console.log(user);

  return !user ? <Outlet /> : <Navigate to="/" />;
};
