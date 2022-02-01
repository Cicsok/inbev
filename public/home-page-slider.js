class MyHomePageSlider extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators" id="carousel-indicators">
            
        </div>`;
      createCarouselInner();
       document.getElementById('carouselExampleIndicators').innerHTML += `<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
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
  append(parent01, carouselInnerDiv);
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
  return carouselImg;
}

function createCarouselCaptionDiv(parent){
  const carouselCaptionDiv = createNode('div');
  carouselCaptionDiv.classList.add('carousel-caption', 'd-flex', 'align-items-center');
  append(parent, carouselCaptionDiv);
  return carouselCaptionDiv;
}

function createCarouselCaption(parent, headerName){
  const carouselCaption = createNode('a');
  carouselCaption.href= '#';
  carouselCaption.classList.add('caption', 'mx-auto');
  carouselCaption.innerHTML = headerName;
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
}

function addFirstButton(parent){
  const button = createNode('button');
  button.type = 'button';
  button.setAttribute('data-bs-target', '#carouselExampleIndicators');
  button.setAttribute('data-bs-slide-to', '0');
  button.setAttribute('aria-current', 'true');
  button.setAttribute('aria-label', 'Slide 1');
  button.classList.add('active');
  append(parent, button);
}

function addButton(parent, whichButton){
  const button = createNode('button');
  button.type = 'button';
  button.setAttribute('data-bs-target', '#carouselExampleIndicators');
  button.setAttribute('data-bs-slide-to', whichButton-1);
  button.setAttribute('aria-label', 'Slide '+whichButton);
  append(parent, button);
}

function addCarouselIndicators(){
  var howManyButton = Object.keys(siteConfig.sliderHeaderNameToSliderImageMapping).length;
  for (let whichButton = 1; whichButton <= howManyButton; whichButton++) {
    const parent = document.getElementById('carousel-indicators');
    whichButton==1
    ? addFirstButton(parent)
    : addButton(parent, whichButton);
  }
}

addCarouselIndicators();