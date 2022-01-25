class MyHeader extends HTMLElement {
    connectedCallback(){
        const headerLogo = siteConfig.headerLogo;
        const buttonText = siteConfig.header.buttonText;
        const page1 = siteConfig.header.page1;
        const page2 = siteConfig.header.page2;
        const page3 = siteConfig.header.page3;
        const page4 = siteConfig.header.page4;
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
                    <a href="#vmi" class="page1">` + page1 + `<a>
                    <a href="#vmi" class="page2">` + page2 + `<a>
                    <a href="#vmi" class="page3">` + page3 + `<a>
                    <a href="#vmi" class="page4">` + page4 + `<a>
                </div>
                <div class="informations d-flex">
                    <div class="information1">` + headerEmail + `</div>
                    <div class="information2">` + headerPhone + `</div>
                </div>
        </header>`;
    }
}

customElements.define('my-desktop-header', MyHeader);