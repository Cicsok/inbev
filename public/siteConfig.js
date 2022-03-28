const siteConfig = {
  companyName: "INBE.V.",

  sliderHeaderNameToSliderImageMapping: {
   "Bemutatkozás": "image1.jpg", 
   "Referencia munkáim": "image5.jpg",
   "Kapcsolat":  "image4.jpg",
  },

  menuNavigationPlatformMapping: {
    "home-page": {
      desktopClass: "home-page-page-link",
      mobileClass: "home-page-page-link-mobile",
    },
    "about-me": {
      desktopClass: "about-me-page-link",
      mobileClass: "about-me-page-link-mobile",
    },
    "reference-works": {
      desktopClass: "reference-works-page-link",
      mobileClass: "reference-works-page-link-mobile",
    },
    "contact": {
      desktopClass: "contact-page-link",
      mobileClass: "contact-page-link-mobile",
    }
  },

  pageToURLMapping: {
    "/" : "/home-page",
    "home-page": "/home-page",
    "about-me": "/about-me",
    "reference-works": "/reference-works",
    "contact": "/contact",

    // First page load via browser includes the "/" character at the beginning of the page path
    "/home-page": "/home-page",
    "/about-me": "/about-me",
    "/reference-works": "/reference-works",
    "/contact": "/contact"
  },

  activeSliderImageName: "image1.jpg",

  header:{
    pages:{
      // don't override the the key!
      "home-page": "Főoldal",
      "about-me": "Bemutatkozás",
      "reference-works": "Referencia munkáim",
      "contact": "Kapcsolat",
    },
    logoLink: "Főoldal",
    buttonLink: "Kapcsolat",
    activePageLink: "Főoldal",
    informations:{
      email: "balazs0124@gmail.com",
      phone: "+36305361223",
    },
    getInTouchWithMebuttonText: "Lépj kapcsolatba velem",
    headerLogo: "INBEVLogo.png",
  },
   
  favicon: "",

  homePage:{
    homePageIntroductionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis est, rhoncus quis odio nec, tempus gravida arcu. Pellentesque eget iaculis urna, quis pharetra justo. Maecenas est tellus, consequat a odio ac, ",
    homePageIntroductionTitle: "Bemutatkozás",
    homePageIntroductionImage: "aboutMeImage.jpg",
  },

  aboutMePage:{
    aboutMeTitle: "Bemutatkozás",
    aboutMeImage: "aboutMeImage.jpg",
    aboutMeIntroductionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis est, rhoncus quis odio nec, tempus gravida arcu. Pellentesque eget iaculis urna, quis pharetra justo. Maecenas est tellus, consequat a odio ac, hendrerit maximus nulla. Duis commodo ligula ut ullamcorper congue. Vivamus egestas libero mi, vitae ultrices leo dignissim nec."
  },

  referenceWorks:{
    referenceWorksImage1: "",
    referenceWorksImage2: "",
    referenceWorksImage3: "",
    referenceWorksImage4: "",
    referenceWorksImage5: "",
  },

  contact:{
    mainText: "Keress bizalommal!",
    email: "balazs0124@gmail.com",
    phone: "+36305361223",
    contactImage: "image2.jpg",
  },

  desktopFooter:[
    {
      className: "desktop-footer-email",
      information:{
        label: "Email-cím",
        content: "balazs0124@gmail.com"
      }
    },
    {
      className: "desktop-footer-phone",
      information:{
        label: "Telefonszám",
        content: "+36305361223"
      }
    },
  ],
  
  mobileFooter:[
    {
      information: "+36305361223",
      className: "mobile-footer-phone",
    },
    {
      information: "balazs0124@gmail.com",
      className: "mobile-footer-email",
    },
  ]
};