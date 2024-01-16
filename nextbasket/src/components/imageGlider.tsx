import React, { useState } from "react";
import Image from "next/image";
interface ImageSliderProps {
  images: string[];
}
const ImageSlider: React.FC<ImageSliderProps> = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const previousImageIndex =
    currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
  const nextImageIndex =
    currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div className="md:w-[506px] md:h-[450px] w-[348px] h-[277px]">
        <Image
          width={506}
          height={450}
          className="object-fill md:w-[506px] md:h-[450px] w-[348px] h-[277px]"
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <div className="absolute p-10 top-[40%] left-0 translateY(-50%) flex flex-row items-center justify-between md:w-[506px] w-[348px]">
          <Image
            onClick={handlePrevious}
            alt=""
            width={23.87}
            height={44.07}
            src="/images/prevImage.svg"
            className="cursor-pointer"
          />
          <Image
            onClick={handleNext}
            alt=""
            width={23.87}
            height={44.07}
            src="/images/nextImage.svg"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-row mt-4 gap-4">
        <Image
          width={100}
          height={75}
          className="object-fill w-[100px] h-[75px] "
          src={images[previousImageIndex]}
          alt={`Image ${previousImageIndex + 1}`}
        />
        <Image
          width={100}
          height={75}
          className="object-fill w-[100px] h-[75px] "
          src={images[nextImageIndex]}
          alt={`Image ${nextImageIndex + 1}`}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
