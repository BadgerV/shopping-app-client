import Header from "../../newComponents/Header/Header";
import "./myVendorPage.css";
import { useState, useEffect } from "react";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { postProduct, resetSuccess } from "../../redux/slice/userSlice";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

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
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);
  const [isFocused5, setIsFocused5] = useState(false);
  const [isFocused6, setIsFocused6] = useState(false);
  const [productInfo, setProductInfo] = useState({
    productName: "",
    prodcuDescription: "",
    productPrice: 0,
    productStock: 0,
    productDiscount: 0,
    shippingCost: 0,
    productImage: null,
  });
  const [categoryOption, setCategoryOption] = useState<any>([]);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const isLoading = useSelector(
    (state: RootState) => state.userSlice.isLoading
  );

  const handleFocus1 = () => {
    setIsFocused1(true);
  };

  const handleBlur1 = () => {
    setIsFocused1(false);
  };

  const handleFocus2 = () => {
    setIsFocused2(true);
  };

  const handleBlur2 = () => {
    setIsFocused2(false);
  };

  const handleFocus3 = () => {
    setIsFocused3(true);
  };

  const handleBlur3 = () => {
    setIsFocused3(false);
  };

  const handleFocus4 = () => {
    setIsFocused4(true);
  };

  const handleBlur4 = () => {
    setIsFocused4(false);
  };
  const handleFocus5 = () => {
    setIsFocused5(true);
  };

  const handleBlur5 = () => {
    setIsFocused5(false);
  };
  const handleFocus6 = () => {
    setIsFocused6(true);
  };

  const handleBlur6 = () => {
    setIsFocused6(false);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await dispatch(
      postProduct({
        productName: productInfo.productName,
        productDescription: productInfo.prodcuDescription,
        productStock: productInfo.productStock,
        productDiscount: productInfo.productDiscount,
        productImage: productInfo.productImage,
        productPrice: productInfo.productPrice,
        shippingCost: productInfo.shippingCost,
        category1: categoryOption[0]?.label,
        category2: categoryOption[1]?.label,
      })
    );

    if (response.payload) {
      navigate("/success-page");
    }
  };

  const onFileChange = (e: any) => {
    const updatedInfo = { ...productInfo, productImage: e.target.files[0] };
    setProductInfo(updatedInfo);
  };
  // const [selectedOption, setSelectedOption] = useState<Option | null>(null);

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

  const maxSelections = 3;

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
    if(isSuccess) {
      navigate("")
    }
  }, [])

  return (
    <>
      <div className="input-container_container">
        <div
          className={`input-container ${
            isFocused1 || productInfo.productName ? "focused" : ""
          }`}
        >
          <label htmlFor="floating-label1" className="floating-label">
            Product Name
          </label>
          <input
            type="text"
            onFocus={handleFocus1}
            onBlur={handleBlur1}
            className="vendor-input"
            onChange={handleChange}
            name="productName"
          />
        </div>
        <div
          className={`input-container ${
            isFocused1 || productInfo.productName ? "focused" : ""
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
              isFocused3 || productInfo.productPrice ? "focused" : ""
            }`}
          >
            <label htmlFor="floating-label3" className="floating-label">
              Price
            </label>
            <input
              type="text"
              onFocus={handleFocus3}
              onBlur={handleBlur3}
              className="vendor-input"
              onChange={handleChange}
              name="productPrice"
            />
          </div>
          <div
            className={`input-container ${
              isFocused4 || productInfo.productStock ? "focused" : ""
            }`}
          >
            <label htmlFor="floating-label4" className="floating-label">
              Stock
            </label>
            <input
              type="text"
              onFocus={handleFocus4}
              onBlur={handleBlur4}
              onChange={handleChange}
              className="vendor-input"
              name="productStock"
            />
          </div>
        </div>
        <div className="vendor-page-two-inputs">
          <div
            className={`input-container ${
              isFocused5 || productInfo.productDiscount ? "focused" : ""
            }`}
          >
            <label htmlFor="floating-label3" className="floating-label">
              Product Discount
            </label>
            <input
              type="text"
              onFocus={handleFocus5}
              onBlur={handleBlur5}
              onChange={handleChange}
              className="vendor-input"
              name="productDiscount"
            />
          </div>
          <div
            className={`input-container ${
              isFocused6 || productInfo.shippingCost ? "focused" : ""
            }`}
          >
            <label htmlFor="floating-label4" className="floating-label">
              Shipping Cost
            </label>
            <input
              type="text"
              onFocus={handleFocus6}
              onBlur={handleBlur6}
              onChange={handleChange}
              className="vendor-input"
              name="shippingCost"
            />
          </div>
        </div>

        <div
          className={`input-container ${
            isFocused2 || productInfo.prodcuDescription ? "focused" : ""
          }`}
        >
          <label htmlFor="floating-label2" className="floating-label">
            Desciption
          </label>
          <textarea
            rows={4}
            onFocus={handleFocus2}
            onBlur={handleBlur2}
            onChange={handleChange}
            className="vendor-page_textarea vendor-input"
            name="prodcuDescription"
          ></textarea>
        </div>

        <div className="image-upload">
          <label
            htmlFor="image-input"
            className="become-vendor-label extra-label"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image-input"
            accept="image/*"
            onChange={onFileChange}
            style={{ display: "none" }}
            name="avatar"
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
