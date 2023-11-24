import "./becomeVendor.css";
import DatePicker from "react-date-picker";
import { useState } from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import Select from "react-select";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { becomeVendor } from "../../redux/slice/userSlice";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/store";
import PendingVendor from "../../newComponents/PendingVendor/PendingVendor";
import LoadingComponent from "../../newComponents/LoadingComponent/LoadingComponent";
import Header from "../../newComponents/Header/Header";
import { useNavigate } from "react-router-dom";

interface Option {
  value: string;
  label: string;
}

const genderOptions: Option[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const CategoryOptions: Option[] = [
  { value: "clothing", label: "Clothing" },
  { value: "perfume", label: "Perfumes" },
  { value: "computers", label: "Computers" },
  { value: "phones", label: "Phones" },
  { value: "shoes", label: "Shoes" },
  { value: "edibles", label: "Edibles" },
];


const maxSelections = 3;

const BecomeVendor = () => {
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.userSlice.user);

  if (user?.isVendor == "true") {
    navigate("/my-vendor-page");
    console.log("working");
  }

  const isSpecialLoading = useSelector(
    (state: RootState) => state.userSlice.isSpecialLoading
  );

  const [profileImg, setProfileImg] = useState("");
  const isLoading = useSelector(
    (state: RootState) => state.userSlice.isLoading
  );

  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    matricNumber: "",
    gender: "",
    motto: "",
    avatar: "",
    department: "",
    thirdCategory: "",
    secondCategory: "",
    firstCategory: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const [theImage, setTheImage] = useState<any>();
  const [dateOfBirth, setDateOfBirth] = useState<any>(new Date());
  const [theRealDOB, setTheRealDOB] = useState("");

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [categoryOption, setCategoryOption] = useState<any>([]);

  const handleSelectChange = (selected: any) => {
    if (selected && selected.length > maxSelections) {
      return;
    }

    setCategoryOption(selected);
  };

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imagePreview = event.target?.result;
        // Set imagePreview as the source of an <img> element
        setTheImage(imagePreview);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    categoryOption.forEach((item: any, index: number) => {
      if (index === 0) {
        formData.firstCategory = item.value;
      } else if (index === 1) {
        formData.secondCategory = item.value;
      } else if (index === 2) {
        formData.thirdCategory = item.value;
      }
    });
  }, [categoryOption]);

  useEffect(() => {
    setTheRealDOB(dateOfBirth.toString());
  }, [dateOfBirth]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await dispatch(
      becomeVendor({
        matricNumber: formData.matricNumber,
        DOB: theRealDOB,
        gender: selectedOption?.value,
        motto: formData.motto,
        department: formData.department,
        firstCategory: formData.firstCategory,
        secondCategory: formData.secondCategory,
        thirdCategory: formData.thirdCategory,
        avatar: profileImg,
      })
    );
  };

  const onFileChange = (e: any) => {
    setProfileImg(e.target.files[0]);
    handleImageUpload(e);
    console.log(profileImg);
  };

  const displayPendingPage = user?.isVendor === "pending";
  return (
    <>
      {isSpecialLoading ? (
        <LoadingComponent />
      ) : (
        <>
          {displayPendingPage ? (
            <PendingVendor />
          ) : (
            <>
              <Header />
              <div className="become-vendor-page">
                <div className="become-vendor">
                  <span className="become-vendor_text">Vendor Form</span>

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

                    <img
                      src={theImage ? theImage : `/assets/avatar.jpg`}
                      alt="Your picture"
                      className="become-vendor-image"
                    />
                  </div>

                  <div className="become-vendor_pair">
                    <label className="become-vendor-label">Matric Number</label>
                    <input
                      type="text"
                      placeholder="Matric Number"
                      className="become-vendor_input"
                      onChange={handleChange}
                      name="matricNumber"
                    />
                  </div>
                  <div className="become-vendor_pair">
                    <label className="become-vendor-label">Motto</label>
                    <input
                      type="text"
                      placeholder="Motto"
                      className="become-vendor_input"
                      onChange={handleChange}
                      name="motto"
                    />
                  </div>
                  <div className="become-vendor_pair">
                    <label className="become-vendor-label">Department</label>
                    <input
                      type="text"
                      placeholder="Department"
                      className="become-vendor_input"
                      onChange={handleChange}
                      name="department"
                    />
                  </div>

                  <div className="become-vendor_pair">
                    <label className="become-vendor-label">Date Of Birth</label>
                    <DatePicker
                      onChange={setDateOfBirth}
                      value={dateOfBirth}
                      format="y-MM-dd"
                      clearIcon={null} // Remove clear icon (optional)
                      required
                      className="date-picker"
                    />
                  </div>

                  <div>
                    <label className="become-vendor-label">Select Gender</label>
                    <Select
                      value={selectedOption}
                      onChange={setSelectedOption}
                      options={genderOptions}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          fontSize: "0.9em", // Set the font size to 0.9em
                          padding: "0.2em",
                        }),
                        option: (provided) => ({
                          ...provided,
                          fontSize: "0.9em", // Font size for the options in the dropdown
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
                  <div className="become-vendor_interested-categories">
                    <label className="become-vendor-label">
                      Interested Categories
                    </label>

                    <Select
                      isMulti
                      options={CategoryOptions}
                      value={categoryOption}
                      onChange={handleSelectChange}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          fontSize: "0.9em", // Set the font size to 0.9em
                          padding: "0.2em",
                        }),
                        option: (provided) => ({
                          ...provided,
                          fontSize: "0.9em", // Font size for the options in the dropdown
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
                      menuPlacement="top"
                    />
                  </div>

                  <button
                    className="become-vendor_submit-button"
                    onClick={handleSubmit}
                  >
                    {isLoading ? "Loading ..." : "Submit"}
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default BecomeVendor;
