import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About <span className="underline underline-offset-4 decoration-1 font-light">Estate</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 font-semibold">
        Building with integrity, delivering with excellence.
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src={assets.brand_img} alt="Brand" className="w-full sm:w-1/2 max-w-lg" />

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Industry Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Completed Projects</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20M+</p>
              <p>Sq. Ft. Developed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Developments</p>
            </div>
          </div>

          <p className="my-10 max-w-lg">
            Estate is committed to delivering high-quality real estate projects that meet modern standards in design, 
            sustainability, and functionality. With a strong focus on transparency, timely delivery, 
            and customer satisfaction, we have successfully completed 12+ projects, spanning over 
            20 million sq. ft. across commercial and residential sectors.
          </p>

          {showMore && (
            <div className="text-gray-700 bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-lg">
              <h2 className="text-xl font-semibold mb-2">Our Approach</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Precision-engineered designs that prioritize efficiency.</li>
                <li>Sustainable and eco-friendly practices in every project.</li>
                <li>Strategic locations for better connectivity and convenience.</li>
                <li>Transparent pricing with a customer-first approach.</li>
                <li>Timely delivery backed by efficient project management.</li>
              </ul>
            </div>
          )}

          {/* QR Code Left & Button Right */}
          <div className="flex flex-row items-center gap-8 mt-6">
            {/* QR Code */}
            <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg">
              <p className="text-gray-600 text-sm mb-2 font-medium">Scan to verify</p>
              <QRCode value="https://dharani.telangana.gov.in" size={100} bgColor="transparent" fgColor="#333" />
            </div>

            {/* Learn More Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-blue-600 text-white px-10 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default About;
