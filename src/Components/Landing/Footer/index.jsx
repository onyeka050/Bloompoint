/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../../../assets/images/bloompoint_logo.png";
import "./index.scss";

const Footer = () => (
  <>
    <footer>
      <div className="footer_logo">
        <img src={Logo} alt="logo" />
        Bloompoint
      </div>

      <div className="footer_info">
        <div>
          <h3>ADDRESS</h3>
          <p>Lekki, Lagos.</p>
          <p>Lagos State, Nigeria.</p>
        </div>
        <div>
          <h3>SOCIAL</h3>
          <a target="_blank" rel="noreferrer">
            Twitter
          </a>
          <p>Facebook</p>
          <a target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  </>
);
export default Footer;
