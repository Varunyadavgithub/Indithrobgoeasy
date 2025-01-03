import logo from "./logo2.png";
import Hero_image from "./hero_image.jpg";
import about_us from "./about_us.webp";

import shirt_01 from "./product_Images/shirt_01.jpeg";
import shirt_02 from "./product_Images/shirt_02.webp";
import shirt_03 from "./product_Images/shirt_03.jpg";
import shirt_04 from "./product_Images/shirt_04.jpg";

import pants_01 from "./product_Images/pants_01.jpeg";
import pants_02 from "./product_Images/pants_02.jpeg";
import pants_03 from "./product_Images/pants_03.jpeg";
import pants_04 from "./product_Images/pants_04.jpeg";

import tshirt_01 from "./product_Images/tshirt_01.webp";
import tshirt_02 from "./product_Images/tshirt_02.webp";
import tshirt_03 from "./product_Images/tshirt_03.jpg";
import tshirt_04 from "./product_Images/tshirt_04.webp";

import Night_Suits_01 from "./product_Images/Night_Suits_01.webp";
import Night_Suits_02 from "./product_Images/Night_Suits_02.webp";
import Night_Suits_03 from "./product_Images/Night_Suits_03.webp";
import Night_Suits_04 from "./product_Images/Night_Suits_04.webp";

import Scrub_Suits_01 from "./product_Images/Scrub_Suits_01.webp";
import Scrub_Suits_02 from "./product_Images/Scrub_Suits_02.webp";
import Scrub_Suits_03 from "./product_Images/Scrub_Suits_03.webp";
import Scrub_Suits_04 from "./product_Images/Scrub_Suits_04.webp";

export const assets = { logo, Hero_image, about_us };

