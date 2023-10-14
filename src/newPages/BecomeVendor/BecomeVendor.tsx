import "./becomeVendor.css";
import DatePicker from "react-date-picker";
import { useState, useEffect } from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const genderOptions: Option[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const CategoryOptions: Option[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
  // Add more options as needed
];

const maxSelections = 3;

const BecomeVendor = () => {
  const [theImage, setTheImage] = useState<any>();
  const [dateOfBirth, setDateOfBirth] = useState<Value>(new Date());

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
  return (
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
            onChange={(e) => handleImageUpload(e)}
            style={{ display: "none" }}
          />

          <img
            src={theImage ? theImage : `/assets/avatar.jpg`}
            alt="Your picture"
          />
        </div>

        <div className="become-vendor_pair">
          <label className="become-vendor-label">Matric Number</label>
          <input
            type="text"
            placeholder="Matric Number"
            className="become-vendor_input"
          />
        </div>
        <div className="become-vendor_pair">
          <label className="become-vendor-label">Department</label>
          <input
            type="text"
            placeholder="Department"
            className="become-vendor_input"
          />
        </div>

        <div className="become-vendor_pair">
          <label className="become-vendor-label">Date Of Birth</label>
          <DatePicker
            onChange={setDateOfBirth}
            value={dateOfBirth}
            format="y-MM-dd"
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
          <label className="become-vendor-label">Interested Categories</label>

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
      </div>
    </div>
  );
};

export default BecomeVendor;
