import { useState } from "react";
import Modal from "./Modal";
import Contact from "./Contact";
import logo from "./assets/images/bloompoint_logo.png";
import "./App.scss";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal open={modalVisible} close={() => setModalVisible(false)}>
        <Contact />
      </Modal>
      <nav>
        <div className="nav_content">
          <div className="nav_logo">
            <img src={logo} alt="logo" />
            Bloompoint
          </div>
          <div className="nav_items">
            <button
              primary
              className="btn"
              onClick={() => setModalVisible(true)}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </nav>
      <header>
        <div className="info">
          <h1>
            Your Managed Cloud <br /> Hosting Platform
          </h1>
          <p>
            A platform that facilitates choice, simplicity and performance.All
            this is backed by expert support so that you stay focused on what
            you do best, win as an individual and succeed as a business
          </p>
          <p className="label">TRUSTED BY</p>
          <img
            src="https://endeavor.org/content/uploads/2019/10/Logo%20-%20Flutterwave.png"
            alt="logo"
            className="logo"
          />
        </div>
        <img
          src="https://sociable.co/wp-content/uploads/2016/07/Web-Hosting.jpg"
          alt="web hosting"
          className="web_host"
        />
      </header>

      <section className="pricing_section">
        <h2>Choose your plan</h2>
        <p>We have plans for all your budgets.</p>
        <div className="pricing_flex">
          <div className="price_card">
            <h2>Basic</h2>
            <p className="price">$2.10/month</p>
            <p>Single Domain</p>
            <p>One-click Wordpress installs</p>
            <p>Free WordPress/cPanel website transfer </p>
            <p>Free SSL Certificate</p>
          </div>
          <div className="price_card valued">
            <h2>Pro</h2>
            <p className="price">$4.20/month</p>

            <p>Unlimited Domains</p>
            <p>One-click Wordpress installs</p>
            <p>Free WordPress/cPanel website transfer </p>
            <p>Free SSL Certificate</p>
            <p>Free domain included</p>
            <p className="special">POPULAR</p>
          </div>
          <div className="price_card">
            <h2>Business</h2>
            <p className="price">$5.45/month</p>

            <p>Unlimited Domains</p>
            <p>One-click Wordpress installs</p>
            <p>Free WordPress/cPanel website transfer </p>
            <p>Free SSL Certificate</p>
            <p>Free upgrade to positive SSL</p>
            <p>Free dedicated IP</p>
            <p>Free SEO tools</p>
            <p>Free domain included</p>
          </div>
        </div>
      </section>
      <section className="scale_section">
        <div className="scale_flex">
          <div>
            <h3>We scale effortlessly and seamlessly</h3>
            <p>
              About 1/3 of our customers are web pros, so they know where the
              gettin’ is good. After all, we’ve been doing this since the
              Jurassic (aka since 2002) and hosted over 2 million sites.
              <span>
                We also know that pros and newbies alike all want a hosting
                provider that’s easy and that works. So our robust web hosting
                tools get the job done right, and are designed so that when you
                grow, your site can grow with you too. A scalable solution,
                indeed.
              </span>
            </p>
            <div className="added_advts">
              <h4>Round the clock support</h4>
              <p>We work when you work. Whenever that happens to be.</p>
            </div>
            <div className="added_advts">
              <h4>99% uptime guarantee</h4>
              <p>
                The best ability is availability—so we make sure your site stays
                up.
              </p>
            </div>
            <div className="added_advts">
              <h4>eCommerce Tools</h4>
              <p>
                Create an online store so you can sell your goods and services
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-vector/electronic-gadget-object-devices-collection_7087-470.jpg"
              alt="scaling networks"
            />
          </div>
        </div>
      </section>
      <section className="deploy_section" n>
        <p>Automatic continous delivery.</p>
        <p>Deploy Once</p>
        <button onClick={() => setModalVisible(true)}>
          TALK TO THE EXPERTS
        </button>
      </section>
      <footer>
        <div className="footer_logo">
          <img src={logo} alt="logo" />
          Bloompoint
        </div>

        <div className="footer_info">
          <div>
            <h3>ADDRESS</h3>
            <p>Lekki, Lagos.</p>
            <p>Nigeria.</p>
          </div>
          <div>
            <h3>SOCIAL</h3>
            <a href="/" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <p>Facebook</p>
            <a href="/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
