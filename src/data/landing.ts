import {
  mdiAccountDetails,
  mdiCreditCard,
  mdiFrequentlyAskedQuestions,
  mdiNotebook,
  mdiPoll,
  mdiSquareEditOutline,
} from "@mdi/js";

export const navLink = [
  { text: "Home", url: "/" },
  {
    text: "Products",
    url: "/products",
  },
  {
    text: "Business",
    url: "/business",
  },
  {
    text: "About Us",
    url: "/about-us",
  },
  {
    text: "Support",
    url: "/support",
  },
];

export const productLinks = [
  {
    icon: mdiPoll,
    text: "Finance",
    url: "/finance",
    description:
      "Inventory financing, Asset financing, Working Capital, Local Purchase order and Invoice Discounting.",
    comingSoon: false,
  },

  {
    icon: mdiPoll,
    text: "Saving & Investment",
    url: "/Saving-Investment",
    description: "Save with ARM and Lend with Trade Lenda",
    comingSoon: false,
  },
  {
    icon: mdiCreditCard,
    text: "Payments",
    url: "/payments",
    description: "Free Transfers and Bills Payment",
    comingSoon: false,
  },
];

export const supportLinks = [
  {
    icon: mdiAccountDetails,
    text: "Contact us",
    url: "/contact-us",
    comingSoon: false,
  },
  {
    icon: mdiFrequentlyAskedQuestions,
    text: "FAQ",
    url: "/#faq",
    comingSoon: false,
  },
  {
    icon: mdiSquareEditOutline,
    text: "Terms and condition",
    url: "/T&C",
    comingSoon: false,
  },
  {
    icon: mdiNotebook,
    text: "Blog",
    url: "/blog",
    comingSoon: false,
  },
];
