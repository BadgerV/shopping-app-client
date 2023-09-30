import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-left_first">
          <span className="footer-left_title">Exclusive</span>

          <span className="footer-left_subtitle">Subscribe</span>
          <span className="footer-text">Get 10% off your first order</span>

          <div className="footer-input-cont">
            <input type="text" placeholder="Enter your Email" />
            <img src="/assets/SendButton.svg" alt="Send" />
          </div>
        </div>
        <div className="footer-left_second">
          <span className="footer-left_subtitle">Support</span>
          <span className="footer-text">
            No 15, Openifoluwa street, Churchgate, Lagos
          </span>
          <span className="footer-text">Segunfaozan112@gmail.com</span>
          <span className="footer-text">08078754215</span>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-middle_inner">
          <span className="footer-left_subtitle">Account</span>
          <span className="footer-text">My Account</span>
          <span className="footer-text">Login / Signin</span>
          <span className="footer-text">Cart</span>
          <span className="footer-text">WishList</span>
          <span className="footer-text">Shop</span>
          <span className="footer-text">Become a Vendor</span>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-right_first">
          <span className="footer-left_subtitle">Quick Link</span>
          <span className="footer-text">Privacy Policy</span>
          <span className="footer-text">Terms of use</span>
          <span className="footer-text">FAQs</span>
          <span className="footer-text">Contact</span>
        </div>
        <div className="footer-right_second">
          <span className="footer-left_subtitle">Download App</span>
          <span className="footer-mini-text">
            Save N500 for new App users only
          </span>

          <div className="footer-icons">
            <img src="/assets/Facebook.svg" alt="Facebook" />
            <img src="/assets/Twitter.svg" alt="Twitter" />
            <img src="/assets/Instagram.svg" alt="Instagram" />
            <img src="/assets/Linkedin.svg" alt="LinkedIn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
