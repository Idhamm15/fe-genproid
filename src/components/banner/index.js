import react from 'react'
import { Carousel } from 'flowbite-react';
import gambar1 from '../../assets/Morning View Landscape.jpeg'

function Banner() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h">
      <Carousel>
        <img src={gambar1} alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
  );
}

export default Banner;
