import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store";

export default function ProtectedRoutes() {
  const user = useSelector((state: RootState) => state.userSlice.user);
  // const user = true;
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export const SendToHomePage = () => {
  const user = useSelector((state: RootState) => state.userSlice.user.token.length > 5);

  return user ? <Outlet /> : <Navigate to="/" />;
};
