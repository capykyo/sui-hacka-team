import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";
const Testimonials: React.FC = () => {
  return (
    <Carousel className=" bg-black text-white py-10 lg:py-20">
      <CarouselItem index={0}>
        <Review by="Axel (xxx)">
          We believe in good communication and a fully transparent development
          process.We believe in good communication and a fully transparent
          development process.We believe in good communication and a fully
          transparent development process.
        </Review>
      </CarouselItem>
      <CarouselItem index={1}>
        <Review by="Axel (xxx)">
          We believe in good communication and a fully transparent development
          process.We believe in good communication and a fully transparent
          development process.We believe in good communication and a fully
          transparent development process.
        </Review>
      </CarouselItem>
      <CarouselItem index={2}>
        <Review by="Axel (xxx)">
          We believe in good communication and a fully transparent development
          process.We believe in good communication and a fully transparent
          development process.We believe in good communication and a fully
          transparent development process.
        </Review>
      </CarouselItem>
      <CarouselItem index={3}>
        <Review by="Axel (xxx)">
          We believe in good communication and a fully transparent development
          process.We believe in good communication and a fully transparent
          development process.We believe in good communication and a fully
          transparent development process.
        </Review>
      </CarouselItem>
      <CarouselItem index={4}>
        <Review by="Axel (xxx)">
          We believe in good communication and a fully transparent development
          process.We believe in good communication and a fully transparent
          development process.We believe in good communication and a fully
          transparent development process.
        </Review>
      </CarouselItem>
    </Carousel>
  );
};

export default Testimonials;
