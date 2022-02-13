const siteConfig = {
  companyName: "INBE.V.",

  sliderHeaderNameToSliderImageMapping: {
   "Bemutatkozás": "image1.jpg", 
   "Referencia munkáim": "image5.jpg",
   "Kapcsolat":  "image4.jpg",
  },

  activeSliderImageName: "image1.jpg",

  header:{
    pages:{
      homePageLink: "Főoldal",
      introductionLink: "Bemutatkozás",
      referenceWorksLink: "Referencia munkáim",
      contactLink: "Kapcsolat",
    },
    activePageLink: "Főoldal",
    informations:{
      email: "balazs0124@gmail.com",
      phone: "+36305361223",
    },
    getInTouchWithMebuttonText: "Lépj kapcsolatba velem",
    headerLogo: "INBEVLogo.png",
  },

  // don't override the slugs you can add or delete key-value pair from it when you add or delete something to header.pages!!
  slugs: [
    "index",
    "about-me",
    "reference-works",
    "contact",
  ],

  favicon: "",

  homePage:{
    homePageIntroductionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis est, rhoncus quis odio nec, tempus gravida arcu. Pellentesque eget iaculis urna, quis pharetra justo. Maecenas est tellus, consequat a odio ac, ",
    homePageIntroductionTitle: "Bemutatkozás",
    homePageIntroductionImage: "aboutMeImage.jpg",
  },

  aboutMePage:{
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
    information1: "balazs0124@gmail.com",
    information2: "+36305361223",
    contactImage: "",
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