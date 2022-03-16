function createLinksToMobileHeader(parent) {
  let linkDiv = createNavItem(parent);
  new Map(Object.entries(siteConfig.header.pages)).forEach((link, slug) => {
    createLinks(linkDiv, link, slug);
  })
}

function createNavItem(parent) {
  let navItem = createNode('li');
  navItem.classList.add('nav-item');
  append(parent, navItem);
  return navItem;
}

function createPagesLink(parent, linkContent, classNames, slug){
  let link = createNode('a');
  classNames.forEach((className) => {
    link.classList.add(className);
  })  
  link.innerHTML = linkContent;


  let menuNavigatorEventListener = new MenuNavigatorEventListenerFactory().create('MOBILE');
  let platformSynchronizer = PlatformSynchronizer.createInstance();

  link.addEventListener('click', function (){menuNavigatorEventListener.navigate(slug, link)});
  link.addEventListener('click', function (){platformSynchronizer.syncForDesktop(slug)});

  append(parent, link);
}

function createLinks(parent, linkContent, slug) {
  let currentSlug = window.location.pathname;
  let slugWithoutSlash  = currentSlug.substring(1);
  slugWithoutSlash = createActiveLinkPageOnFirstPageLoadMobile(slugWithoutSlash);
  createActiveLinkPageMobile(slug, slugWithoutSlash, parent, linkContent); 
}

function createActiveLinkPageOnFirstPageLoadMobile(slugWithoutSlash){
  slugWithoutSlash.length == 0 
      ? slugWithoutSlash = 'home-page'
      : slugWithoutSlash;
  return slugWithoutSlash;
}

function createActiveLinkPageMobile(slug, slugWithoutSlash, parent, linkContent){
  let classNameMobile = slug+'-page-link-mobile';
  let classNames = [classNameMobile, 'nav-link'];
  let ClassNamesWithActiveClass = [classNameMobile, 'mobile-active-link', 'nav-link'];
  slug == slugWithoutSlash 
    ? createPagesLink(parent, linkContent, ClassNamesWithActiveClass, slug)
    : createPagesLink(parent, linkContent, classNames, slug);
}