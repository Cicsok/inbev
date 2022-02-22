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
    let activeLinkClassName = "desktop-active-link";
    let newActivePage = slug+"-page-link";

    let logoNavigatorEventListener = new LogoAndButtonEventListener(activeLinkClassName, newActivePage);
    let platformSynchronizer = PlatformSynchronizer.createInstance();

    logoLink.addEventListener('click', function(){logoNavigatorEventListener.navigate(slug)});
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

    let activeLinkClassName = "desktop-active-link";
    let newActivePage = slug+"-page-link";

    let buttonNavigatorEventListener = new LogoAndButtonEventListener(activeLinkClassName, newActivePage);
    let platformSynchronizer = PlatformSynchronizer.createInstance();
    button.addEventListener('click', function(){buttonNavigatorEventListener.navigate(slug, newActivePage)});
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

    let menuNavigatorEventListener = new MenuNavigatorEventListener("desktop-active-link");
    let platformSynchronizer = PlatformSynchronizer.createInstance();

    page.addEventListener('click', function (){menuNavigatorEventListener.navigate(slug, page)});
    page.addEventListener('click', function (){platformSynchronizer.syncForMobile(slug)});

    append(parent, page);
}

function addInformationsToHeaderPagesLink(parent){
    let currentSlug = window.location.pathname;
    new Map (Object.entries(siteConfig.header.pages)).forEach((link, slug) =>{
        let end = currentSlug.length+1;
        let neededSlugContent = 'home-page';
        let className = [slug+'-page-link'];
        let classNames = [className, "desktop-active-link"];
        slug == neededSlugContent 
        ? createHeaderPagesLink(parent, link, classNames, slug)
        : createHeaderPagesLink(parent, link, className, slug);
        let neededSlugContent = currentSlug.substring(1, end);
    });
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