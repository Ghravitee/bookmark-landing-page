import { useState } from "react";

import Collapse from "react-collapse";

const tabs = [
  {
    title: "What is Bookmark?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    title: "How can I request a new browser?",
    content:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. ",
  },
  {
    title: "Is there a mobile app?",
    content:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    title: "What about other Chromium browsers?",
    content:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit",
  },
];

const FaqTabs = () => {
  const [activeTab, setActiveTab] = useState(null); // Start with no active tab

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index); // Toggle tab open/close
  };

  return (
    <div className="w-full max-w-[600px] mx-auto mt-10 p-4">
      <div className="flex flex-col justify-between border-t first-of-type:border-t-0 lg:first-of-type:border-t border-t-Grayish-Blue">
        {tabs.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 py-6 border-b border-b-Grayish-Blue"
          >
            <button
              className="flex items-center justify-between cursor-pointer group"
              onClick={() => toggleTab(index)}
            >
              <h3
                className={`text-Very-Dark-Blue group-hover:text-Soft-Red font-medium lg:text-[1.1rem]`}
              >
                {item.title}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                className={`
                  ${
                    activeTab === index
                      ? "rotate-180 duration-300 ease-in fill-Soft-Red"
                      : ""
                  }
                `}
              >
                <path
                  className={`${
                    activeTab === index
                      ? "stroke-Soft-Red"
                      : "stroke-Very-Dark-Blue"
                  }`}
                  fill="none"
                  strokeWidth="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
              {/* <img
                src={arrow}
                alt="arrow icon"
                className={
                  activeTab === index ? "rotate-180 duration-300 ease-in" : ""
                }
              /> */}
            </button>
            <Collapse isOpened={activeTab === index}>
              <div className="pt-4 text-[1.1rem] text-Grayish-Blue font-normal">
                {item.content}
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqTabs;
