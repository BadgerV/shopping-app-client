import Header from "../../components/Header/Header"
import Spinner from "../../components/Spinner/Spinner"
import './profile.css'


const Profile = () => {
  return (
    <div className="profile-page">
        <Header />

        <div className="profile-page-main">
            <Spinner />
        </div>
    </div>
  )
}

export default Profile