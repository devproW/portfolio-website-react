import { useState } from "react";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobeAsia,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const [emailError, setEmailError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false }); // Clear error on input change
    if (name === "email") setEmailError(false); // Clear email error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regular expression for validating an email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate fields
    const newErrors = {
      name: !formData.name.trim(),
      phone: !formData.phone.trim(),
      email: !formData.email.trim(),
    };

    if (newErrors.email === false && !emailRegex.test(formData.email)) {
      setEmailError(true);
    } else {
      setEmailError(false); // Clear email error if valid
    }

    setErrors(newErrors);

    // Check if any field has an error
    const hasError = Object.values(newErrors).some((error) => error);

    if (!hasError) {
      alert("Form submitted successfully!");
      // Proceed with submission logic
    }
  };

  return (
    <section
      id="contact-me"
      className="flex flex-col justify-center items-center pt-20 pb-20"
    >
      <h2 className="text-5xl font-poppins font-semibold relative">
        Contact Me
        <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-28 bg-orange-400 h-[6px]"></span>
      </h2>
      <div className="flex max-lg:flex-col justify-between items-start w-full mt-10">
        <div className="flex flex-col justify-between gap-6 w-1/4 max-lg:w-full">
          <h2 className="text-lg font-medium font-poppins leading-loose">
            Contact Info
          </h2>
          <div className="flex justify-start items-center gap-3">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-gray-500 text-xl"
            />
            <h4 className="text-sm font-poppins leading-loose text-gray-500">
              Kuala Lumpur, Malaysia
            </h4>
          </div>
          <div className="flex justify-start items-center gap-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-gray-500 text-xl"
            />
            <h4 className="text-sm font-poppins leading-loose text-gray-500">
              firdaus.khalid.d@gmail.com
            </h4>
          </div>
          <div className="flex justify-start items-center gap-3">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="text-gray-500 text-xl"
            />
            <h4 className="text-sm font-poppins leading-loose text-gray-500">
              +6 013 3303 3493
            </h4>
          </div>
          <div className="flex justify-start items-center gap-3">
            <FontAwesomeIcon
              icon={faGlobeAsia}
              className="text-gray-500 text-xl"
            />
            <h4 className="text-sm font-poppins leading-loose text-gray-500">
              https://devprow.github.io/portfolio-website-react/
            </h4>
          </div>
          <h2 className="text-lg font-normal font-poppins leading-loose mt-3">
            Follow Me
          </h2>
          <div className="flex justify-start items-center gap-5">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-gray-500 text-lg hover:text-orange-400 cursor-pointer transition-colors duration-300"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-gray-500 text-lg hover:text-orange-400 cursor-pointer transition-colors duration-300"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-gray-500 text-lg hover:text-orange-400 cursor-pointer transition-colors duration-300"
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-start gap-7 w-2/3 max-lg:w-full max-lg:mt-10"
        >
          <div className="flex flex-col justify-start gap-2">
            <h2 className="text-sm font-poppins leading-loose text-black">
              NAME
            </h2>
            <input
              name="name"
              type="text"
              onChange={handleInputChange}
              className="shadow-md focus:shadow-xl focus:outline-none text-sm font-poppins leading-10 text-gray-500 py-2 px-6"
              placeholder="Type your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                This field is required.
              </p>
            )}
          </div>
          <div className="flex max-lg:flex-col justify-between items-start gap-8">
            <div className="flex flex-col justify-start gap-2 w-full">
              <h2 className="text-sm font-poppins leading-loose text-black">
                PHONE NUMBER
              </h2>
              <input
                name="phone"
                type="text"
                onChange={handleInputChange}
                className="shadow-md focus:shadow-xl focus:outline-none text-sm font-poppins leading-10 text-gray-500 py-2 px-6"
                placeholder="Type your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  This field is required.
                </p>
              )}
            </div>
            <div className="flex flex-col justify-start gap-2 w-full">
              <h2 className="text-sm font-poppins leading-loose text-black">
                EMAIL
              </h2>
              <input
                name="email"
                type="text"
                onChange={handleInputChange}
                className="shadow-md focus:shadow-xl focus:outline-none text-sm font-poppins leading-10 text-gray-500 py-2 px-6"
                placeholder="Type your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  This field is required.
                </p>
              )}
              {emailError && (
                <p className="text-red-500 text-sm mt-1">
                  The e-mail address entered is invalid.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <h2 className="text-sm font-poppins leading-loose text-black">
              Your Message
            </h2>
            <textarea
              name="message"
              id=""
              onChange={handleInputChange}
              className="shadow-md focus:shadow-xl focus:outline-none text-sm font-poppins leading-10 text-gray-500 py-2 px-6 h-48"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <Button
            label="Send Message"
            adjustWidth="w-56"
            borderColor="border-orange-400"
            hoverBgColor="hover:bg-orange-100"
            hoverTextColor="hover:text-orange-400"
            textColor="text-white"
            backgroundColor="bg-orange-400"
            buttontype="submit"
          />
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
