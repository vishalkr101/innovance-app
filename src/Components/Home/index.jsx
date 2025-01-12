import Carousel from "../Carousels";
import carouselImage from "../../assets/carouselImage.jpg";

const Home = () => {
  
  const images = [
    carouselImage,
    carouselImage,
    carouselImage
  ]
  return (
    <div>
      <Carousel items={images}/>
    </div>
  )
}

export default Home