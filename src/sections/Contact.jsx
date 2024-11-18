import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      // Submit the form (or perform other actions)
      console.log("Form submitted:", email);
    } else {
      setError("Whoops, make sure it's an email.");
    }
  };
  return (
    <section className="bg-Soft-Blue py-24 px-8">
      <div className="max-w-[500px] text-center mx-auto">
        <h4 className="text-white mb-10 uppercase tracking-widest">
          35,000+ Already joined
        </h4>
        <h2 className="text-[1.5rem] lg:text-[2.2rem] font-medium text-white mb-6">
          Stay up-to-date with what we&apos;re doing
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:grid grid-cols-[.65fr_.35fr] lg:items-start gap-4"
        >
          <div
            className={`${
              error && "bg-Soft-Red px-[2px] pt-[2px] w-full  rounded-lg"
            }`}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className={`rounded-md py-3 w-full px-4 ${
                error && "bg-error bg-no-repeat bg-[95%_50%]"
              } `}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <p className="text-white p-1 text-[0.8rem] text-left italic">
                {error}
              </p>
            )}
          </div>
          <button className="px-8 py-3 flex items-center w-full justify-center text-base bg-Soft-Red rounded-lg text-white">
            Contact us
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
