import "./index.scss";

const Section = () => (
  <>
    <section className="do_more">
      <h1>Get access to modern global payment solutions for your business</h1>

      <div className="do_more_flex_row">
        <div className="do_more_flex_row_item">
          <img
            src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fHBheW1lbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="payments"
            className="do_more_main_img"
          />
        </div>
        <div className="do_more_flex_row_item">
          <h2>Accept payments from anywhere in the world</h2>
          <p className="do_more_main_info">
            Our platform enables you to collect payments from anywhere your
            customers are or will be. Our fees are highly competitive and
            transparent. No hidden costs of any kind.
          </p>
          <h3>Extend your reach globally</h3>
          <p>
            With minimum effort, you can scale your business across multiple
            countries and reach more customers with just one platform
          </p>
          <div className="do_more_flex_options">
            <div>
              <p>
                <img
                  src="https://flutterwave.com/images/icons/check.svg"
                  alt="check"
                />{" "}
                Debit and Credit Cards
              </p>
              <p>
                <img
                  src="https://flutterwave.com/images/icons/check.svg"
                  alt="check"
                />{" "}
                Bank Account
              </p>
            </div>
            <div>
              <p>
                <img
                  src="https://flutterwave.com/images/icons/check.svg"
                  alt="check"
                />{" "}
                Bank Transfer
              </p>
              <p>
                <img
                  src="https://flutterwave.com/images/icons/check.svg"
                  alt="check"
                />{" "}
                USSD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Section;
