"use client";
import React, { useState } from "react";

interface QuoteFormData {
  item: string;
  details: string;
  quantity: number;
  unit: string;
}

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    item: "",
    details: "",
    quantity: 0,
    unit: "pcs",
  });

  //   const handleTextareaChange = (
  //     event: React.ChangeEvent<HTMLTextAreaElement>
  //   ) => {
  //     const { name, value } = event.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //   const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = event.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div className="container mb-10 mx-auto mt-[2rem]">
      <div className="bg-gradient-to-r from-[#FF0000] to-[black] flex md:flex-row flex-col justify-center lg:gap-0 gap-8 md:gap-4 text-white rounded-lg py-8 px-8">
        <div>
          <h1 className="text-3xl lg:w-1/2 font-semibold">
            Sign In today for latest updates.
          </h1>
          <p className="mt-4 text-white lg:w-1/2">
            Sign in for latest updates and stay tuned with us and get amazing
            products.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/3 p-4 bg-white rounded-lg"
        >
          <div className="flex flex-col gap-4">
            <div className="text-center item-center">
              <h3 className="text-black font-bold text-xl mb-4">SIGN UP </h3>
              <div className="flex-1 text-start">
                <label
                  htmlFor="details"
                  className="block p-2 font-bold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="item"
                  name="item"
                  value={formData.item}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Enter your  Email "
                  required
                />
              </div>
            </div>
            <div className="flex-1">
              <label
                htmlFor="details"
                className="block p-2 font-bold text-gray-700"
              >
                Password
              </label>
              <input
                type="text"
                id="item"
                name="item"
                value={formData.item}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-red-500 py-2 px-4 rounded mt-4"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
