import FeaturesTab from "../components/FeaturesTab";

const Features = () => {
  return (
    <section className="py-8 max-w-[1300px] mx-auto px-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-Very-Dark-Blue font-medium text-[1.6rem] lg:text-[2rem] text-center">
          Features
        </h2>
        <p className="text-Grayish-Blue max-w-[29rem] lg:text-[1rem] text-center">
          Our aim is to make it quick and easy to access your favorite websites.
          Your bookmarks sync between your devices so you can access them on the
          go.
        </p>
      </div>

      <FeaturesTab />
    </section>
  );
};

export default Features;
