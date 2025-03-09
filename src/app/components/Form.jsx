import { useState } from "react";

export default function Form({ formRef }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen mx-20 px-4">
      <div
        ref={formRef}
        className=" container w-full mx-20 p-6 md:p-8  text-center"
      >
        {isSubmitted ? (
          <h3 className="text-2xl font-semibold text-green-600">
            Thank you for reaching out!
          </h3>
        ) : (
          <>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Request a Horeca Catalogue
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border rounded-md w-full focus:ring focus:ring-orange-300"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border rounded-md w-full focus:ring focus:ring-orange-300"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-3 border rounded-md w-full focus:ring focus:ring-orange-300"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border rounded-md w-full focus:ring focus:ring-orange-300"
                  required
                />
              </div>

              <textarea
                placeholder="Your Message"
                className="p-3 border rounded-md w-full focus:ring focus:ring-orange-300"
                rows="4"
                required
              ></textarea>

              <button
                type="submit"
                className="w-50 bg-[#bf5e35] text-white p-3 rounded-md hover:bg-orange-600 transition"
              >
                Send
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
