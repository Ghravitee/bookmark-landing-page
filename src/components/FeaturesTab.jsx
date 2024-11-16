import { useState } from "react";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";

const tabs = [
  {
    title: "Simple Bookmarking",
    content: <Feature1 />,
  },
  {
    title: "Speedy Searching",
    content: <Feature2 />,
  },
  {
    title: "Easy Sharing",
    content: <Feature3 />,
  },
];

const FeaturesTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="w-full max-w-[35rem] mx-auto mt-10 p-4">
        <div className="flex flex-col lg:flex-row justify-between lg:border-y-0 border-y border-y-Grayish-Blue lg:border-b lg:border-b-Grayish-Blue ">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-4 lg:py-2 px-4 font-normal text-Grayish-Blue hover:text-Soft-Red ${
                activeTab === index
                  ? "text-Very-Dark-Blue font-medium border-b-[3px] border-Soft-Red w-fit mx-auto "
                  : " border-b-Grayish-Blue lg:border-b-0 border-t border-b border-t-Grayish-Blue lg:border-t-0"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6 max-w-[1000rem] mx-auto ">
        {tabs[activeTab].content}
      </div>
    </>
  );
};

export default FeaturesTab;
