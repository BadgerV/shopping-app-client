// import Header from "../../newComponents/Header/Header";
// import Footer from "../../newComponents/Footer/Footer";
import "./profile.css";

const Profile = () => {
  return (
    <>
      {/* <Header /> */}

      <div className="profile-page-new">
        <div className="profile-page_left-and-right">
          <div className="profile-page_min-left">
            <span className="profile-page-min-home-text">Home / </span>
            <span className="profile-page-min-account-text">My Account</span>
          </div>
          <div className="profile-page_min-right">
            <span className="profile-page_welcome-text">Welcome !</span>
            <span className="profile-page_name-text">Segunmaru Faozan</span>
          </div>
        </div>

        <div className="profile-page_main-left-and-right">
          <div className="profile-page_main-left">
            <div className="profile-page_left-heading-and-text">
              <span className="profile-page-heading">Managa My Account</span>

              <span className="profile-page-regular-link active">
                My Profile
              </span>
              <span className="profile-page-regular-link">Address Book</span>
              <span className="profile-page-regular-link">
                My Payment Options
              </span>
            </div>

            <div className="profile-page_left-heading-and-text">
              <span className="profile-page-heading">My Orders</span>

              <span className="profile-page-regular-link">My Returns</span>
              <span className="profile-page-regular-link">Cancellations</span>
            </div>

            <div className="profile-page_left-heading-and-text">
              <span className="profile-page-heading">My Wishlist</span>
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
                    placeholder="First Name"
                  />
                </div>
                <div className="profile-page_input-and-label">
                  <label className="profile-page_label">Last name</label>
                  <input
                    type="text"
                    className="profile-page-input"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="profile-page_input-pair">
                <div className="profile-page_input-and-label">
                  <label className="profile-page_label">Email</label>
                  <input
                    type="email"
                    className="profile-page-input"
                    placeholder="Email"
                  />
                </div>
                <div className="profile-page_input-and-label">
                  <label className="profile-page_label">Phone Number</label>
                  <input
                    type="text"
                    className="profile-page-input"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="profile-page_lower-inputs">
                <label className="profile-page_label">Password Changes</label>
                <input
                  type="text"
                  placeholder="Current Password"
                  className="profile-page-input profile-page_extra-input"
                />
                <input
                  type="text"
                  placeholder="New Password"
                  className="profile-page-input profile-page_extra-input"
                />
                <input
                  type="text"
                  placeholder="Confirm New Password"
                  className="profile-page-input profile-page_extra-input"
                />
              </div>

              <div className="profile-page_botton-container">
                <button className="profile-page_cancel-button">Cancel</button>
                <button className="profile-save-button">Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Profile;
