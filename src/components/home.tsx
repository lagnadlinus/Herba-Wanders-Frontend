



import React from "react";
import maintenanceImg from '../assets/images/maintenance.png'; // adjust the path as needed


const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#041804] text-center p-6">
      <h1 className="text-3xl md:text-5xl font-bold text-[#ffffff] mb-4">
        Website Under Maintenance
      </h1>
      <p className="text-lg text-white max-w-3xl mx-auto">
        We are currently working on improvements to enhance your experience. Please check back soon!
      </p>
      <img 
        src={maintenanceImg}
        alt="Maintenance"
        className="mt-6 w-48 md:w-56 object-contain mx-auto"
      />


      <a 
        href="https://www.flaticon.com/free-icons/maintenance"
        title="maintenance icons"
        className="text-sm text-green-400 hover:underline mt-4 block"
      >
        Maintenance icons created by redempticon - Flaticon
      </a>

    </div>
  );
};

export default Home;
