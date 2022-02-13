function createLinksToMobileHeader(parent){
  let activePageLink = siteConfig.header.activePageLink;
  let linkDiv = null;
  new Map (Object.entries(siteConfig.header.pages)).forEach((link, slug) => {
    link == activePageLink 
    ? linkDiv = createFirstNavItem(parent) 
    : linkDiv = createNavItem(parent);
    createLinks(linkDiv, link, slug);
  })
}
  
function createFirstNavItem(){
  let navItem = createNode('li');
  navItem.classList.add('nav-item', 'active');
  navItem.setAttribute('aria-current', 'page');
  append(parent, navItem);
  return navItem;
}
  
function createNavItem(parent){
  let navItem = createNode('li');
  navItem.classList.add('nav-item');
  append(parent, navItem);
  return navItem;
}
  
function createLinks(parent, linkContent, slug){
  let link = createNode('a');
  link.classList.add('nav-link');
  link.href = slug;
  link.innerHTML = linkContent;
  append(parent, link);
}