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
    page.href='#';
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