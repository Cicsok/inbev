function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function addHomePageIntroductionImageToCss(){
    const homePageIntroductionImage = siteConfig.homePage.homePageIntroductionImage;
    document.getElementById('image').style.backgroundImage = 'url('+homePageIntroductionImage+')';
}