class InbevMobileHeader extends HTMLElement {
  connectedCallback() {
    initMyMobileHeader(this);
    createMobileHeader();
  }
}

function initMyMobileHeader(element) {
  element.innerHTML = `
    <nav class="navbar navbar-expand-lg d-xs-block d-lg-none">
      <div class="container-fluid">
        <a class="navbar-brand mx-auto" id="logo-wrap">
          <button class="navbar-toggler py-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon d-flex align-items-center">
              <i class="fas fa-bars mx-auto"></i>
            </span>
          </button>
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-items-div">
          </ul>
        </div>
      </div>
    </nav>`;
}

function createMobileHeader() {
  addNavigationToLogoInMobile();
  createMobilePagesLinks();
}

function createLogoToMobileHeader(slug) {
  parent = document.getElementById('logo-wrap');

  
  let logoImg = siteConfig.header.headerLogo;
  let logo = createNode('img');
  logo.src = logoImg;
  logo.classList.add('my-logo');
  logo.alt = 'Az INBE.V. logója';
  
  let logoNavigator = new NavigatorEventListenerFactory().create('MOBILE', 'MENU');
  let platformSynchronizer = PlatformSynchronizer.createInstance();

  logo.addEventListener('click', function () { logoNavigator.navigate(slug) });
  logo.addEventListener('click', function () { platformSynchronizer.syncForDesktop(slug) });

  append(parent, logo);
}

function addNavigationToLogoInMobile() {
  let logoLink = siteConfig.header.logoLink;
  let indexOfLogoLink = Object.values(siteConfig.header.pages).indexOf(logoLink);
  let slug = Object.keys(siteConfig.header.pages)[indexOfLogoLink];
  createLogoToMobileHeader(slug);
}

function createMobilePagesLinks() {
  parent = document.getElementById('nav-items-div');
  createLinksToMobileHeader(parent);
}

customElements.define('inbev-mobile-header', InbevMobileHeader);