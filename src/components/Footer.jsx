import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-b from-[#F1F1F1] text-gray-800 border-t-2 border-gray-700">
        <div className="container mx-auto pt-12 px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Products
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Ready Stock
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Customized Orders
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Bulk Orders
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    ODM Orders
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    OEM Orders
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Shirts
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Pants
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    T-Shirts
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Night Suits
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Scrub Suits
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Indithrobgoeasy</h3>
              <div className="mb-4">
                {/* <div className="flex items-center mb-2">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span className="font-bold">Tamil Nadu</span>
                </div> */}
                <p>Vadodara Gujarat India</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone-alt mr-2"></i>
                <span>Phone: +91 99243 33945</span>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom Section */}
        <div className="bg-gray-800 text-white text-center py-4 mt-8">
          <p>
            All Rights Reserved{" "}
            <span className="font-bold">Indithrobgoeasy </span>Managed By{" "}
            <a
              href="https://www.taniyawebfix.com/"
              target="_blank"
              className="hover:cursor-pointer hover:underline text-blue-600"
            >
              TaniyaWebfix Pvt.Ltd
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
