import { useState, useEffect } from "react";

export default function ImageCarousel() {
  const images = [
    "https://www.wareinnovations.com/cdn/shop/files/Bowls_45_Website_Listing_Shots_1_d32b7aed-0a03-4f1d-ad96-ec4dc57abf74.jpg?v=1718713635&width=540",
    "https://www.wareinnovations.com/cdn/shop/files/Bowls_45_Website_Listing_Shots_2_96560a31-4193-4e5c-8d80-dc203b4a2e54.jpg?v=1718713923&width=540",
    "https://www.wareinnovations.com/cdn/shop/files/club_jolies_mumbai_ware_innovations_restaurant_crockery.jpg?v=1736578911&width=540",
    "https://www.wareinnovations.com/cdn/shop/files/Bowls_45_Website_Listing_Shots_1_d32b7aed-0a03-4f1d-ad96-ec4dc57abf74.jpg?v=1718713635&width=540",
    "https://www.wareinnovations.com/cdn/shop/files/Bowls_45_Website_Listing_Shots_2_96560a31-4193-4e5c-8d80-dc203b4a2e54.jpg?v=1718713923&width=540",
    "https://www.wareinnovations.com/cdn/shop/files/club_jolies_mumbai_ware_innovations_restaurant_crockery.jpg?v=1736578911&width=540",
  ];

  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Update images per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };

    updateItemsPerView(); // Initial check
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto p-4 rounded-lg">
      {/* Responsive Grid - 1 image on mobile, 3 on desktop */}
      <div className={`grid gap-4 ${itemsPerView === 1 ? "grid-cols-1" : "grid-cols-3"}`}>
        {Array.from({ length: itemsPerView }).map((_, i) => {
          const imgIndex = (index + i) % images.length; // Ensure proper cycling
          return (
            <img
              key={imgIndex}
              src={images[imgIndex]}
              alt={`Slide ${imgIndex + 1}`}
              className="w-full h-60 md:h-80 object-cover rounded-lg shadow-md transition-all duration-500 ease-in-out"
            />
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#bf5e35] text-white p-2 md:p-3 rounded-full"
      >
        {"<"}
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#bf5e35] text-white p-2 md:p-3 rounded-full"
      >
        {">"}
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: Math.ceil(images.length / itemsPerView) }).map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${
              i === Math.floor(index / itemsPerView) ? "bg-gray-900" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
