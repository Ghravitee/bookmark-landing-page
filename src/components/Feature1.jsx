import featureIllustration1 from "../assets/illustration-features-tab-1.svg";

const Feature1 = () => {
  return (
    <div className="pt-10 pb-40 max-w-[1300px] mx-auto">
      <div className="flex flex-col lg:grid grid-cols-[.6fr_.4fr] items-center ">
        <div className="relative lg:w-[75%] w-full lg:ml-24 ml-0">
          <img
            src={featureIllustration1}
            alt="The first feature illustration"
            className="w-full"
          />
          <div className="absolute -z-10 -left-[50.5%] -bottom-[25%] min-w-[130%] h-[95%] bg-Soft-Blue rounded-r-full" />
        </div>
        <div className="mt-20 lg:mt-0">
          <h1 className="text-center lg:text-left text-[2rem] lg:text-[2rem] leading-tight font-medium mb-6 mx-auto lg:mx-0 max-w-[22rem] lg:max-w-[30rem]">
            Bookmark in one click
          </h1>
          <p className="text-Grayish-Blue max-w-[27rem] mb-6 text-center lg:text-left lg:text-[1.1rem]">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favorite sites
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

export default Feature1;
