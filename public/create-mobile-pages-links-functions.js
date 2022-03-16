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
  let neededSlugContent = currentSlug.substring(1);slug+'-page-link-mobile';
  let classNameMobile = slug+'-page-link-mobile';
  let className = [classNameMobile, 'nav-link'];
  let classNames = [classNameMobile, 'mobile-active-link', 'nav-link'];

  console.log(neededSlugContent);
        slug == neededSlugContent 
        ? createPagesLink(parent, linkContent, classNames, slug)
        : createPagesLink(parent, linkContent, className, slug);
}