import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 py-8 sm:px-6 md:flex-row md:px-8">

        {/* Left Content */}
        <div className="w-full text-center md:w-[50%] md:text-left">
          <h2 className="text-[2rem] font-bold leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl">
            Build Your Ideal
            <span className="mt-2 block bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-[1.6rem] font-bold text-transparent sm:text-[2.2rem] md:mt-0 md:inline md:text-[3.2rem] lg:text-[4rem]">
              {" "}Development Stack
            </span>
          </h2>

          <p className="mx-auto max-w-xl py-5 text-sm text-[#475569] sm:text-base md:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="my-3 flex flex-row items-center justify-center gap-3 sm:justify-center md:justify-start">
            <button className="h-10 w-[150px] cursor-pointer rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 px-2 text-xs font-semibold text-white hover:opacity-90 sm:w-42 sm:text-sm md:w-[190px] md:text-base">
              Explore Technologies
            </button>

            <button className="h-10 w-[150px] cursor-pointer rounded-lg border border-gray-300 bg-white px-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 sm:w-42 sm:text-sm md:w-[150px] md:text-base">
              Learn More
            </button>
          </div>
        </div>

        {/* Banner Image */}
        <div className="w-full md:w-[50%]">
          <img
            src={BannerImage}
            alt="Development stack"
            className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-md"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;