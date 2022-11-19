// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";

// import images
import Features1Img from "./assets/features-1.png";
import Features2Img from "./assets/features-2.png";
import ChairImg from "./assets/chair.png";
import BedImg from "./assets/bed.png";
import CupboardImg from "./assets/cupboard.png";
import LightingImg from "./assets/lighting.png";
import Product1Img from "./assets/products/product-1.png";
import Product2Img from "./assets/products/product-2.png";
import Product3Img from "./assets/products/product-3.png";
import Product4Img from "./assets/products/product-4.png";
import Product5Img from "./assets/products/product-5.png";
import Product6Img from "./assets/products/product-6.png";
import Product7Img from "./assets/products/product-7.png";
import Product8Img from "./assets/products/product-8.png";
import Product9Img from "./assets/products/product-9.png";
import Product10Img from "./assets/products/product-10.png";
import TestimonialImg from "./assets/testimonial.png";
import Avatar1Img from "./assets/avatar-1.png";
import Avatar2Img from "./assets/avatar-2.png";
import Avatar3Img from "./assets/avatar-3.png";
import Avatar4Img from "./assets/avatar-4.png";

export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "categories",
    href: "categories",
  },
  {
    name: "products",
    href: "products",
  },
];

export const hero = {
  title: "Your Modern Interior Solution",
  subtitle:
    "We help you to make an elegant and luxurious interior designed by professional interior designers",
  buttonText: "Explore",
};

export const stats = [
  {
    value: "7",
    text: "Year Experience",
  },
  {
    value: "2",
    text: "Opened in the country",
  },
  {
    value: "10k+",
    text: "Furniture sold",
  },
  {
    value: "260+",
    text: "Variant Furniture",
  },
];

export const features = {
  image: <Features1Img />,
  title: "We Create your home more aesthetic",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex.",
  buttonText: "Show Now",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Custom Design",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex.",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Another mouth watering Offer",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex.",
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: "The Best Furniture Makers",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eaque quas deleniti vel mollitia eligendi possimus distinctio explicabo aut beatae.",
  },
};

export const newInStore = {
  title: "New In Store Now",
  subtitle: "Get the latest items immediately with promo prices",
  link: "View all",
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: "cushion",
      image: <ChairImg />,
    },
    {
      name: "bed",
      image: <BedImg />,
    },
    {
      name: "cupboard",
      image: <CupboardImg />,
    },
    {
      name: "lighting",
      image: <LightingImg />,
    },
  ],
};

export const categories = {
  title: "categories",
  subtitle: "lots of categories to choose from",
  ctitle: "Couch",
  cimg: <Features1Img />,
  ctext:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eaque quas deleniti vel mollitia eligendi possimus distinctio explicabo aut beatae.",
  btitle: "Bed",
  bimg: <BedImg />,
  Stitle: "Shelves",
  Simg: <CupboardImg />,
};

export const products = {
  title: "All Products",
  subtitle:
    "The products we provide only for you as our service are selected from the best products with number 1 quality in the world",
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "Ceiling Light",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Wood Chair",
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "Treos Seroes 911",
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "Multi bilderman slibber",
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "XORA corner desk",
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "Black Forest Series Wood",
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: "What people are saying about us",
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: "Josh Smith",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar2Img />,
      name: "Brandi Johns",
      occupation: "Manager at Warner Bros Studio",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar3Img />,
      name: "Paula Pfeffer",
      occupation: "Director at Marvel Cinematic Universe",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
  ],
};

export const newsletter = {
  title: "Get more discount Off your order",
  subtitle: "Join our mailing list",
  placeholder: "Your email address",
  buttonText: "Join Now",
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: "#",
    },
    {
      icon: <IoLogoInstagram />,
      href: "#",
    },
    {
      icon: <IoLogoGithub />,
      href: "#",
    },
    {
      icon: <IoLogoFacebook />,
      href: "#",
    },
  ],
  copyright: "Tori-dev 2022 - All Rights Reserved.",
  crhref: "tori-codes.vercel.app",
};
