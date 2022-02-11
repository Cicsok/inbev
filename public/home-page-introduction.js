class MyHomePageIntroduction extends HTMLElement {
    connectedCallback(){
        createIntroductionPart(this);
        addHomePageIntroductionImageToCss()        
    }
}

function createIntroductionPart(parameter){
    createIntroductionLine(parameter);
    let homePageIntroductionContainer = createHomePageIntroductionContainer(parameter);
    createIntroductionTitle(homePageIntroductionContainer);
    let imageAndTextContainer = createImageAndTextContainer(homePageIntroductionContainer);
    createImage(imageAndTextContainer);
    createIntroductionText(imageAndTextContainer);
}

function createIntroductionLine(parent){
    let introductionLine = createNode('hr');
    introductionLine.classList.add('red-line');
    append(parent, introductionLine);
}

function createHomePageIntroductionContainer(parent){
    let homePageIntroductionContainer = createNode('div');
    homePageIntroductionContainer.classList.add('home-page-introduction');
    append(parent, homePageIntroductionContainer);
    return homePageIntroductionContainer;
}

function createIntroductionTitle(parent){
    const introductionTitleContent = siteConfig.homePage.homePageIntroductionTitle;
    let introductionTitle = createNode('div');
    introductionTitle.classList.add('introduction-title', 'd-flex', 'justify-content-center');
    introductionTitle.innerHTML = introductionTitleContent;
    append(parent, introductionTitle);
}

function createImageAndTextContainer(parent){
    let imageAndTextContainer = createNode('div');
    imageAndTextContainer.classList.add('image-and-text', 'd-flex', 'justify-content-center');
    append(parent, imageAndTextContainer);
    return imageAndTextContainer;
}

function createImage(parent){
    let image = createNode('div');
    image.id = 'image';
    image.classList.add('image');
    append(parent, image);
}

function createIntroductionText(parent){
    let textContent = siteConfig.homePage.homePageIntroductionText;
    let text = createNode('div');
    text.classList.add('text', 'd-flex');
    text.innerHTML = textContent;
    append(parent, text);
}

customElements.define('my-home-page-introduction', MyHomePageIntroduction);