class MyDesktopHeader extends HTMLElement {
    connectedCallback(){
        initMyDesktopHeader(this);
        craeteDesktopHeader();
    }
}

function initMyDesktopHeader(element){
    element.innerHTML = `
        <header class="header-content d-none d-lg-block" id="header-content">
        </header>
    `;
}

function craeteDesktopHeader(){
    createLogoAndButtonInDesktopHeader();
    createLineToHeader();
    createPagesAndInformationsToDesktopHeader();
}

function createLogoAndButtonInDesktopHeader(){
    let parent = document.getElementById('header-content');
    let LogoAndButtonDiv = createLogoAndButtonDiv(parent);
    let logoDiv = createCol(LogoAndButtonDiv);
    let logotoLink = addNavigationToLogo(logoDiv);
    addLogoToHeader(logotoLink);
    let buttonDiv = createButtonDiv(LogoAndButtonDiv);
    addGetInTouchWithMebuttonButton(buttonDiv);
}

function createLineToHeader(){
    let parent = document.getElementById('header-content');
    let lineDiv = createLineDiv(parent);
    createCol(lineDiv);
}

function createPagesAndInformationsToDesktopHeader(){
    let parent = document.getElementById('header-content');
    let menusAndInformationsDiv = createMenusAndInformationsDiv(parent);
    let pagesDiv = createPagesLinkDiv(menusAndInformationsDiv);
    addInformationsToHeaderPagesLink(pagesDiv);
    let informationsDiv = createInformationsDiv(menusAndInformationsDiv);
    addHeaderContentInformations(informationsDiv);
}

function createLineDiv(parent){
    let lineDiv = createNode('div');
    lineDiv.classList.add('row', 'header-line');
    append(parent, lineDiv);
    return lineDiv;
}

customElements.define('my-desktop-header', MyDesktopHeader);