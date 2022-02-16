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
    let newActivePage = slug+"-page-link"
    let logoNavigatorEventListener = new LogoAndButtonEventListener(activeLinkClassName, newActivePage);
    logoLink.addEventListener('click', function(){logoNavigatorEventListener.navigate(slug)});    
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
    let logoLinkElement = null;
    new Map (Object.entries(siteConfig.header.pages)).forEach((link, slug) =>{
        logoLink == link 
        ? logoLinkElement = createLogoToLink(parent, slug)
        : false;
    });
    return logoLinkElement;
}

function createButtonDiv(parent){
    let buttonDiv = createNode('div');
    buttonDiv.classList.add('col', 'd-flex', 'justify-content-end');
    append(parent, buttonDiv);
    return buttonDiv;
}

function createButton(parent, buttonText, slug){
    let button = createNode('a');
    let activeLinkClassName = "desktop-active-link";
    let newActivePage = slug+"-page-link"
    let buttonNavigatorEventListener = new LogoAndButtonEventListener(activeLinkClassName, newActivePage);
    button.addEventListener('click', function(){buttonNavigatorEventListener.navigate(slug)});
    button.classList.add('my-border');
    button.innerHTML = buttonText;
    append(parent, button);
}

function addButton(parent){
    let getInTouchWithMebuttonText = siteConfig.header.getInTouchWithMebuttonText;
    let buttonLink = siteConfig.header.buttonLink;
    new Map (Object.entries(siteConfig.header.pages)).forEach((link, slug) =>{
        buttonLink == link 
        ? createButton(parent, getInTouchWithMebuttonText, slug)
        : false;
    });
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
    page.addEventListener('click', function (){menuNavigatorEventListener.navigate(slug, page)});
    append(parent, page);
}

function addInformationsToHeaderPagesLink(parent){
    new Map (Object.entries(siteConfig.header.pages)).forEach((link, slug) =>{
        let activePageLink = siteConfig.header.activePageLink;
        let className = [slug+'-page-link'];
        let classNames = [className, "desktop-active-link"]
        activePageLink == link 
        ? createHeaderPagesLink(parent, link, classNames, slug)
        : createHeaderPagesLink(parent, link, className, slug);
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