import Hero from "./Hero";
import Navbar from "../../UI/Navbar";

const Header = (props) => {
  return (
    <>
      <Navbar openModal={props.openModal} />
      <Hero openModal={props.openModal} />
    </>
  );
};
export default Header;
