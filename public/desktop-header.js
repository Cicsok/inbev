class MyDesktopHeader extends HTMLElement {
    connectedCallback(){
        const headerLogo = siteConfig.headerLogo;
        const getInTouchWithMebuttonText = siteConfig.header.getInTouchWithMebuttonText;
        const homePageLink = siteConfig.header.page0;
        const introductionLink = siteConfig.header.page1;
        const referenceWorksLink = siteConfig.header.page2;
        const contactLink = siteConfig.header.page3;
        const headerEmail = siteConfig.header.email;
        const headerPhone = siteConfig.header.phone;
        this.innerHTML = `
            <header class="header-content d-none d-lg-block">
                <div class="row logo-and-button align-items-center d-flex">
                    <div class="col logo">
                        <a href="index.html">
                            <img class="logo-img" src="` + headerLogo + `" alt="Az INBEV logója">
                        </a>
                    </div>
                    <div class="col d-flex justify-content-end"> 
                        <a href="#" class="my-border">` 
                            + getInTouchWithMebuttonText + `
                        </a>
                    </div>
                </div>
                <div class="row header-line">
                    <div class="col ">
                    </div>
                </div>
                <div class="row menus-and-informations d-flex">  
                    <div class = "col pages">
                        <a href="#vmi" class="page1">` 
                            + homePageLink + `
                        </a>
                        <a href="#vmi" class="page2">` 
                            + introductionLink + `
                        </a>
                        <a href="#vmi" class="page3">` 
                            + referenceWorksLink + `
                        </a>
                        <a href="#vmi" class="page4">` 
                            + contactLink + `
                        </a>
                    </div>
                    <div class="col d-flex justify-content-end informations">
                        <div class="information1">` 
                            + headerEmail + `
                        </div>
                        <div class="information2">` 
                            + headerPhone + `
                        </div>  
                    <div>
                </div>
            </header>`;
    }
}

customElements.define('my-desktop-header', MyDesktopHeader);