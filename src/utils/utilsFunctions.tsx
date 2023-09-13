import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store";

export default function ProtectedRoutes() {
  const user = useSelector((state: RootState) => state.userSlice.user);
  // const user = true;
  return user ? <Outlet /> : <Navigate to="/login" />;
}

