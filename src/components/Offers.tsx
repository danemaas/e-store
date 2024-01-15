import exclusive_img from "../assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="container h-[60vh] flex mx-auto px-[140px] bg-gradient-to-b from-cyan-400/50 to-white">
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-6xl font-semibold">
          Exclusive <br />
          Offers For You
        </h2>
        <p className="text-2xl font-semibold">Only on best sellers products</p>
        <button className="w-[282px] h-[70px] rounded-md bg-cyan-700 text-white text-xl mt-8 cursor-pointer hover:bg-cyan-700/70 hover:scale-105 transition-all duration-200">
          Check Now
        </button>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <img src={exclusive_img} alt="exclusive offer image" />
      </div>
    </div>
  );
};

export default Offers;
