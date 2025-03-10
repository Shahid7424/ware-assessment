"use client";
import { CiSquarePlus } from "react-icons/ci";
import { useRef } from "react";
import ReviewForm from "./components/ReviewForm";
import Image from "next/image";

import BannerImg from "../app/utilis/Images/ware_innovations_restaurant_crockery.webp";
import WomenImg from "../app/utilis/Images/women.webp";
import Section3Img from "../app/utilis/Images/section3.jpg";
import Section4Img from "../app/utilis/Images/section4.webp";
import Section5Img from "../app/utilis/Images/section5.webp";
import Section7Img from "../app/utilis/Images/section7.webp";
import Form from "./components/Form";
import ImageCarousel from "./components/ImageCrousel";

export default function Home() {
  const reviewFormRef = useRef(null);
  const scrollToReviewForm = () => {
    if (reviewFormRef.current) {
      reviewFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const formRef = useRef(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Section 1 */}
      <div className="relative w-full flex flex-col items-center py-10 md:py-20">
        <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4">
          <div className="relative w-full">
            <Image
              src={BannerImg}
              alt="Ware Innovations Horeca Subscription Banner"
              width={500}
              height={500}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 text-white text-center w-full px-6">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
              Premium Crockery & Tableware for <br className="hidden sm:block" /> Restaurants and Cafes
            </h2>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <section className="container mx-auto px-6 lg:px-20 py-6">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="flex justify-center py-12">
            <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden">
              <Image
                src={WomenImg}
                alt="Uunatii from Ware"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-left mx-10 pr-14">
            <h2 className="text-2xl md:text-2xl font-lg text-gray-700 mb-4">
              Hi, I am Uunatii from Ware.
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We create beautiful ceramic tableware for eateries, from dinner plates to espresso & cappuccino cups.
              Our hospitality tableware is durable for busy hotels or restaurants.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you need pieces for a fancy fine dining spot or restaurant crockery in bulk for your chain, let me know.
              I will help you find pieces tha will make your guests smile 🙂
            </p>
            <button
              onClick={handleScrollToForm}
              className="bg-[#bf5e35] text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="container mx-auto px-6 lg:px-20 py-6">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="text-left">
            <h2 className="text-2xl md:text-2xl font-lg text-gray-700 mb-4 pl-14 mx-10">
              High Quality Tableware
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 pl-14 mx-10">
              Our high-fired stoneware ceramicware is known for its durability, it will last you for many years without losing its finish. All our ceramicware are Microwave, oven, and dishwasher friendly.
            </p>
          </div>
          <div className="flex justify-center py-12">
            <div className="w-80 h-80 md:w-92 md:h-92 lg:w-100 lg:h-100 overflow-hidden">
              <Image src={Section3Img} alt="High Quality Tableware" width={300} height={300} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="container mx-auto px-6 lg:px-20 py-6">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="flex justify-center py-12">
            <div className="w-full h-auto md:w-100 md:h-100 lg:w-100 lg:h-90">
              <Image src={Section4Img} alt="No Minimum Order" width={500} height={500} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="text-center mx-10 pr-14">
            <h2 className="text-2xl md:text-2xl font-lg text-gray-700 mb-4">
              No minimum quantity order
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can order as few as 3 pieces.<br /><br />
              So you do not have to maintain extra stock in your restaurant.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="container mx-auto px-6 lg:px-20 py-6">
        <div className="text-center max-w-4xl mx-auto mt-12">
          <div className="p-4 rounded-lg relative">
            <h2 className="text-3xl font-semibold text-gray-800 mt-20 mb-6">Our Clients</h2>
            <button onClick={scrollToReviewForm} className="absolute -top-6 left-1/2 transform -translate-x-1/2 transition mb-6">
              <CiSquarePlus className="text-orange-500" size={70} />
            </button>
          </div>
        </div>
      </section>

      <ImageCarousel />
      <ReviewForm reviewFormRef={reviewFormRef} />
      <Form formRef={formRef} />
    </>
  );
}
