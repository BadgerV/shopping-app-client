import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <span className="footer-exclusive-text">Exclusive</span>
        <span className="footer-subscribe-text">Subscribe</span>
        <span className="footer-discount-text">
          Get 10% off your first order
        </span>
        <input type="text" placeholder="Email" />
      </div>
      <div className="footer-middle">
        <div className="footer-middle_left">
          <span className="footer-text_header">Support</span>
          <span className="footer-text_text">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </span>
          <span className="footer-text_text">segunfaozan112@gmail.com</span>
          <span className="footer-text_text">08078754215</span>
        </div>

        <div className="footer-middle_middle">
          <span className="footer-text_header">Support</span>
          <span className="footer-text_text">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </span>
          <span className="footer-text_text">segunfaozan112@gmail.com</span>
          <span className="footer-text_text">08078754215</span>
        </div>
        <div className="footer-middle_right">
          <span className="footer-text_header">Support</span>
          <span className="footer-text_text">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </span>
          <span className="footer-text_text">segunfaozan112@gmail.com</span>
          <span className="footer-text_text">09078754215</span>
        </div>
      </div>
      <div className="footer_left">
        <span className="footer-text_header">Suppport</span>
      </div>
    </div>
  );
};

export default Footer;
