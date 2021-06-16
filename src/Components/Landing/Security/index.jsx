import "./index.scss";

const Security = () => (
  <>
    <section className="security">
      <div className="security_item">
        <img
          src="https://www.fingent.com/wp-content/uploads/2015/10/Electronic-Identity-Theft.jpg"
          alt="security"
          className="security_main_img"
        />
      </div>
      <div className="security_item">
        <h2>Security and Fraud Protection Guaranteed</h2>
        <p className="security_main_info">
          Highest level of data encryption built in with tools employed to
          protect you against fraud.
        </p>
        <h3>Detailed reporting for accounting, reconciliation, and audits</h3>
        <p>
          Get access to both critical and minor transaction details at all
          times. Track and monitor any transaction from your dashboard in
          real-time.
        </p>
        <div className="security_options">
          <div>
            <p>
              <img
                src="https://flutterwave.com/images/icons/check.svg"
                alt="check"
              />{" "}
              Real time monitoring
            </p>
            <p>
              <img
                src="https://flutterwave.com/images/icons/check.svg"
                alt="check"
              />{" "}
              Audit reports
            </p>
          </div>
          <div>
            <p>
              <img
                src="https://flutterwave.com/images/icons/check.svg"
                alt="check"
              />{" "}
              Authorizations and verifications
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Security;
