import {
  mdiAccountDetails,
  // mdiDesktopTowerMonitor,
  // mdiFlowerTulip,
  // mdiShieldCheck,
  mdiBagChecked,
  mdiChartLineVariant,
  mdiCreditCard,
  mdiFrequentlyAskedQuestions,
  mdiInformationVariant,
  mdiMultimedia,
  mdiNotebook,
  mdiPoll,
  mdiSquareEditOutline,
} from '@mdi/js';

export const navLink=[
    { text: 'Home',
      url: '/',
    },
    {
      text: 'Products',
      url: '/products',
    },
    {
      text: 'Company',
      url: '/company',
    },
    {
      text: 'Support',
      url: '/support',
    },  

]

 export const productLinks = [
    // {
    //   icon: mdiPoll,
    //   text: 'Loan for business',
    //   url: '/loan_for_business',
    //   comingSoon: false,
    // },
    // {
    //   icon: mdiDesktopTowerMonitor,
    //   text: 'Digital banking',
    //   url: '/',
    //   comingSoon: false,
    // },
    // {
    //   icon: mdiFlowerTulip,
    //   text: 'Investment',
    //   url: '/invest_with_us',
    //   comingSoon: false,
    // },
    {
      icon: mdiPoll,
      text: 'FINANCE',
      url: '/loan_for_business',
      description:
        'Inventory financing, Asset financing, Working Capital, Local Purchase order and Invoice Discounting.',
      comingSoon: false,
    },

    {
      icon: mdiPoll,
      text: 'INSURANCE',
      url: '/insurance-preview',
      description:
        'Health Insurance, Goods-in-Transit Insurance, Fire and Burglary insurance (Shop insurance)',
      comingSoon: false,
    },
    {
      icon: mdiPoll,
      text: 'SAVINGS AND INVESTMENTS',
      url: '/invest_with_us',
      description: 'Save with ARM and Lend with Trade Lenda',
      comingSoon: false,
    },
    {
      icon: mdiCreditCard,
      text: 'PAYMENTS',
      url: '/sign_up',
      description: 'Free Transfers and Bills Payment',
      comingSoon: false,
    },
    // {
    //   icon: mdiOfficeBuilding,
    //   text: 'Islamic Facility Financing',
    //   url: '/islamic_facility_financing',
    //   ComingSoon: false,
    // },
    // {
    //   icon: mdiCash,
    //   text: 'Asset Financing',
    //   url: '/asset_financing',
    //   ComingSoon: false,
    // },
    // {
    //   icon: mdiClockPlus,
    //   text: 'A.R.M',
    //   url: '/a_r_m',
    //   comingSoon: false,
    // },
  ];

  export const companyLinks = [
    {
      icon: mdiInformationVariant,
      text: 'About us',
      url: '/about_us',
      comingSoon: false,
    },
    {
      icon: mdiBagChecked,
      text: 'Career',
      url: '/careers',
      comingSoon: false,
    },
    {
      icon: mdiMultimedia,
      text: 'Media',
      url: '/media',
      comingSoon: false,
    },
    {
      icon: mdiChartLineVariant,
      text: 'Market structure',
      url: '/market_structure',
      comingSoon: false,
    },
  ];

  export const supportLinks = [
    {
      icon: mdiAccountDetails,
      text: 'Contact us',
      url: '/support',
      comingSoon: false,
    },
    {
      icon: mdiFrequentlyAskedQuestions,
      text: 'FAQ',
      url: '/faq',
      comingSoon: false,
    },
    {
      icon: mdiSquareEditOutline,
      text: 'Terms and condition',
      url: '/T&C',
      comingSoon: false,
    },
    {
      icon: mdiNotebook,
      text: 'Knowledge base',
      url: '/faq',
      comingSoon: false,
    },
  ];