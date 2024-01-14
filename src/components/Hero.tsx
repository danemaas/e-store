import { ArrowRight } from "lucide-react";

import handIcon from "../assets/hand_icon.png";
import heroImage from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="text-base bg-gradient-to-b from-cyan-400 to-white">
      <div className="container mx-auto py-5 px-2 md:px-0 flex">
        <div className="flex-1 flex flex-col justify-center gap-5 ps-[180px]">
          <h2 className="text-3xl font-semibold">NEW ARRIVALS ONLY</h2>
          <div>
            <div className="flex items-center gap-5">
              <p className="text-7xl font-bold">new</p>
              <img src={handIcon} alt="hand icon" className="w-[80px]" />
            </div>
            <p className="text-7xl font-bold">collections</p>
            <p className="text-7xl font-bold">for everyone</p>
          </div>
          <button className="flex justify-center items-center gap-4 w-[310px] h-[70px] rounded-md mt-8 bg-cyan-600 text-white text-xl font-medium hover:bg-cyan-600/70 hover:scale-105 transition-all duration-200">
            <p>Latest Collection</p>
            <ArrowRight />
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
