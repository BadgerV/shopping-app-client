import Header from "../../newComponents/Header/Header";
import Footer from "../../newComponents/Footer/Footer";
import "./profile.css";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { updateUser } from "../../redux/slice/userSlice";
import { Link } from "react-router-dom";
import LoadingComponent from "../../newComponents/LoadingComponent/LoadingComponent";

const Profile = () => {
  const user = useSelector((state: RootState) => state.userSlice.user);

  //check isLoading state in redux
  const isLoading = useSelector(
    (state: RootState) => state.userSlice.isLoading
  );
  const dispatch = useDispatch<AppDispatch>();

  const isSpecialLoading = useSelector(
    (state: RootState) => state.userSlice.isSpecialLoading
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    isVendor: "",
    formerPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(false);

  useEffect(() => {
    setFormData({
      ...formData,
      ...user,
    });
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    await dispatch(
      updateUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: user?.email ? user.email : "",
        password: formData.formerPassword,
        newPassword: formData.confirmPassword,
        phoneNumber: formData.phoneNumber,
      })
    );
  };

  const checkIfPasswordsMatch = (
    firstArgument: string,
    secondArgument: string,
    thirdArgument: string
  ) => {
    if (secondArgument === thirdArgument) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    // Perform actions after state update
    setPasswordsMatch(
      checkIfPasswordsMatch(
        formData.formerPassword,
        formData.newPassword,
        formData.confirmPassword
      )
    );
  }, [formData.formerPassword, formData.newPassword, formData.confirmPassword]);

  return (
    <>
      {isSpecialLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <Header />

          <div className="profile-page-new">
            <div className="profile-page_left-and-right">
              <div className="profile-page_min-left">
                <span className="profile-page-min-home-text">Home / </span>
                <span className="profile-page-min-account-text">
                  My Account
                </span>
              </div>
              <div className="profile-page_min-right">
                <span className="profile-page_welcome-text">Welcome </span>
                <span className="profile-page_name-text">{`${user?.firstName} ${user?.lastName}`}</span>
              </div>
            </div>

            <div className="profile-page_main-left-and-right">
              <div className="profile-page_main-left">
                <div className="profile-page_left-heading-and-text">
                  <span className="profile-page-heading">
                    Managa My Account
                  </span>

                  <span className="profile-page-regular-link active">
                    My Profile
                  </span>
                  <span className="profile-page-regular-link">
                    Address Book
                  </span>
                  <span className="profile-page-regular-link">
                    My Payment Options
                  </span>
                </div>

                <div className="profile-page_left-heading-and-text">
                  <span className="profile-page-heading">My Orders</span>

                  <span className="profile-page-regular-link">My Returns</span>
                  <span className="profile-page-regular-link">
                    Cancellations
                  </span>
                </div>

                <div className="profile-page_left-heading-and-text">
                  <span className="profile-page-heading">Vendor</span>
                  <span className="profile-page-regular-link">Vendors</span>
                  <Link
                    to="/become-vendor"
                    className="profile-page-regular-link"
                  >
                    Become a Vendor
                  </Link>
                </div>
              </div>

              <div className="profile-page_main-right">
                <div className="profile-page_centerized">
                  <span className="profile-page_edit-profile-text">
                    Edit Your Profile
                  </span>

                  <div className="profile-page_input-pair">
                    <div className="profile-page_input-and-label">
                      <label className="profile-page_label">First name</label>
                      <input
                        type="text"
                        className="profile-page-input"
                        placeholder={formData.firstName}
                        onChange={(e) => handleInputChange(e)}
                        name="firstName"
                      />
                    </div>
                    <div className="profile-page_input-and-label">
                      <label className="profile-page_label">Last name</label>
                      <input
                        type="text"
                        className="profile-page-input"
                        placeholder={formData.lastName}
                        onChange={(e) => handleInputChange(e)}
                        name="lastName"
                      />
                    </div>
                  </div>

                  <div className="profile-page_input-pair">
                    <div className="profile-page_input-and-label">
                      <label className="profile-page_label">Email</label>
                      <input
                        type="email"
                        className="profile-page-input"
                        placeholder={formData.email}
                        onChange={(e) => handleInputChange(e)}
                        name="email"
                      />
                    </div>
                    <div className="profile-page_input-and-label">
                      <label className="profile-page_label">Phone Number</label>
                      <input
                        type="text"
                        className="profile-page-input"
                        placeholder={
                          formData.phoneNumber.length == 0
                            ? "Phone Number"
                            : formData.phoneNumber
                        }
                        onChange={(e) => handleInputChange(e)}
                        name="phoneNumber"
                      />
                    </div>
                  </div>

                  <div className="profile-page_lower-inputs">
                    <div className="profile-page_horizontal">
                      <label className="profile-page_label">
                        Password Changes
                      </label>
                      <span
                        className={`profile-page_error-message ${
                          passwordsMatch ? `` : `profile-page_none`
                        }`}
                      >
                        Passwords do not match
                      </span>
                    </div>

                    <input
                      type="password"
                      placeholder="Current Password"
                      className="profile-page-input profile-page_extra-input"
                      onChange={(e) => handleInputChange(e)}
                      name="formerPassword"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="profile-page-input profile-page_extra-input"
                      onChange={(e) => handleInputChange(e)}
                      name="newPassword"
                    />
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="profile-page-input profile-page_extra-input"
                      onChange={(e) => handleInputChange(e)}
                      name="confirmPassword"
                    />
                  </div>

                  <div className="profile-page_botton-container">
                    <button className="profile-page_cancel-button">
                      Cancel
                    </button>
                    <button
                      className="profile-save-button"
                      disabled={passwordsMatch}
                      onClick={handleSave}
                    >
                      {isLoading ? (
                        <img
                          src="/assets/spinner.svg"
                          className="profile-page_spinner"
                        />
                      ) : (
                        "Save Changes"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Profile;
