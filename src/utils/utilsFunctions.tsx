import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store";
import { formatDistanceToNow } from "date-fns";

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

  return !user ? <Outlet /> : <Navigate to="/" />;
};

export function formatNumberToCurrency(number: number) {
  try {
    if (number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  } catch (error) {
    console.log("something went wrong");
  }
}

export function formatRelativeTime(dateString: string) {
  try {
    const parsedDate = new Date(dateString);
    return formatDistanceToNow(parsedDate, { addSuffix: true });
  } catch (error) {
    console.log(error);
  }
}
