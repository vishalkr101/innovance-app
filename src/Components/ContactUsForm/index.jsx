import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";

const ContactUsForm = () => {
  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_lgqxvfx",
        "template_5913ixo",
        event.target,
        "ifng66dfeBBlS4RG2"
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          event.target.reset();
        },
        (error) => {
          alert("Failed to send email. Please try again later.");
          console.error(error);
        }
      );
  }

  return (
    <div className="contact-us-container bg-gray-100 p-8 w-full">
      <h2 className="text-4xl ml-[13vw] font-semibold relative pb-8 pt-16">
        Contact Us{" "}
        <FontAwesomeIcon className="text-2xl mb-[2px] ml-2" icon={faPhone} />
      </h2>

      <div className=" flex gap-8 h-96 ml-[13vw] mb-24">
        <div className="contact-us-details-container bg-black w-1/3 h-full hidden lg:block rounded-md p-6">
          <div className="location-container p-4">
            <h1 className="text-white">
              <FontAwesomeIcon icon={faLocationDot} /> Address
            </h1>
            <p className="text-white">
              D-65 Industrial Area, main Rajapuri Road, New Delhi-75
            </p>
          </div>
          <div className="location-container p-4">
            <h1 className="text-white">
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </h1>
            <p className="text-white">vishalkr00700@gmail.com</p>
          </div>
          <div className="location-container p-4">
            <h1 className="text-white">
              <FontAwesomeIcon icon={faPhone} className="text-sm" /> Contact No.
            </h1>
            <p className="text-white">8882190865</p>
          </div>
        </div>
        <div className="contact-us-form-container w-full h-96">
          <form
            className="flex flex-col gap-4 w-2/3 h-full"
            onSubmit={sendEmail}
          >
            <h2 className="text-2xl font-semibold">
              Get in touch{" "}
              <FontAwesomeIcon
                className="text-lg mb-[2px] ml-2"
                icon={faEnvelope}
              />
            </h2>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input h-10 rounded-md p-4"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input h-10 rounded-md p-4"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="input h-10 rounded-md p-4"
              required
            />
            <textarea
              placeholder="Message"
              className="input h-32 rounded-md p-4 resize-none"
              name="message"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white p-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
