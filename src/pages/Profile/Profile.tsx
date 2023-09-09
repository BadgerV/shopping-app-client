import { BsBell, BsHouse } from "react-icons/bs";
import {
  MdHistory,
  MdKeyboardArrowRight,
  MdOutlineExitToApp,
} from "react-icons/md";
import Header from "../../components/Header/Header";
import "./profile.css";
import { FcSettings } from "react-icons/fc";
import { GoSignOut } from "react-icons/go";

import { useState } from "react";

const Profile = () => {
  
  const [firstName, setFirstName] = useState("Faozan");

  const name = "Segunmaru Faozan";
  const isAVendor = true;

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

          <div className="profile-main-left-bottom-div">
            <div className="profile-main-left-bottom">
              <span>Sign Out</span>
              <button>
                <GoSignOut size={25} />
              </button>
            </div>
          </div>
        </div>
        <div className="profile-page-right">
          <span className="profile-user-text">User Profile</span>

          <div className="profile-photo-container">
            <div className="profile-photo-left">
              <img src="/assets/avatar.jpg" alt="Profile Pic" className="profile-pic"/>
            </div>
            <div className="profile-photo-middle">
              <span className="profile-photo-name">{name}</span>
              <span className="profile-photo-isVendor">
                {isAVendor ? <>Vendor</> : <>Buyer</>}
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
              <input type="text" className="profile-input" />
              <input type="text" className="profile-input" />
            </div>
            <div className="profile-grid">
              <input type="text" className="profile-input" />
              <input type="text" className="profile-input" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
