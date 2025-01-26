import Carousel from "../Carousels";
import carouselImage from "../../assets/carouselImage.jpg";
import "./index.css";
import Card from "../Card";
import led from "../../assets/led.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ContactUsForm from "../ContactUsForm";

const Home = () => {
  const images = [
    { name: "agricultural", image: carouselImage },
    { name: "industrial", image: carouselImage },
    { name: "residential", image: carouselImage },
  ];
  return (
    <div className="home-container mt-36">
      <Carousel items={images} />
      <div className="flex welcome-section-container flex-col items-center w-full bg-gray-100">
        <h1 className="text-white text-4xl font-bold mt-12 text-center">
          Welcome to Innovance
        </h1>
        <p className=" text-white text-2xl mt-4 text-center">
          We are the leading manufacturers of pumps in India
        </p>
        <p className=" text-white mt-4 text-center sm:ml-12 sm:mr-12 mb-12 italic tracking-wider">
          "We Innovane Industries" are known in the market for providing best
          range of water pumps, submersible pumps. Heater, Home Appliances &
          many more. We Established in Year 2008. Our products are highly
          demanded among the customers due to their hassle free performances,
          perfect dimensions, accurate design & high tensite strenght. We ptcurd
          these products from the certify vendors of the Industries. We are able
          to get full satisfaction of our respected clients. We also manage a
          warm and a long lasting relationship with our vendors to fulfill the
          specific requirements of clients in a perfect manner, We appreciate
          the valubale feedback of our customers to develop the quality of our
          products to meet specific needs of our clients, all our products are
          made availableindifferentspecification. We offer these products at
          reasonable rates & deliver these within the promised time- frame we
          have widerange of pumping products to over 24 state in country.
        </p>
      </div>
      <div className="our-products-container w-full">
        <h2 className="text-center text-4xl font-semibold relative p-8 pt-16">
          Our Products
          <span className="absolute inset-x-0 bottom-0 flex justify-center items-center">
            <div className="w-16 h-px bg-black"></div>
            <FontAwesomeIcon className="text-lg" icon={faShoppingCart} />
            <div className="w-16 h-px bg-black"></div>
          </span>
        </h2>
        <div className="flex items-center w-full">
          <div className="ml-[2vw] mr-[2vw] sm:ml-[5vw] sm:mr-[5vw] flex flex-col sm:flex-row gap-6 justify-between items-center w-full mt-8 mb-12">
            <Link to="/agricultural-pumps">
              <Card image={led} text="EXPLORE AGRICULTURAL PUMPS" />
            </Link>
            <Link to="/industrial-pumps">
              <Card image={led} text="EXPLORE INDUSTRIAL PUMPS" />
            </Link>
            <Link to="/residential-pumps">
              <Card image={led} text="EXPLORE RESIDENTIAL PUMPS" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-200" />
      <div className="contact-us-container">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default Home;
