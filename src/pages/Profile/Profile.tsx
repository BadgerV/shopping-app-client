import { BsBell, BsCartCheck, BsHouse } from "react-icons/bs";
import { MdHistory, MdKeyboardArrowRight } from "react-icons/md";
import Header from "../../components/Header/Header";
import "./profile.css";
import { FcSettings } from "react-icons/fc";
import { GoSignOut } from "react-icons/go";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import { useState, useEffect } from "react";

const Profile = () => {
  const user = useSelector((state: RootState) => state.userSlice.user.user ? state.userSlice.user.user : state.userSlice.user.newUser);
  //this piece of code up here, the code returned fro the backend has 2 labels, this is just to make user that if (user.user) isnt found, thenuser.newUser should be used.

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phoneNumber: "123-456-7890",
    isVendor : false
  });

  useEffect(() => {
    console.log(user)
    setFormData({
      ...formData,
      ...user,
    });
  }, [user]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div className="profile-page">
      <Header />

      <div className="profile-page-main">
        <div className="profile-page-left">
          <div className="profile-side-bar-links">
            <div className="profile-sidebar-link">
              <button className="profile-sidebar-link-button">
                <BsHouse size={20} />
              </button>
              <span>Home</span>
              <button className="profile-sidebar-link-arrow">
                <MdKeyboardArrowRight size={25} />
              </button>
            </div>

            {formData.isVendor ? (
              <div className="profile-sidebar-link">
                <button className="profile-sidebar-link-button">
                  <BsCartCheck size={20} />
                </button>
                <span>My Products</span>
                <button className="profile-sidebar-link-arrow">
                  <MdKeyboardArrowRight size={25} />
                </button>
              </div>
            ) : (
              <></>
            )}
            <div className="profile-sidebar-link">
              <button className="profile-sidebar-link-button">
                <BsBell size={20} />
              </button>
              <span>Notifications</span>
              <button className="profile-sidebar-link-arrow">
                <MdKeyboardArrowRight size={25} />
              </button>
            </div>

            <div className="profile-sidebar-link">
              <button className="profile-sidebar-link-button">
                <MdHistory size={20} />
              </button>
              <span>Transaction History</span>
              <button className="profile-sidebar-link-arrow">
                <MdKeyboardArrowRight size={25} />
              </button>
            </div>

            <div className="profile-sidebar-link">
              <button className="profile-sidebar-link-button">
                <FcSettings size={20} />
              </button>
              <span>Settings</span>
              <button className="profile-sidebar-link-arrow">
                <MdKeyboardArrowRight size={25} />
              </button>
            </div>
          </div>

          <div className="profile-main-left-bottom">
            <span>Sign Out</span>
            <button>
              <GoSignOut size={25} />
            </button>
          </div>
        </div>
        <div className="profile-page-right">
          <span className="profile-user-text">User Profile</span>

          <div className="profile-photo-container">
            <div className="profile-photo-left">
              <img
                src="/assets/avatar.jpg"
                alt="Profile Pic"
                className="profile-pic"
              />
            </div>
            <div className="profile-photo-middle">
              <span className="profile-photo-name">{`${formData.firstName} ${formData.lastName}`}</span>
              <span className="profile-photo-isVendor">
                {formData.isVendor ? <>Vendor</> : <>Buyer</>}
              </span>
            </div>
            <div className="profile-photo-right">
              <button className="profile-photo-right-button">
                Upload new photo
              </button>
            </div>
          </div>

          <div className="profile-right-main">
            <div className="profile-grid">
              <div className="profile-pair">
                <label htmlFor="firstName" className="profile-label">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange(e)}
                  className="profile-input"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>

              <div className="profile-pair">
                <label htmlFor="firstName" className="profile-label">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange(e)}
                  className="profile-input"
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="profile-grid">
              <div className="profile-pair">
                <label htmlFor="firstName" className="profile-label">
                  Email
                </label>
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e)}
                  className="profile-input"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="profile-pair">
                <label htmlFor="firstName" className="profile-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange(e)}
                  className="profile-input"
                  name="phoneNumber"
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>

          {formData.isVendor ? (
            <div className="profile-products">
              <div className="profile-product-text">Products</div>

              <div className="profile-product-container">
                <div className="profile-product">
                  <button>
                    <MdProductionQuantityLimits size={20} />
                  </button>
                  <span>Air Conditioner</span>
                </div>
                <div className="profile-product">
                  <button>
                    <MdProductionQuantityLimits size={20} />
                  </button>
                  <span>Air Freshsner</span>
                </div>
                <div className="profile-product">
                  <button>
                    <MdProductionQuantityLimits size={20} />
                  </button>
                  <span>Gift Basket</span>
                </div>
                <div className="profile-product">
                  <button>
                    <MdProductionQuantityLimits size={20} />
                  </button>
                  <span>Nothingness</span>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="profile-bottom">
            <button className="profile-save-button">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
