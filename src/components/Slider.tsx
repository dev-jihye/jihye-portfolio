import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";

interface Islider {
  imgs: string[];
}

export default function Slider({ imgs }: Islider) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imgsLength = imgs.length - 1;
  const nextBtn = () => {
    if (currentSlide >= imgsLength) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevBtn = () => {
    if (currentSlide === 0) {
      setCurrentSlide(imgsLength);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  return (
    <>
      <div className="w-[500px] overflow-hidden mr-4 rounded-md shrink-0">
        <div className="w-[400%]">
          <div
            className="relative flex overflow-hidden duration-300 ease-in-out rounded-md"
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            {imgs.map((img, index) => (
              <div
                className="w-[500px] flex items-center bg-white rounded-md overflow-hidden"
                key={index}
              >
                <img src={img} alt="thumbnail" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button onClick={prevBtn}>
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button onClick={nextBtn}>
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
}
