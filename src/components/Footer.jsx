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
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Contact us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Our Presence
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
                    HoneyComb All Season Polo Collar T-Shirts
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Cotton Poly Blend Pique Polo Collar T-Shirts
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Spun Poly Pique Polo Collar T-Shirts
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    100% Cotton Pique Polo Collar Tshirt
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Sports Micro Polyester Round Neck
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    100% Cotton Single Jersey Round Neck T-Shirts
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">
                Sunstar Apparels Private Limited
              </h3>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span className="font-bold">Tamil Nadu</span>
                </div>
                <p>
                  Netaji Apparel Park, NH544, EETTIVEERAMPALAYAM, New Tirupur,
                  Tamil Nadu 641666
                </p>
              </div>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span className="font-bold">Ahmedabad</span>
                </div>
                <p>201, SG Mall, Thaltej, Ahmedabad-380054, Gujarat India</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone-alt mr-2"></i>
                <span>Phone: +91 94281 18631 +91 88665 00260</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 text-white text-center py-4 mt-8">
          <p>
            © Copyright 2024 | Website design & Developed by{" "}
            <span className="text-yellow-500">Varun Yadav</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
