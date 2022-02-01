class MyMobileHeader extends HTMLElement {
    connectedCallback(){
      const headerLogo = siteConfig.headerLogo;
      const homePageLink = siteConfig.header.page0;
      const introductionLink = siteConfig.header.page1;
      const referenceWorksLink = siteConfig.header.page2;
      const contactLink = siteConfig.header.page3;
      this.innerHTML = `
        <nav class="navbar navbar-expand-lg d-xs-block d-lg-none">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon d-flex align-items-center">
                <i class="fas fa-bars mx-auto"></i>
              </span>
            </button>
            <a class="navbar-brand mx-auto" href="#"> <img src="` + headerLogo + `" alt="" class="my-logo"></a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#" id="home-page-link">` + homePageLink + `</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" id="introduction-link">` + introductionLink + `</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" id="reference-works-link">` + referenceWorksLink + `</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" id="contact-link">` + contactLink + `</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>`;
    }
}

customElements.define('my-mobile-header', MyMobileHeader);