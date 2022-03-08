class InbevHomePageSlider extends HTMLElement {
  connectedCallback() {
    initFirstPartOfMyHomePageSlider(this);
    createCarouselInnerForHomePageSlider();
    createCarouselIndicatorsForHomePageSlider();
    initLastPartOfMyHomePageSlider(this);
    registerEventListener();
  }
}

function initFirstPartOfMyHomePageSlider(element) {
  element.innerHTML = `
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators" id="carousel-indicators">
      </div>`;
}

function createCarouselInnerForHomePageSlider() {
  const activeByDefaultSliderImageName = siteConfig.activeSliderImageName;
  createCarouselInnerDiv();
  new Map(Object.entries(siteConfig.sliderHeaderNameToSliderImageMapping)).forEach((actualSliderImageName, actualHeaderName) => {
    const carouselItem = actualSliderImageName == activeByDefaultSliderImageName
      ? createActiveClassToFirstCarouselItem()
      : createCarouselItem();

    createCarouselImg(carouselItem, actualSliderImageName);
    carouselCaptionDiv = createCarouselCaptionDiv(carouselItem);

    createCarouselCaption(carouselCaptionDiv, actualHeaderName);
  });
}

function createCarouselIndicatorsForHomePageSlider() {
  const FIRST_BUTTON_INDEX = 0;
  Object.values(siteConfig.sliderHeaderNameToSliderImageMapping).forEach((value, buttonIndex) => {
    const parent = document.getElementById('carousel-indicators');
    FIRST_BUTTON_INDEX == buttonIndex
      ? createFirstButton(parent)
      : createButton(parent, buttonIndex);
  });
}

function createFirstButton(parent) {
  const button = createNode('button');
  button.type = 'button';
  button.setAttribute('data-bs-target', '#carouselExampleIndicators');
  button.setAttribute('data-bs-slide-to', '0');
  button.setAttribute('aria-current', 'true');
  button.setAttribute('aria-label', 'Slide 1');
  button.classList.add('active');
  append(parent, button);
}

function createButton(parent, buttonIndex) {
  const button = createNode('button');
  button.type = 'button';
  button.setAttribute('data-bs-target', '#carouselExampleIndicators');
  button.setAttribute('data-bs-slide-to', buttonIndex);
  button.setAttribute('aria-label', 'Slide ' + (buttonIndex + 1));
  append(parent, button);
}

function initLastPartOfMyHomePageSlider(element) {
  document.getElementById('carouselExampleIndicators').innerHTML += `
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`;
}

function registerEventListener() {
  let captions = document.getElementsByClassName('caption');
  Array.from(captions).forEach((caption) => {
    let captionText = caption.textContent;
    caption.addEventListener('click', function () { navigateSlider(captionText) });
  })
}

function navigateSlider(captionText) {
  let platformType = identifyPlatformType();
  let sliderListener = new MenuNavigatorEventListenerFactory().create(platformType);
  let platformSynchronizer = PlatformSynchronizer.createInstance();

  new Map(Object.entries(siteConfig.header.pages)).forEach((pageCaption, slug) => {
    let className = slug + '-page-link';
    let platformSpecificClassName = createPlatformSpecificClassName(className, platformType);

    if (pageCaption == captionText) {
      let clickedPage = indentifyClickedPage(platformSpecificClassName);
      sliderListener.navigate(slug, clickedPage);
      platformSynchronizer.sync(slug, platformType);
    }
  })
}

function createPlatformSpecificClassName(className, platformType) {
  return platformType == 'MOBILE'
    ? className + '-mobile'
    : className + '';
}

function indentifyClickedPage(platformSpecificClassName) {
  return document.getElementsByClassName(platformSpecificClassName)[0];
}

customElements.define('inbev-home-page-slider', InbevHomePageSlider);