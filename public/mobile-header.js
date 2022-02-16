class MyMobileHeader extends HTMLElement {
    connectedCallback(){
      initMyMobileHeader(this);
      createMobileHeader();
    }
}

function initMyMobileHeader(element){
  element.innerHTML = `
    <nav class="navbar navbar-expand-lg d-xs-block d-lg-none">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon d-flex align-items-center">
            <i class="fas fa-bars mx-auto"></i>
          </span>
        </button>
        <a class="navbar-brand mx-auto" href="index" id="logo-wrap">
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-items-div">
          </ul>
        </div>
      </div>
    </nav>`;
}

function createMobileHeader(){
  createLogoToMobileHeader();
  createMobilePagesLinks();
}

function createLogoToMobileHeader(){
  parent = document.getElementById('logo-wrap');
  let logoImg = siteConfig.header.headerLogo;
  let logo = createNode('img');
  logo.src = logoImg;
  logo.classList.add('my-logo');
  logo.alt = 'Az INBE.V. logója';
  append(parent, logo);
}

function createMobilePagesLinks(){
  parent = document.getElementById('nav-items-div');
  createLinksToMobileHeader(parent);
}

customElements.define('my-mobile-header', MyMobileHeader);