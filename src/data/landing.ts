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
    url: "/loan_for_business",
    description:
      "Inventory financing, Asset financing, Working Capital, Local Purchase order and Invoice Discounting.",
    comingSoon: false,
  },

  {
    icon: mdiPoll,
    text: "Saving & Investment",
    url: "/invest_with_us",
    description: "Save with ARM and Lend with Trade Lenda",
    comingSoon: false,
  },
  {
    icon: mdiCreditCard,
    text: "Payments",
    url: "/sign_up",
    description: "Free Transfers and Bills Payment",
    comingSoon: false,
  },
];

export const supportLinks = [
  {
    icon: mdiAccountDetails,
    text: "Contact us",
    url: "/support",
    comingSoon: false,
  },
  {
    icon: mdiFrequentlyAskedQuestions,
    text: "FAQ",
    url: "/faq",
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
