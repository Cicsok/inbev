class MyHeader extends HTMLElement {
    connectedCallback(){
        const headerLogo = siteConfig.headerLogo;
        const buttonText = siteConfig.header.buttonText;
        const homePage = siteConfig.header.homePage;
        const introduction = siteConfig.header.introduction;
        const referenceWorks = siteConfig.header.referenceWorks;
        const contact = siteConfig.header.contact;
        const headerEmail = siteConfig.header.email;
        const headerPhone = siteConfig.header.phone;
        this.innerHTML = `
            
                <header class=" header-content">
                    <div class="row logo-and-button align-items-center d-flex">
                        <div class="col logo">
                            <a href="index.html">
                                <img class="logo-img" src="` + headerLogo + `" alt="Az INBEV logója">
                                </a>
                        </div>
                        <div class="col d-flex justify-content-end"> 
                                <a href="#" class="my-border">` 
                                + buttonText + `
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
                                + homePage + `
                            </a>
                            <a href="#vmi" class="page2">` 
                                + introduction + `
                            </a>
                            <a href="#vmi" class="page3">` 
                                + referenceWorks + `
                            </a>
                            <a href="#vmi" class="page4">` 
                                + contact + `
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
                </header>
            `
    }
}

customElements.define('my-desktop-header', MyHeader);