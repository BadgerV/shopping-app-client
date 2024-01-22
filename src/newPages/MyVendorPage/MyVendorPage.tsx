import Header from "../../newComponents/Header/Header";
import "./myVendorPage.css";
import { useState, useEffect } from "react";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { postProduct, resetSuccess } from "../../redux/slice/userSlice";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import FileUpload from "../../utils/FileUploads/FileUpload";

//commenting rubbish to keep up with the kardashians
interface Option {
  value: string;
  label: string;
}

const MyVendorPage = () => {
  return (
    <>
      <Header showElement={false} />
      <div className="myvendor-page">
        <div className="vendor-page_left">
          <div className="vendor-page_right-options">
            <div className="vendor-page_right-option">Post Product</div>
            <div className="vendor-page_right-option">Edit Product</div>
            <div className="vendor-page_right-option">Delete Product</div>
          </div>
        </div>
        <div className="vendor-page_right">
          <form action="" className="vendor-page_right-form">
            <PostProduct />
          </form>
        </div>
      </div>
    </>
  );
};

const PostProduct = () => {
  const isSuccess = useSelector(
    (state: RootState) => state.userSlice.isSuccess
  );

  const [productInfo, setProductInfo] = useState({
    productName: "",
    prodcuDescription: "",
    productPrice: 0,
    productStock: 0,
    productDiscount: 0,
    shippingCost: 0,
    productImage: null,
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const [categoryOption, setCategoryOption] = useState<Option[]>([]);
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    setCategories(categoryOption.map((item) => item.label));
  }, [categoryOption]);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const isLoading = useSelector(
    (state: RootState) => state.userSlice.isLoading
  );

  // Create a new FormData object to send files and other product data
  const formData = new FormData();

  const [focusStates, setFocusStates] = useState(Array(6).fill(false));

  const handleFocus = (index: number) => {
    const updatedFocusStates = [...focusStates];
    updatedFocusStates[index] = true;
    setFocusStates(updatedFocusStates);
  };

  const handleBlur = (index: number) => {
    const updatedFocusStates = [...focusStates];
    updatedFocusStates[index] = false;
    setFocusStates(updatedFocusStates);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    formData.append("name", productInfo.productName);
    formData.append("description", productInfo.prodcuDescription);
    formData.append(
      "originalProductPrice",
      productInfo.productPrice.toString()
    );
    formData.append("stock", productInfo.productStock.toString());
    formData.append("productDiscount", productInfo.productDiscount.toString());
    formData.append("shippingCost", productInfo.shippingCost.toString());

    // Append the images to the FormData
    uploadedFiles.forEach((file) => {
      formData.append(`productImage`, file);
    });
    categories.forEach((category: string) => {
      formData.append("categories", category);
    });
    console.log(formData);

    const response = await dispatch(postProduct(formData));

    if (response.payload) {
      navigate("/success-page");
    }
  };

  const productcategories = useSelector(
    (state: RootState) => state.productSlice.productCategories
  );

  const genderOptions: Option[] = [];

  const generateOptions = () => {
    productcategories.map((product: string) => {
      genderOptions.push({
        value: product.toLocaleLowerCase(),
        label: product,
      });
    });
  };

  generateOptions();

  const maxSelections = 4;

  const handleSelectChange = (selected: any) => {
    if (selected && selected.length == maxSelections) {
      return;
    }
    setCategoryOption(selected);
  };

  //RESETS THE SUCCESS VALUE IN THE OVERALL STATE AND SETS THE CATEGORY OPTION TO
  useEffect(() => {
    dispatch(resetSuccess());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      navigate("");
    }
  }, []);

  return (
    <>
      <div className="input-container_container">
        <div
          className={`input-container ${
            focusStates[1] || productInfo.productName ? "focused" : ""
          }`}
        >
          <label htmlFor="floating-label1" className="floating-label">
            Product Name
          </label>
          <input
            type="text"
            onFocus={() => handleFocus(1)}
            onBlur={() => handleBlur(1)}
            className="vendor-input"
            onChange={handleChange}
            name="productName"
          />
        </div>
        <div
          className={`input-container ${
            focusStates[1] || productInfo.productName ? "focused" : ""
          }`}
        >
          <Select
            isMulti
            value={categoryOption}
            onChange={handleSelectChange}
            options={genderOptions}
            styles={{
              control: (provided) => ({
                ...provided,
                fontSize: "0.9em", // Set the font size to 0.9em
                padding: "0.2em",
                border: "none",
                outline: "none",
                margin: "0",
              }),
              option: (provided) => ({
                ...provided,
                fontSize: "0.9em", // Font size for the options in the dropdown
                position: "static",
                zIndex: "5",
              }),
              singleValue: (provided) => ({
                ...provided,
                fontSize: "0.9em", // Font size for the selected value
              }),
              placeholder: (provided) => ({
                ...provided,
                fontSize: "0.9em", // Font size for the placeholder
              }),
            }}
          />
        </div>

        <div className="vendor-page-two-inputs">
          <div
            className={`input-container ${
              focusStates[3] || productInfo.productPrice ? "focused" : ""
            }`}
          >
            <label htmlFor="floating-label3" className="floating-label">
              Price
            </label>
            <input
              type="text"
              onFocus={() => handleFocus(3)}
              onBlur={() => handleBlur(3)}
              className="vendor-input"
              onChange={handleChange}
              name="productPrice"
            />
          </div>
          <div
            className={`input-container ${
              focusStates[4] || productInfo.productStock ? "focused" : ""
            }`}
          >
            <label htmlFor="floating-label4" className="floating-label">
              Stock
            </label>
            <input
              type="text"
              onFocus={() => handleFocus(4)}
              onBlur={() => handleBlur(4)}
              onChange={handleChange}
              className="vendor-input"
              name="productStock"
            />
          </div>
        </div>
        <div className="vendor-page-two-inputs">
          <div
            className={`input-container ${
              focusStates[5] || productInfo.productDiscount ? "focused" : ""
            }`}
          >
            <label htmlFor="floating-label3" className="floating-label">
              Product Discount
            </label>
            <input
              type="text"
              onFocus={() => handleFocus(5)}
              onBlur={() => handleBlur(5)}
              onChange={handleChange}
              className="vendor-input"
              name="productDiscount"
            />
          </div>
          <div
            className={`input-container ${
              focusStates[6] || productInfo.shippingCost ? "focused" : ""
            }`}
          >
            <label htmlFor="floating-label4" className="floating-label">
              Shipping Cost
            </label>
            <input
              type="text"
              onFocus={() => handleFocus(6)}
              onBlur={() => handleBlur(6)}
              onChange={handleChange}
              className="vendor-input"
              name="shippingCost"
            />
          </div>
        </div>

        <div
          className={`input-container ${
            focusStates[2] || productInfo.prodcuDescription ? "focused" : ""
          }`}
        >
          <label htmlFor="floating-label2" className="floating-label">
            Desciption
          </label>
          <textarea
            rows={4}
            onFocus={() => handleFocus(2)}
            onBlur={() => handleBlur(2)}
            onChange={handleChange}
            className="vendor-page_textarea vendor-input"
            name="prodcuDescription"
          ></textarea>
        </div>

        <div className="image-upload">
          <FileUpload
            setUploadedFiles={setUploadedFiles}
            uploadedFiles={uploadedFiles}
          />
        </div>

        <button className="become-vendor_submit-button" onClick={handleSubmit}>
          {isLoading ? "Loading ..." : "Submit"}
        </button>
      </div>
    </>
  );
};

export default MyVendorPage;
