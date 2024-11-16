import featureIllustration3 from "../assets/illustration-features-tab-3.svg";

const Feature3 = () => {
  return (
    <div className="pt-10 pb-40 max-w-[1300px] mx-auto">
      <div className="flex flex-col lg:grid grid-cols-[.6fr_.4fr] items-center ">
        <div className="relative lg:w-[75%] w-full lg:ml-24 ml-0">
          <img
            src={featureIllustration3}
            alt="The second feature illustration"
            className="w-full"
          />
          <div className="absolute -z-10 -left-[47.5%] -bottom-[10%] min-w-[135%] h-[90%] bg-Soft-Blue rounded-r-full" />
        </div>
        <div className="mt-20 lg:mt-0">
          <h1 className="text-center lg:text-left text-[2rem] lg:text-[2rem] leading-tight font-medium mb-6 mx-auto lg:mx-0 max-w-[22rem] lg:max-w-[30rem]">
            Share your bookmarks
          </h1>
          <p className="text-Grayish-Blue max-w-[27rem] mb-6 text-center lg:text-left lg:text-[1.1rem]">
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href=""
              className="px-6 py-3 flex items-center justify-center bg-Soft-Blue text-white rounded-md shadow-lg"
            >
              More Info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature3;
