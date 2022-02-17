function createCarouselInnerDiv(){
    let parent = document.getElementById('carouselExampleIndicators');
    let carouselInnerDiv = createNode('div');
    carouselInnerDiv.classList.add('carousel-inner');
    carouselInnerDiv.id = 'carousel-inner';
    append(parent, carouselInnerDiv);
    return parent;
  }
  
  function createActiveClassToFirstCarouselItem(){
    let parent = document.getElementById('carousel-inner');
    let carouselItem = createNode('div');
    carouselItem.classList.add('carousel-item', 'active');
    append(parent, carouselItem);
    return carouselItem;
  }
  
  function createCarouselItem(){
    let parent = document.getElementById('carousel-inner');
    let carouselItem = createNode('div');
    carouselItem.classList.add('carousel-item');
    append(parent, carouselItem);
    return carouselItem;
  }
  
  function createCarouselImg(parent, imageName){
    let carouselImg = createNode('img');
    carouselImg.src = imageName;
    carouselImg.classList.add('d-block', 'w-100', 'carousel-img');
    carouselImg.alt = '...';
    append(parent, carouselImg);
    return carouselImg;
  }
  
  function createCarouselCaptionDiv(parent){
    let carouselCaptionDiv = createNode('div');
    carouselCaptionDiv.classList.add('carousel-caption', 'd-flex', 'align-items-center');
    append(parent, carouselCaptionDiv);
    return carouselCaptionDiv;
  }
  
  function createCarouselCaption(parent, headerName, slug){
    let page = createNode('a');
    
    page.innerHTML = 'cic';

    let menuNavigatorEventListener = new MenuNavigatorEventListener("desktop-active-link");
    let platformSyncronizer = new PlatformSyncronizer("desktop-active-link", "mobile-active-link");

    page.addEventListener('click', function (){console.log("cicc")});
    page.addEventListener('click', function (){platformSyncronizer.syncForMobile(slug)});

    append(parent, page);

    console.log("beléptem a createCaptionba!")

    let carouselCaption = createNode('button');
    let newActive = document.getElementsByClassName(slug+"-page-link-mobile")[0];
    console.log(newActive)
    carouselCaption.id = slug;
    let carouselCaptionNavigator = new MenuNavigatorEventListener("mobile-active-link");
    carouselCaption.classList.add('caption', 'mx-auto');
    console.log("wau")
    console.log(carouselCaption)
    carouselCaption.innerHTML = headerName;
    console.log(carouselCaption)
    carouselCaption.addEventListener('click', function (){console.log("meoo")} ) ;
    append(parent, carouselCaption);
    document.getElementById(slug).addEventListener('click', function (){console.log("cicc")})




   
  }

  function addNavigationToHomePageSlider(parent, headerName){
    new Map(Object.entries(siteConfig.header.pages)).forEach((link, slug)=>{
      link == headerName
      ? createCarouselCaption(parent, headerName, slug)
      : false;
      
    })
    }