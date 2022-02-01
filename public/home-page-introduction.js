class MyHomePageIntroduction extends HTMLElement {
    connectedCallback(){
        const introductionTitle = siteConfig.homePage.homePageIntroductionTitle;
        const homePageIntroductionText = siteConfig.homePage.homePageIntroductionText;
        const homePageIntroductionImage = siteConfig.aboutMePage.aboutMeImage;
        this.innerHTML = `
        <hr class="red-line">
        <div class="home-page-introduction">
            <div class="introduction-title d-flex justify-content-center">`
                + introductionTitle + 
           `</div> 
            <div class="image-and-text d-flex justify-content-center">  
                <div class="image" id="image">
                </div>
                <div class="text d-flex">`
                    + homePageIntroductionText +
               `</div>
            </div>
        </div>  
        `
        document.getElementById('image').style.backgroundImage = 'url('+homePageIntroductionImage+')';
    }
}

customElements.define('my-home-page-introduction', MyHomePageIntroduction);
