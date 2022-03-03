function createLinksToMobileHeader(parent) {
  let activePageLink = siteConfig.header.activePageLink;
  let linkDiv = null;
  new Map(Object.entries(siteConfig.header.pages)).forEach((link, slug) => {
    link == activePageLink
      ? linkDiv = createFirstNavItem(parent)
      : linkDiv = createNavItem(parent);
    createLinks(linkDiv, link, slug);
  })
}

function createFirstNavItem() {
  let navItem = createNode('li');
  navItem.classList.add('nav-item', 'active', 'mobile-active-link');
  navItem.setAttribute('aria-current', 'page');
  append(parent, navItem);
  return navItem;
}

function createNavItem(parent) {
  let navItem = createNode('li');
  navItem.classList.add('nav-item');
  append(parent, navItem);
  return navItem;
}

function createLinks(parent, linkContent, slug) {
  let link = createNode('a');
  let className = slug+'-page-link-mobile';
  link.classList.add(className, 'nav-link');
  link.innerHTML = linkContent;

  let menuNavigatorEventListener = new MenuNavigatorEventListener("mobile-active-link");
  let platformSynchronizer = PlatformSynchronizer.createInstance();

  link.addEventListener('click', function (){menuNavigatorEventListener.navigate(slug, link)});
  link.addEventListener('click', function (){platformSynchronizer.syncForDesktop(slug)});

  append(parent, link);
}