import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 py-8 md:flex-row">

        {/* Left Content */}
        <div className="w-full md:w-[50%]">
          <h2 className="text-4xl font-bold md:text-6xl">
            Build Your Ideal
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text font-bold text-transparent">
              {" "}Development Stack
            </span>
          </h2>

          <p className="py-5 text-[#475569]">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="my-3 flex gap-4">
            <button className="h-10 w-42 cursor-pointer rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 font-semibold text-white hover:opacity-90">
              Explore Technologies
            </button>

            <button className="h-10 w-42 cursor-pointer rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Banner Image */}
        <div className="w-full md:w-[50%]">
          <img
            src={BannerImage}
            alt="Development stack"
            className="mx-auto w-full max-w-md"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;