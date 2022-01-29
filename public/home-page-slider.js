class MyHomePageSlider extends HTMLElement{
    connectedCallback(){
        const sliderImage1 = siteConfig.homePage.sliderImage1;
        const sliderImage2 = siteConfig.homePage.sliderImage2;
        const sliderImage3 = siteConfig.homePage.sliderImage3;
        const firstSliderCaption = siteConfig.header.introduction;
        const secondSliderCaption = siteConfig.header.referenceWorks;
        const thirdSliderCaption = siteConfig.header.contact;
        const howManyImage = 1;

        this.innerHTML = `

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>` ;
      
      this.innerHTML +=   createCarouselInner();
    //   this.innerHTML = `<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Next</span>
    //   </button>
    // </div>
    //   `;

    }
}

customElements.define('my-home-page-slider', MyHomePageSlider);

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function addActiveClassToFirstCarouselItem(){
  let parent = document.getElementById('carousel-inner');
  const carouselItem = createNode('div');
  carouselItem.classList.add('carousel-item', 'active');
  console.log(carouselItem);
  console.log(parent);
  append(parent, carouselItem);
  return carouselItem;
}

function createCarouselInnerDiv(){
  let parent01 = document.getElementById('carouselExampleIndicators');
  var carouselInnerDiv = createNode('div');
  carouselInnerDiv.classList.add('carousel-inner');
  carouselInnerDiv.id = 'carousel-inner';
  console.log(parent01);
  append(parent01, carouselInnerDiv);
  console.log(parent01);
  return parent01;
}

{/* <div class="carousel-item active">
            <img src="`+ sliderImage1 +`" class="d-block w-100" alt="..." style="width: 100%; height: 401px;">
            <div class="carousel-caption d-felx align-items-center">
              <h3 class="caption">` + firstSliderCaption + `</h3>
              </div>    
          </div> */}

function createCarouselItem(){
  const parent = document.getElementById('carousel-inner');
  const carouselItem = createNode('div');
  carouselItem.classList.add('carousel-item');
  append(parent, carouselItem);
  return carouselItem;
}

function createCarouselImg(parent, wichImg){
  const carouselImg = createNode('img');
  carouselImg.src = 'image'+ wichImg +'.jpg';
  carouselImg.classList.add('d-block', 'w-100', 'carousel-img');
  carouselImg.alt = '...';
  append(parent, carouselImg);
}

function createCarouselCaptionDiv(parent){
  const carouselCaptionDiv = createNode('div');
  carouselCaptionDiv.classList.add('carousel-caption', 'd-felx', 'align-items-center');
  append(parent, carouselCaptionDiv);
  return carouselCaptionDiv;
}

function createCarouselCaption(parent, wichCaption){
  const carouselCaption = createNode('h3');
  carouselCaption.classList.add('caption');
  carouselCaption.innerHTML = siteConfig.header['page'+wichCaption];
  console.log(siteConfig.header['page'+wichCaption]);
  append(parent, carouselCaption);
}

function nodeToString ( node ) {
  var tmpNode = document.createElement( "div" );
  tmpNode.appendChild( node.cloneNode( true ) );
  var str = tmpNode.innerHTML;
  tmpNode = node = null; // prevent memory leaks in IE
  return str;
}

function createCarouselInner(){
  for (let wichImgAndCaption = 1; wichImgAndCaption < 4; wichImgAndCaption++) {
    if(wichImgAndCaption==1){
      console.log('MEGTALÁLTAM A FG-t');
       return createCarouselInnerDiv();
      addActiveClassToFirstCarouselItem();
      const carouselItem = createCarouselItem();
      createCarouselImg(carouselItem, wichImgAndCaption);
      carouselCaptionDiv = createCarouselCaptionDiv(carouselItem);
      return createCarouselCaption(carouselCaptionDiv, wichImgAndCaption);
  //   }
  //   else{
  //     //createCarouselItem();
  //     // const carouselItem = createCarouselItem();
  //     // createCarouselImg(carouselItem, wichImgAndCaption);
  //     // const carouselCaptionDiv = createCarouselCaptionDiv(carouselItem);
  //     // createCarouselCaption(carouselCaptionDiv, wichImgAndCaption);
  //   }
   }
  
}
}
