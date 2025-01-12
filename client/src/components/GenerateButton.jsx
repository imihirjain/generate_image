import { assets } from "../assets/assets";
const GenerateButton = () => {
  return (
    <div className="pb-16 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">
        See the magic. Try now
      </h1>
      <button className="inline-flex items-center gap-2 px-12 py-3 rounded-full text-white bg-black transition-all duration-500 hover:scale-105 m-auto">
        Generate Images
        <img src={assets.star_group} className="h-6" alt="" />
      </button>
    </div>
  );
};

export default GenerateButton;
