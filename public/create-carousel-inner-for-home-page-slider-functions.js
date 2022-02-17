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
    carouselItem.addEventListener('click', function (){console.log("ITEMRE KATTINTOTTAM - first active")} ) ;
    append(parent, carouselItem);
    return carouselItem;
  }
  
  function createCarouselItem(){
    let parent = document.getElementById('carousel-inner');
    let carouselItem = createNode('div');
    carouselItem.classList.add('carousel-item');
    carouselItem.addEventListener('click', function (){console.log("ITEMRE KATTINTOTTAM - non active")} ) ;
    console.log("TTTTTTTTTTTTTTTT");
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
    console.log("beléptem a createCaptionba!")

    var carouselCaption = createNode('button');
    let newActive = document.getElementsByClassName(slug+"-page-link-mobile")[0];
    carouselCaption.id = slug;
    let carouselCaptionNavigator = new MenuNavigatorEventListener("mobile-active-link");
    carouselCaption.classList.add('caption', 'mx-auto');
    carouselCaption.innerHTML = headerName;
    carouselCaption.addEventListener('click', function (){console.log("CAPTIONRA KATTINTOTTAM")} ) ;
    append(parent, carouselCaption);
 

   
  
  


   
  }

  function addNavigationToHomePageSlider(parent, headerName){
    new Map(Object.entries(siteConfig.header.pages)).forEach((link, slug)=>{
      link == headerName
      ? createCarouselCaption(parent, headerName, slug)
      : false;
      
    })
    }