export const products = [
  // Shirts
  {
    id: 1,
    title: "Classic Formal Shirt",
    price: 25.5,
    description:
      "Premium quality formal shirt made with soft cotton fabric, ideal for office wear and formal occasions.",
    category: "Shirts",
    image: shirt_01,
    rating: {
      rate: 4.3,
      count: 312,
    },
  },
  {
    id: 2,
    title: "Casual Denim Shirt",
    price: 30.0,
    description:
      "A stylish denim shirt perfect for casual outings. Durable material with a modern fit.",
    category: "Shirts",
    image: shirt_02,
    rating: {
      rate: 4.6,
      count: 410,
    },
  },
  {
    id: 3,
    title: "Classic Formal Shirt",
    price: 25.5,
    description:
      "Premium quality formal shirt made with soft cotton fabric, ideal for office wear and formal occasions.",
    category: "Shirts",
    image: shirt_03,
    rating: {
      rate: 4.3,
      count: 312,
    },
  },
  {
    id: 4,
    title: "Classic Formal Shirt",
    price: 25.5,
    description:
      "Premium quality formal shirt made with soft cotton fabric, ideal for office wear and formal occasions.",
    category: "Shirts",
    image: shirt_04,
    rating: {
      rate: 4.3,
      count: 312,
    },
  },

  // Pants
  {
    id: 5,
    title: "Slim Fit Chinos",
    price: 28.5,
    description:
      "Comfortable slim-fit chinos made with stretchable fabric for all-day wear.",
    category: "Pants",
    image: pants_01,
    rating: {
      rate: 4.1,
      count: 287,
    },
  },
  {
    id: 6,
    title: "Classic Formal Trousers",
    price: 40.0,
    description:
      "Elegant formal trousers with wrinkle-free material, ideal for office and formal events.",
    category: "Pants",
    image: pants_02,
    rating: {
      rate: 4.8,
      count: 120,
    },
  },
  {
    id: 7,
    title: "Slim Fit Chinos",
    price: 28.5,
    description:
      "Comfortable slim-fit chinos made with stretchable fabric for all-day wear.",
    category: "Pants",
    image: pants_03,
    rating: {
      rate: 4.1,
      count: 287,
    },
  },
  {
    id: 8,
    title: "Classic Formal Trousers",
    price: 40.0,
    description:
      "Elegant formal trousers with wrinkle-free material, ideal for office and formal events.",
    category: "Pants",
    image: pants_04,
    rating: {
      rate: 4.8,
      count: 120,
    },
  },

  // T-Shirts
  {
    id: 9,
    title: "Graphic Printed T-Shirt",
    price: 15.0,
    description:
      "Trendy graphic T-shirt made from breathable cotton fabric, available in various designs.",
    category: "T-Shirts",
    image: tshirt_01,
    rating: {
      rate: 4.2,
      count: 450,
    },
  },
  {
    id: 10,
    title: "Solid Crew Neck T-Shirt",
    price: 12.0,
    description:
      "Classic crew neck T-shirt in solid colors, perfect for casual wear.",
    category: "T-Shirts",
    image: tshirt_02,
    rating: {
      rate: 3.9,
      count: 560,
    },
  },
  {
    id: 11,
    title: "Graphic Printed T-Shirt",
    price: 15.0,
    description:
      "Trendy graphic T-shirt made from breathable cotton fabric, available in various designs.",
    category: "T-Shirts",
    image: tshirt_03,
    rating: {
      rate: 4.2,
      count: 450,
    },
  },
  {
    id: 12,
    title: "Solid Crew Neck T-Shirt",
    price: 12.0,
    description:
      "Classic crew neck T-shirt in solid colors, perfect for casual wear.",
    category: "T-Shirts",
    image: tshirt_04,
    rating: {
      rate: 3.9,
      count: 560,
    },
  },

  // Night Suits
  {
    id: 13,
    title: "Women's Satin Nightwear Set",
    price: 20.0,
    description:
      "Elegant satin nightwear with a silky finish for ultimate comfort and style.",
    category: "Night Suits",
    image: Night_Suits_01,
    rating: {
      rate: 4.4,
      count: 230,
    },
  },
  {
    id: 14,
    title: "Men's Cotton Night Suit",
    price: 35.0,
    description:
      "Soft and comfortable nightwear set with a relaxed fit for a good night's sleep.",
    category: "Night Suits",
    image: Night_Suits_02,
    rating: {
      rate: 4.5,
      count: 310,
    },
  },
  {
    id: 15,
    title: "Men's Cotton Night Suit",
    price: 20.0,
    description:
      "Soft and comfortable nightwear set with a relaxed fit for a good night's sleep.",
    category: "Night Suits",
    image: Night_Suits_03,
    rating: {
      rate: 4.4,
      count: 230,
    },
  },
  {
    id: 16,
    title: "Women's Satin Nightwear Set",
    price: 35.0,
    description:
      "Elegant satin nightwear with a silky finish for ultimate comfort and style.",
    category: "Night Suits",
    image: Night_Suits_04,
    rating: {
      rate: 4.5,
      count: 310,
    },
  },

  // Scrub Suits
  {
    id: 17,
    title: "Unisex Medical Scrub Suit",
    price: 22.0,
    description:
      "Lightweight, breathable scrub suit designed for healthcare professionals. Easy to clean and durable.",
    category: "Scrub Suits",
    image: Scrub_Suits_01,
    rating: {
      rate: 4.6,
      count: 540,
    },
  },
  {
    id: 18,
    title: "Nurse Scrub Suit",
    price: 25.0,
    description:
      "Comfortable and stylish scrub suit for nurses, featuring multiple pockets for convenience.",
    category: "Scrub Suits",
    image: Scrub_Suits_02,
    rating: {
      rate: 4.7,
      count: 620,
    },
  },
  {
    id: 19,
    title: "Unisex Medical Scrub Suit",
    price: 22.0,
    description:
      "Lightweight, breathable scrub suit designed for healthcare professionals. Easy to clean and durable.",
    category: "Scrub Suits",
    image: Scrub_Suits_03,
    rating: {
      rate: 4.6,
      count: 540,
    },
  },
  {
    id: 20,
    title: "Nurse Scrub Suit",
    price: 25.0,
    description:
      "Comfortable and stylish scrub suit for nurses, featuring multiple pockets for convenience.",
    category: "Scrub Suits",
    image: Scrub_Suits_04,
    rating: {
      rate: 4.7,
      count: 620,
    },
  },
];
