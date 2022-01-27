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
        <header class="header-content">
            <div class="logo-and-button d-flex justify-content-between">
                <div class="logo">
                    <a href="#">
                        <img src="` + headerLogo + `" alt="Az INBEV logója">
                    </a>
                </div>
                <div class="buttonText">
                    <a href="#">` + buttonText + `</a>
                </div>
            </div>
            <hr>
            <div class="menus-and-informations d-flex justify-content-between">
                <div class="pages d-flex">
                    <a href="#vmi" class="page1">` + homePage + `<a>
                    <a href="#vmi" class="page2">` + introduction + `<a>
                    <a href="#vmi" class="page3">` + referenceWorks + `<a>
                    <a href="#vmi" class="page4">` + contact + `<a>
                </div>
                <div class="informations d-flex">
                    <div class="information1">` + headerEmail + `</div>
                    <div class="information2">` + headerPhone + `</div>
                </div>
        </header>`;
    }
}

customElements.define('my-desktop-header', MyHeader);