class MyHomePageSlider extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>` ;
      
      createCarouselInner();
       this.innerHTML += `<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
       </button>
       <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
       </button>
     </div>
       `;

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

function createCarouselItem(){
  const parent = document.getElementById('carousel-inner');
  const carouselItem = createNode('div');
  carouselItem.classList.add('carousel-item');
  append(parent, carouselItem);
  return carouselItem;
}

function createCarouselImg(parent, imageName){
  const carouselImg = createNode('img');
  carouselImg.src = imageName;
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

function createCarouselCaption(parent, headerName){
  const carouselCaption = createNode('h3');
  carouselCaption.classList.add('caption');
  console.log(headerName);
  carouselCaption.innerHTML = headerName;
  console.log("Parent" + parent);
  console.dir(parent);
  append(parent, carouselCaption);
}


function createCarouselInner() {
    const activeByDefaultSliderImageName = siteConfig.activeSliderImageName;

    createCarouselInnerDiv();
    new Map(Object.entries(siteConfig.sliderHeaderNameToSliderImageMapping)).forEach((actualSliderImageName, actualHeaderName) => {
         const carouselItem = actualSliderImageName == activeByDefaultSliderImageName
            ? addActiveClassToFirstCarouselItem()
            : createCarouselItem();

         createCarouselImg(carouselItem, actualSliderImageName);
         carouselCaptionDiv = createCarouselCaptionDiv(carouselItem);

        createCarouselCaption(carouselCaptionDiv, actualHeaderName);
    });

    return 0;
}
