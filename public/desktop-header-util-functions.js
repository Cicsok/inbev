function createLogoAndButtonDiv(parent){
    let logoAndButtonDiv = createNode('div');
    logoAndButtonDiv.classList.add('row', 'logo-and-button', 'align-items-center', 'd-flex');
    append(parent, logoAndButtonDiv);
    return logoAndButtonDiv;
}

function createCol(parent){
    let col = createNode('div');
    col.classList.add('col');
    append(parent, col);
    return col;
}

function createLogoToLink(parent, slug){
    let logoLink = createNode('a');

    let logoNavigator = new MenuNavigatorEventListenerFactory().create('DESKTOP', 'MENU');
    let platformSynchronizer = PlatformSynchronizer.createInstance();

    logoLink.addEventListener('click', function(){logoNavigator.navigate(slug)});
    logoLink.addEventListener('click', function (){platformSynchronizer.syncForMobile(slug)});
    
    append(parent, logoLink);
    return logoLink;
}

function addLogoToHeader(parent){
    const headerLogo = siteConfig.header.headerLogo;
    let logo = createNode('img');
    logo.classList.add('logo-img');
    logo.src = headerLogo;
    logo.alt = 'Az INBEV logója';
    append(parent, logo);
}

function addNavigationToLogo(parent){
    let logoLink = siteConfig.header.logoLink;
    let slugAndLinkPair = siteConfig.header.pages
    let logoLinkElement = null;
    let slug = Object.keys(slugAndLinkPair).find(key => slugAndLinkPair[key] === logoLink);
    logoLinkElement = createLogoToLink(parent, slug);
    return logoLinkElement;
}

function createButtonDiv(parent){
    let buttonDiv = createNode('div');
    buttonDiv.classList.add('col', 'd-flex', 'justify-content-end');
    append(parent, buttonDiv);
    return buttonDiv;
}

function createGetInTouchWithMeButton(parent, buttonText, slug){
    let button = createNode('a');
    button.classList.add('my-border');
    button.innerHTML = buttonText;

    let buttonNavigator = new MenuNavigatorEventListenerFactory().create('DESKTOP', 'MENU');
    let platformSynchronizer = PlatformSynchronizer.createInstance();
    button.addEventListener('click', function(){buttonNavigator.navigate(slug)});
    button.addEventListener('click', function (){platformSynchronizer.syncForMobile(slug)});

    append(parent, button);
}

function addGetInTouchWithMeButton(parent){
    let getInTouchWithMebuttonText = siteConfig.header.getInTouchWithMebuttonText;
    let buttonLink = siteConfig.header.buttonLink;
    let slugAndLinkPair = siteConfig.header.pages;
    let slug = Object.keys(slugAndLinkPair).find(key => slugAndLinkPair[key] === buttonLink);
    createGetInTouchWithMeButton(parent, getInTouchWithMebuttonText, slug)
}

function createMenusAndInformationsDiv(parent){
    let menusAndInformationsDiv = createNode('div');
    menusAndInformationsDiv.classList.add('d-flex');
    append(parent, menusAndInformationsDiv);
    return menusAndInformationsDiv;
}

function createPagesLinkDiv(parent){
    let pagesDiv = createCol(parent);
    pagesDiv.classList.add('pages');
    append(parent, pagesDiv);
    return pagesDiv;
}

function createHeaderPagesLink(parent, link, classNames, slug){
    let page = createNode('a');
    classNames.forEach((className) => {
        page.classList.add(className);
    })
    page.innerHTML = link;

    let menuNavigator = new MenuNavigatorEventListenerFactory().create('DESKTOP', 'MENU');
    let platformSynchronizer = PlatformSynchronizer.createInstance();

    page.addEventListener('click', function (){menuNavigator.navigate(slug)});
    page.addEventListener('click', function (){platformSynchronizer.syncForMobile(slug)});

    append(parent, page);
}

function addInformationsToHeaderPagesLink(parent){
    let currentSlug = window.location.pathname.replace('/', '');
    new Map (Object.entries(siteConfig.header.pages)).forEach((link, slug) =>{
        currentSlug = createActiveLinkPageOnFirstPageLoad(currentSlug);
        createActiveLinkPage(slug, currentSlug, parent, link);
    });
}

function createActiveLinkPageOnFirstPageLoad(currentSlug){
    currentSlug.length == 0 
        ? currentSlug = 'home-page'
        : currentSlug;
    return currentSlug;
}

function createActiveLinkPage(slug, currentSlug, parent, link){
    let classNameDesktop = slug+'-page-link';
    let className = [classNameDesktop];
    let classNames = [classNameDesktop, "desktop-active-link"];
    slug == currentSlug 
        ? createHeaderPagesLink(parent, link, classNames, slug)
        : createHeaderPagesLink(parent, link, className, slug);
}

function addHeaderInformations(parent, informationContent, className){
    let information = createNode('div');
    information.classList.add(className);
    information.innerHTML = informationContent;
    append(parent, information);
}

function addHeaderContentInformations(parent){
    new Map (Object.entries(siteConfig.header.informations)).forEach((information, className) =>{
        addHeaderInformations(parent, information, className);
    });
}

function createInformationsDiv(parent){
    let informationsDiv = createCol(parent);
    informationsDiv.classList.add('d-flex', 'justify-content-end', 'informationsDiv')
    append(parent, informationsDiv);
    return informationsDiv;
}