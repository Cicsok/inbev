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
  
  function createCarouselCaption(parent, headerName){
    var carouselCaption = createNode('a');
    carouselCaption.classList.add('caption', 'mx-auto');
    carouselCaption.innerHTML = headerName;
    append(parent, carouselCaption); 
  }
