import chrome from "../assets/logo-chrome.svg";
import firefox from "../assets/logo-firefox.svg";
import opera from "../assets/logo-opera.svg";

const extensions = [
  {
    icon: chrome,
    title: "Add to Chrome",
    description: "Minimum version 63",
  },
  {
    icon: firefox,
    title: "Add to Firefox",
    description: "Minimum version 55",
  },
  {
    icon: opera,
    title: "Add to Opera",
    description: "Minimum version 46",
  },
];

const Extensions = () => {
  return (
    <section className="py-8 max-w-[1100px] mx-auto px-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-Very-Dark-Blue font-medium text-[1.6rem] lg:text-[2rem] text-center">
          Download the extension
        </h2>
        <p className="text-Grayish-Blue max-w-[29rem] lg:text-[1rem] text-center">
          We&apos;ve got more browsers in the pipeline. Please do let us know if
          you&apos;ve got a favorite you&apos;d like us to prioritize
        </p>
      </div>

      <div className="max-w-[900px] mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {extensions.map((item, index) => (
            <div
              key={item.title}
              className={`${
                index === 1
                  ? "lg:translate-y-10"
                  : index === 2
                  ? "lg:translate-y-20"
                  : ""
              } myShadow pt-10 pb-6 rounded-xl mx-auto max-w-[500px] w-full`}
            >
              <div className="flex items-center flex-col gap-6 px-8">
                <img src={item.icon} alt={item.description} />
                <h3 className="text-Very-Dark-Blue font-medium lg:text-[1.2rem]">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center justify-center mt-2 px-8">
                <p className="text-Grayish-Blue font-normal">
                  {item.description}
                </p>
              </div>
              <div className="bg-dot bg-repeat bg-contain h-[4px] my-8"></div>
              <div className="px-8">
                <a
                  href="#"
                  className="px-4 py-3 flex justify-center items-center bg-Soft-Blue text-white font-medium rounded-lg hover:bg-white hover:text-Soft-Blue border-2 hover:border-Soft-Blue"
                >
                  Add & Install Extension
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extensions;
