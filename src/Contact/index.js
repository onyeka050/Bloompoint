import { useState } from "react";
import emailjs from "emailjs-com";
import { countryList } from "../utilities";
import Logo from "../Logo.png";

import "./index.scss";

const Contact = () => {
  const initialFormState = {
    contactEmail: "",
    contactName: "",
    contactMessage: "",
    contactBusinessName: "",
    contactWebsite: "",
    contactCountry: "",
    contactNature: "",
  };
  const [formInfo, setFormInfo] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function sendEmail(e) {
    e.preventDefault();
    try {
      setSubmitting(true);
      await emailjs.sendForm(
        "service_jx54x1j",
        "template_xdhxq6w",
        e.target,
        "user_3kFCX6FPg9aOY9ecfVCCc"
      );
      setSubmitting(false);
      setSuccess(true);
    } catch (error) {
      alert(
        "There has been an error sending your details, please try again later"
      );
      setSubmitting(false);
    }
    e.target.reset();
    setFormInfo(initialFormState);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  return (
    <>
      <section className="contact_section">
        <div className="logo_container">
          <img src={Logo} alt="logo" />
        </div>
        <h1>Contact Our Business Team</h1>
        <form onSubmit={sendEmail}>
          <div>
            <input
              type="text"
              placeholder="Contact Name"
              name="contactName"
              value={formInfo.contactName}
              onChange={(event) => {
                setFormInfo({ ...formInfo, contactName: event.target.value });
              }}
              required
            />
            <input
              type="email"
              placeholder="Contact Email"
              name="contactEmail"
              value={formInfo.contactEmail}
              onChange={(event) => {
                setFormInfo({ ...formInfo, contactEmail: event.target.value });
              }}
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Company Name"
              name="contactBusinessName"
              value={formInfo.contactBusinessName}
              onChange={(event) => {
                setFormInfo({
                  ...formInfo,
                  contactBusinessName: event.target.value,
                });
              }}
              required
            />
            <input
              type="text"
              placeholder="Business Website"
              name="contactWebsite"
              value={formInfo.contactWebsite}
              onChange={(event) => {
                setFormInfo({
                  ...formInfo,
                  contactWebsite: event.target.value,
                });
              }}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Business Nature e.g Fintech"
              name="contactNature"
              value={formInfo.contactNature}
              onChange={(event) => {
                setFormInfo({ ...formInfo, contactNature: event.target.value });
              }}
              required
            />
            <select
              placeholder="Country"
              name="contactCountry"
              value={formInfo.contactCountry}
              onChange={(event) => {
                setFormInfo({
                  ...formInfo,
                  contactCountry: event.target.value,
                });
              }}
              required
            >
              <option value="">Select your business country</option>
              {countryList.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <textarea
              style={{
                height: `150px`,
              }}
              name="contactMessage"
              value={formInfo.contactMessage}
              placeholder="Tell us more about you or your business needs"
              onChange={(event) => {
                setFormInfo({
                  ...formInfo,
                  contactMessage: event.target.value,
                });
              }}
              required
            />
          </div>
          <button disabled={submitting} primary>
            {!submitting ? "SUBMIT" : "please wait..."}
          </button>
          {success && (
            <div className="alert-success">Message Sent Successfully</div>
          )}
        </form>
      </section>
    </>
  );
};
export default Contact;
