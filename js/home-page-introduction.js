class MyHomePageIntroduction extends HTMLElement {
    connectedCallback(){
        const introductionTitle = siteConfig.homePage.homePageIntroductionTitle;
        const homePageIntroductionText = siteConfig.homePage.homePageIntroductionText;
        this.innerHTML = `
        <hr class="red-line">
        <div class="home-page-introduction">
            <div class="introduction-title d-flex justify-content-center">`
                + introductionTitle + 
           `</div>
            <div class="image-and-text d-flex justify-content-center">
                <div class="image">
                </div>
                <div class="text d-flex">`
                + homePageIntroductionText +
               `</div>
            </div>
        </div>  
        `
    }
}

customElements.define('my-home-page-introduction', MyHomePageIntroduction);