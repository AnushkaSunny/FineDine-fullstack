import { useState } from "react";
import emailjs from "@emailjs/browser";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      to_name: "FineDine Guest",
      to_email: email,
    };

    try {
      await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
      );

      alert("🎉 Thank you for subscribing to FineDine!");

      setEmail("");

    } catch (error) {

      console.error("EmailJS Error:", error);

      alert("Subscription failed. Please try again.");
    }
  };

  return (
      <section className="app__newsletter-section">
        <div className="app__newsletter">

          <div className="app__newsletter-heading">
            <SubHeading title="Newsletter" />

            <h1 className="headtext__cormorant">
              Subscribe To Our Newsletter
            </h1>

            <p className="p__opensans">
              And Never Miss Latest Updates!
            </p>
          </div>

          <form
              className="app__newsletter-input"
              onSubmit={handleSubmit}
          >

            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <button
                className="custom__button"
                type="submit"
            >
              Subscribe
            </button>

          </form>

        </div>
      </section>
  );
};

export default Newsletter;