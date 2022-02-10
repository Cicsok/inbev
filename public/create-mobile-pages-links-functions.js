function createLinksToMobileHeader(parent){
    let FIRST_ITEM = 1;
    let linkDiv = null;
    new Map (Object.entries(siteConfig.header.pages)).forEach((link) => {
      FIRST_ITEM == 1 
      ? linkDiv = createFirstNavItem(parent) 
      : linkDiv = createNavItem(parent);
      createLinks(linkDiv, link);
      FIRST_ITEM += 1;
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
  
  function createLinks(parent, linkContent){
    let link = createNode('a');
    link.classList.add('nav-link');
    link.href = '#';
    link.innerHTML = linkContent;
    append(parent, link);
  }