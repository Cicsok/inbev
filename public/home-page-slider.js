class MyHomePageSlider extends HTMLElement{
    connectedCallback(){
        const sliderImage1 = siteConfig.homePage.sliderImage1;
        const sliderImage2 = siteConfig.homePage.sliderImage2;
        const sliderImage3 = siteConfig.homePage.sliderImage3;
        const firstSliderCaption = siteConfig.header.introduction;
        const secondSliderCaption = siteConfig.header.referenceWorks;
        const thirdSliderCaption = siteConfig.header.contact;

        this.innerHTML = `

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="`+ sliderImage1 +`" class="d-block w-100" alt="..." style="width: 100%; height: 401px;">
          <div class="carousel-caption d-felx align-items-center">
            <h3 class="caption">` + firstSliderCaption + `</h3>
            </div>    
        </div>
        <div class="carousel-item">
          <img src="` + sliderImage2 + `" class="d-block w-100" alt="..." style="width: 100%; height: 401px;">
          <div class="carousel-caption d-felx align-items-center">
            <h3 class="caption">` + secondSliderCaption + `</h3>
          </div>    
        </div>
        <div class="carousel-item">
          <img src="` + sliderImage3 + `" class="d-block w-100" alt="..." style="width: 100%; height: 401px;">
          <div class="carousel-caption d-felx align-items-center">
            <h3 class="caption">` + thirdSliderCaption + `</h3>
          </div>                    
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
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