import Button from "../../UI/Button";
import aweLogo from "../../../assets/images/awe.jpeg";
import "./Hero.scss";

const Hero = (props) => {
  return (
    <>
      <header className="Hero">
        <div className="info">
          <h1>
            Empowering Global Payments <br /> For Businesses And Individuals
          </h1>
          <p>
            Bloompoint enables global payments in multiple currencies for your
            business to and from any part of the world, securely.
          </p>
          <div className="info_buttons">
            <Button secondary onClick={() => props.openModal()}>
              GET STARTED
            </Button>
          </div>
          {/* <div>
            <p className="label">POWERED BY</p>
            <img
              src={aweLogo}
              alt="AWE Microfinance Bank"
              className="comp_logo"
            />
          </div> */}
        </div>
        <div className="image_container">
          <img
            src="https://alphapay.netlify.app/static/media/why_end.489b3ea4.jpg"
            alt="maps"
          />
        </div>
      </header>
    </>
  );
};
export default Hero;
