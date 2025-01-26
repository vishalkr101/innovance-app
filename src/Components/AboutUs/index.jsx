import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import aboutUsBG from "../../assets/aboutUsBG.jpg";
import factoryImg from "../../assets/factoryImg.jpg";
import {
  faBolt,
  faCheckCircle,
  faHammer,
  faHandshake,
  faRocket,
  faShieldAlt,
  faTags,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const AboutUs = () => {
  return (
    <div className="mt-36 about-us-section-container">
      <div className="heading-vision-container h-24 flex items-center justify-center w-full">
        <h1 className="text-4xl font-bold text-white p-8 animate__animated animate__fadeIn">
          Our Vision <FontAwesomeIcon icon={faRocket} />
        </h1>
      </div>
      <div className="image-vision-container flex">
        <div className="about-us-img-bg w-1/2 hidden sm:block">
          <img
            className="h-[33vw] p-6 animate__animated animate__fadeIn"
            src={factoryImg}
          />
        </div>
        <div className="relative w-full sm:w-1/2 min-h-[400px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${aboutUsBG})`,
              opacity: 0.2,
            }}
          ></div>
          <div className="relative p-6">
            <p className="text-black italic text-center tracking-wide px-4 animate__animated animate__zoomIn">
              "We Innovane Industries" are known in the market for providing
              best range of water pumps, submersible pumps. Heater, Home
              Appliances & many more. We Established in Year 2008. Our products
              are highly demanded among the customers due to their hassle-free
              performances, perfect dimensions, accurate design & high tensile
              strength. We procure these products from the certified vendors of
              the Industries. We are able to get full satisfaction of our
              respected clients. We also manage a warm and long-lasting
              relationship with our vendors to fulfill the specific requirements
              of clients in a perfect manner. We appreciate the valuable
              feedback of our customers to develop the quality of our products
              to meet specific needs of our clients. All our products are made
              available in different specifications. We offer these products at
              reasonable rates & deliver these within the promised time-frame.
              We have a wide range of pumping products to over 24 states in the
              country.
            </p>
          </div>
        </div>
      </div>
      <div className="why-choose-us-container p-6">
        <h1 className="text-center text-4xl font-semibold p-8">
          Why choose us ?
        </h1>
        <div className="quality-list-container p-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-[4vw]">
            <li className="text-2xl italic flex items-center space-x-1">
              Quick flow <FontAwesomeIcon icon={faRocket} className="ml-2" />
            </li>
            <li className="text-2xl italic flex items-center space-x-1">
              Silent Operation{" "}
              <FontAwesomeIcon icon={faVolumeMute} className="ml-2" />
            </li>
            <li className="text-2xl italic flex items-center space-x-1">
              Warranty 1 or 2 year{" "}
              <FontAwesomeIcon icon={faShieldAlt} className="ml-2" />
            </li>
            <li className="text-2xl italic flex items-center space-x-1">
              Copper Winding <FontAwesomeIcon icon={faBolt} className="ml-2" />
            </li>
            <li className="text-2xl italic flex items-center space-x-1">
              Heavy Duty <FontAwesomeIcon icon={faHammer} className="ml-2" />
            </li>
            <li className="text-2xl italic flex items-center space-x-1">
              Budget Friendly <FontAwesomeIcon icon={faTags} className="ml-2" />
            </li>
            <li className="text-2xl italic flex items-center space-x-1">
              After Sale Service{" "}
              <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
            </li>
            <li className="text-2xl italic flex items-center space-x-1">
              Trust us & Our Brand{" "}
              <FontAwesomeIcon icon={faHandshake} className="ml-2" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
