import FaqTabs from "../components/FaqTabs";

const Faq = () => {
  return (
    <section className="max-w-[900px] mx-auto py-20">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-Very-Dark-Blue font-medium text-[1.6rem] lg:text-[2rem] text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-Grayish-Blue max-w-[29rem] lg:text-[1rem] text-center">
          Here are some of our FAQs. If you have any other questions you&apos;d
          like answered, please feel free to email us.
        </p>
      </div>
      <div className="py-10 px-6">
        <FaqTabs />
        <div className="flex gap-4 justify-center mt-10">
          <a
            href=""
            className="px-6 py-3 flex items-center justify-center bg-Soft-Blue text-white rounded-md shadow-lg"
          >
            More Info
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
