import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store";
import { formatDistanceToNow } from "date-fns";
import PostProductSucessPage from "../newPages/PostProductSucesssPage/PostProductSucessPage";
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
  if(user?.isVendor == "pending") {
    return <PendingVendor />
  } else {
    return <Navigate to="/" />
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

export const transformsImageStrings = (products: any) => {
  // Create a new array to store modified products
  const transformedProducts: any = [];

  // Iterate over each product in the original array
  products.forEach((element: any) => {
    // Clone the original product to avoid modifying it directly
    const modifiedProduct = { ...element };

    const { data } = modifiedProduct.productImage;

    // Convert the data array to a Uint8Array
    const uint8Array: any = new Uint8Array(data);

    // Convert Uint8Array to Base64
    const base64String = btoa(String.fromCharCode.apply(null, uint8Array));

    // Update the productImage property in the cloned product
    modifiedProduct.productImage = base64String;

    // Add the modified product to the new array
    transformedProducts.push(modifiedProduct);
  });

  // Return the new array with modified products
  return transformedProducts;
};
