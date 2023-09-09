import Header from "../../components/Header/Header"
import './profile.css'


const Profile = () => {
  return (
    <div className="profile-page">
        <Header />

        <div className="profile-page-main">
            <div className="profile-page-left">Interesting</div>
            <div className="profile-page-right">Fascianting</div>
        </div>
    </div>
  )
}

export default Profile