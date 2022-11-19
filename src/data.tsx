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
import Sofa from "./assets/sofa.jpeg";
import Bedroom from "./assets/bedroom.jpeg";
import Dinning from "./assets/dinning.jpeg";
import Kitchen from "./assets/kitchen.jpeg";
import Product2Img from "./assets/products/product-2.png";
import Product3Img from "./assets/products/product-3.png";
import Product4Img from "./assets/products/product-4.png";
import Product5Img from "./assets/products/product-5.png";
import Product7Img from "./assets/products/product-7.png";
import Product8Img from "./assets/products/product-8.png";
import Product9Img from "./assets/products/product-9.png";
import Product10Img from "./assets/products/product-10.png";
import TestimonialImg from "./assets/testimonial.png";
import Avatar1Img from "./assets/tori.jpg";
import Avatar2Img from "./assets/avatar-2.png";
import Avatar3Img from "./assets/avatar-3.png";

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
  title: "prince furniture enterprise",
  subtitle:
    "We help you to make an elegant and luxurious interior designed by professional interior designers",
  buttonText: "Explore",
};

export const stats = [
  {
    value: "5",
    text: "Year Experience",
  },
  {
    value: "100+",
    text: "Variant Furniture",
  },
  {
    value: "100+",
    text: "Furniture sold",
  },
  {
    value: "50+",
    text: "Happy Customers",
  },
];

export const features = {
  image: <Features1Img />,
  title: "We make your home more aesthetic",
  buttonText: "Show Now",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Custom Design",
      subtitle:
        "We make and customize furnitures to suite the taste of our clients.",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Variety of products",
      subtitle:
        "Choose from thousands of designs the meets your requirements.",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Installation",
      subtitle:
        "We provide installation services after delivery.",
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: "The Best Furniture Makers",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eaque quas deleniti vel mollitia eligendi possimus distinctio explicabo aut beatae.",
  },
};

export const categories = {
  title: "categories",
  ctitle: "Sofa Sets",
  cimg: <Sofa />,
  ctext:
    "The living room is where we spend long hours of the day watching television, reading books, hosting guests or relaxing; it stands out as one of the mosst important and decorated living spaces.",
  btitle: "Bedroom Sets",
  bimg: <Bedroom />,
  btext: 'We make bedroom sets that are aesthetic, comfortable and enriched with useful details.',
  dtitle: "Dining Room Sets",
  dtext: 'Our dining room sets are collections of mirrored console, console, dinning table and chairs designed with colors that appeal, making your home stand out and reflect the spirit of home.',
  dimg: <Dinning />,
  ktitle: "Kitchen Sets",
  ktext: 'Our kitchen sets are collections of mirrored console, console, cabinets, drawers and chairs designed with colors that appeal, making your home stand out with the ultimate cooking experience.',
  kimg: <Kitchen />,
};

export const products = {
  title: "All Products",
  subtitle:
    "The products we provide only for you as our service are selected from the best products with number 1 quality in the world",
  pages: [
    {
      productList: [

        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Wood Chair",
          price: 7000,
          oldPrice: 13000,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 15000,
          oldPrice: 18000,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 25999,
          oldPrice: 39999,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "Treos Seroes 911",
          price: 9999,
          oldPrice: 19999,
        },

        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "XORA corner desk",
          price: 9999,
          oldPrice: 12999,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "Black Forest Series Wood",
          price: 19599,
          oldPrice: 26999,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 12899,
          oldPrice: 19000,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 37899,
          oldPrice: 45000,
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
      name: "Victory Akpofure",
      occupation: "C.E.O ToriDev",
      message:
        "“They are have a perfect touch for make something so professional, stunning and useful for a lot of people .”",
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
  title: "Get more discount Off our Black Friday deals",
  buttonText: "Get Deals",
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
      icon: <IoLogoFacebook />,
      href: "#",
    },
  ],
  copyright: "Tori-dev 2022 - All Rights Reserved.",
  crhref: "tori-codes.vercel.app",
};
