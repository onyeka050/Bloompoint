import { useState } from "react";
import Modal from "../UI/Modal";
import Contact from "../Contact";
import Header from "./Header";
import DoMore from "./DoMore";
import BuildCustom from "./BuildCustom";
import Security from "./Security";
import GetStarted from "./GetStarted";
import Footer from "./Footer";

const Landing = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal open={modalVisible} close={() => setModalVisible(false)}>
        <Contact />
      </Modal>
      <Header openModal={() => setModalVisible(true)} />
      <DoMore />
      <BuildCustom />
      <Security />
      <GetStarted openModal={() => setModalVisible(true)} />
      <Footer />
    </>
  );
};

export default Landing;
