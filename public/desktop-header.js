class MyDesktopHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <header class="header-content d-none d-lg-block" id="header-content">
            </header>
            `;
        craeteDesktopHeader();
    }
}

customElements.define('my-desktop-header', MyDesktopHeader);

function createNode(element) {
    return document.createElement(element);
}
  
function append(parent, el) {
    return parent.appendChild(el);
}

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
    logoLink.href =  '#';
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

function createButtonDiv(parent){
    let buttonDiv = createNode('div');
    buttonDiv.classList.add('col', 'd-flex', 'justify-content-end');
    append(parent, buttonDiv);
    return buttonDiv;
}

function addButton(parent, buttonText){
    let button = createNode('a');
    button.href = '#';
    button.classList.add('my-border');
    button.innerHTML = buttonText;
    append(parent, button);
}

function addLogoAndButtonInHeader(){
    let parent = document.getElementById('header-content');
    let LogoAndButtonDiv = createLogoAndButtonDiv(parent);
    let logoDiv = createCol(LogoAndButtonDiv);
    let logotoLink = createLogoToLink(logoDiv);
    addLogoToHeader(logotoLink);
    let buttonDiv = createButtonDiv(LogoAndButtonDiv);
    let getInTouchWithMebuttonText = siteConfig.header.getInTouchWithMebuttonText;
    addButton(buttonDiv, getInTouchWithMebuttonText);
}

function createLineDiv(parent){
    let lineDiv = createNode('div');
    lineDiv.classList.add('row', 'header-line');
    append(parent, lineDiv);
    return lineDiv;
}

function addLineToHeader(){
    let parent = document.getElementById('header-content');
    let lineDiv = createLineDiv(parent);
    createCol(lineDiv);
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

function addPagesAndInformationsToHeader(){
    let parent = document.getElementById('header-content');
    let menusAndInformationsDiv = createMenusAndInformationsDiv(parent);
    let pagesDiv = createPagesLinkDiv(menusAndInformationsDiv);
    addHeaderPagesLink(pagesDiv);
    let informationsDiv = createInformationsDiv(menusAndInformationsDiv);
    addHeaderInformations(informationsDiv);
}

function craeteDesktopHeader(){
    addLogoAndButtonInHeader();
    addLineToHeader();
    addPagesAndInformationsToHeader();
}