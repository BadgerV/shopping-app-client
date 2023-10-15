import "./pendingVendor.css";
import { Link } from "react-router-dom";

const PendingVendor = () => {
  return (
    <div className="pending-page">
      <div className="pending-inner">
        <span className="pending-text">
          Your request is currently under review
        </span>

        <Link className="pending-link" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PendingVendor;
