class MyMobileHeader extends HTMLElement {
    connectedCallback(){
      this.innerHTML = `
        <nav class="navbar navbar-expand-lg d-xs-block d-lg-none">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon d-flex align-items-center">
                <i class="fas fa-bars mx-auto"></i>
              </span>
            </button>
            <a class="navbar-brand mx-auto" href="#" id="logo-wrap">
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-items-div">
              </ul>
            </div>
          </div>
        </nav>`;
        createMobileHeader();
    }
}

customElements.define('my-mobile-header', MyMobileHeader);

function createNode(node){
  return document.createElement(node);
}

function append(parent, element){
  return parent.appendChild(element);
}

function addLogoToHeader(){
  parent = document.getElementById('logo-wrap');
  let logoImg = siteConfig.header.headerLogo;
  let logo = createNode('img');
  logo.src = logoImg;
  logo.classList.add('my-logo');
  logo.alt = 'Az INBE.V. logója';
  append(parent, logo);
}

function addFirstNavItem(){
  let navItem = createNode('li');
  navItem.classList.add('nav-item', 'active');
  navItem.setAttribute('aria-current', 'page');
  append(parent, navItem);
  return navItem;
}

function addNavItem(parent){
  let navItem = createNode('li');
  navItem.classList.add('nav-item');
  append(parent, navItem);
  return navItem;
}

function createLinks(parent, linkContent){
  let link = createNode('a');
  link.classList.add('nav-link');
  link.href = '#';
  link.innerHTML = linkContent;
  append(parent, link);
}

function addLinksToHeader(parent){
  let FIRST_ITEM = 1;
  let linkDiv = null;
  new Map (Object.entries(siteConfig.header.pages)).forEach((link) => {
    FIRST_ITEM == 1 
    ? linkDiv = addFirstNavItem(parent) 
    : linkDiv = addNavItem(parent);
    createLinks(linkDiv, link);
    FIRST_ITEM += 1;
  })
}

function addPagesLinks(){
  parent = document.getElementById('nav-items-div');
  addLinksToHeader(parent);
}

function createMobileHeader(){
  addLogoToHeader();
  addPagesLinks();
}