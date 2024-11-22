import { FaLeaf } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const EcoFriendlyFeatures = ({ adventures }) => {
  const ecoFeatures = Array.from(
    new Set(adventures.flatMap((adventure) => adventure.ecoFriendlyFeatures))
  );

 
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-10 mt-20 text-[#2ECC71]">
        Eco-Friendly Features Across Adventures
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {ecoFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md"
            data-aos="fade-up"
          >
            <FaLeaf className="text-green-500 text-2xl" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default EcoFriendlyFeatures;
