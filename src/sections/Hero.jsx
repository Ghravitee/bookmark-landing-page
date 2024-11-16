import illustration from "../assets/illustration-hero.svg";

const Hero = () => {
  return (
    <section className="max-w-[1300px] mx-auto py-20 lg:py-8 px-4">
      <div className="flex flex-col-reverse lg:grid grid-cols-[.45fr_.55fr] justify-between items-center ">
        <div className="mt-20 lg:mt-0">
          <h1 className="text-center lg:text-left text-[2rem] lg:text-[2.7rem] leading-tight font-medium mb-6 mx-auto lg:mx-0 max-w-[22rem] lg:max-w-[30rem]">
            A Simple Bookmark Manager
          </h1>
          <p className="text-Grayish-Blue max-w-[27rem] mb-6 text-center lg:text-left">
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href=""
              className="px-4 py-3 flex items-center justify-center bg-Soft-Blue text-white rounded-md hover:bg-white hover:text-Soft-Blue border-2 hover:border-Soft-Blue"
            >
              Get it on Chrome
            </a>
            <a
              href=""
              className="px-4 py-3 flex items-center justify-center bg-Grayish-Blue/10 text-Very-Dark-Blue rounded-md shadow-lg hover:bg-white hover:text-Very-Dark-Blue border-2 hover:border-Very-Dark-Blue"
            >
              Get it on Firefox
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={illustration}
            alt="The image of the hero section"
            className="w-full"
          />
          <div className="absolute -z-10 -right-[19.5%] md:-right-[40%] -bottom-[5%] w-full md:min-w-[120%] h-[80%] bg-Soft-Blue rounded-l-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
