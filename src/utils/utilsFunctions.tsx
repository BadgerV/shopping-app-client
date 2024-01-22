import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store";
import { formatDistanceToNow } from "date-fns";
// import PostProductSucessPage from "../newPages/PostProductSucesssPage/PostProductSucessPage";
import PendingVendor from "../newComponents/PendingVendor/PendingVendor";

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

export const NavigateUserToPendingPage = (user: any) => {
  if (user?.isVendor == "pending") {
    return <PendingVendor />;
  } else {
    return <Navigate to="/" />;
  }
};

export const returnLetters = (category: string) => {
  const categoryRevamped =
    category[0].toUpperCase() + category.slice(1).toLowerCase();
  return categoryRevamped;
};

export const navigateTo = (whereT0: string, navigate: any) => {
  navigate(`/${whereT0}`);
};

export const transformsImageStrings = (product: any) => {
  const productReplica = product;

  const imageArray = productReplica.productImage;

  const newImageArray: any = [];

  imageArray.map((data: any) => {
    const buffer = data.data;
    console.log(buffer)
    // Convert the buffer to a base64 string
    // const image  = new Buffer.from(buffer).toString("base64");

    newImageArray.push(image);
  });

  productReplica.productImage = newImageArray;


  return productReplica;
};
