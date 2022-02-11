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

function createLogoToLink(parent){
    let logoLink = createNode('a');
    logoLink.href =  'home';
    append(parent, logoLink);
    return logoLink;
}

function createLogoToHeader(parent){
    const headerLogo = siteConfig.header.headerLogo;
    let logo = createNode('img');
    logo.classList.add('logo-img');
    logo.src = headerLogo;
    logo.alt = 'Az INBEV logója';
    append(parent, logo);
}

function createButtonDiv(parent){
    let buttonDiv = createNode('div');
    buttonDiv.classList.add('col', 'd-flex', 'justify-content-end');
    append(parent, buttonDiv);
    return buttonDiv;
}

function createButton(parent, buttonText){
    let button = createNode('a');
    button.href = 'contact';
    button.classList.add('my-border');
    button.innerHTML = buttonText;
    append(parent, button);
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

function createHeaderPagesLink(parent, link, className){
    let page = createNode('a');
    page.href='index.html';
    page.classList.add(className);
    page.innerHTML = link;
    append(parent, page);
}

function addHeaderPagesLink(parent){
    new Map (Object.entries(siteConfig.header.pages)).forEach((link, className) =>{
        createHeaderPagesLink(parent, link, className);
    });
}

function createHeaderInformations(parent, informationContent, className){
    let information = createNode('div');
    information.classList.add(className);
    information.innerHTML = informationContent;
    append(parent, information);
}

function addHeaderInformations(parent){
    new Map (Object.entries(siteConfig.header.informations)).forEach((information, className) =>{
        createHeaderInformations(parent, information, className);
    });
}

function createInformationsDiv(parent){
    let informationsDiv = createCol(parent);
    informationsDiv.classList.add('d-flex', 'justify-content-end', 'informationsDiv')
    append(parent, informationsDiv);
    return informationsDiv;
}