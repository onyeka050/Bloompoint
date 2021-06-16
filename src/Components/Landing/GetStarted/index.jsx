import Button from "../../UI/Button";
import "./index.scss";

const GetStarted = (props) => (
  <>
    <section className="get_started">
      <h2>Ready to get started ?</h2>
      <p>Get in touch with us and start accepting payments within minutes</p>
      <Button onClick={() => props.openModal()}>SPEAK WITH US</Button>
    </section>
  </>
);

export default GetStarted;
