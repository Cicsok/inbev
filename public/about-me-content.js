class AboutMeContent extends HTMLElement{
    connectedCallback(){
        createAboutMeContent();
    }
}

function createAboutMeContent(){
    parent = document.getElementById('about-me-parent');
    createAboutMeTitle(parent);
    createAboutMeImageContainer(parent);
    addImageToImageContainer();
    createIntroductionText(parent);
}

function createAboutMeTitle(parent){
    title = createNode('div');
    titleText = siteConfig.aboutMePage.aboutMeTitle;
    title.innerHTML = titleText;
    title.classList.add('about-me-title', 'text-center');
    append(parent, title);
}

function createAboutMeImageContainer(parent){
    imageContainer = createNode('div');
    imageContainer.id = 'about-me-image';
    imageContainer.classList.add('about-me-image', 'mx-auto');
    append(parent, imageContainer);
}

function addImageToImageContainer(){
    let aboutMeIntroductionImage = siteConfig.aboutMePage.aboutMeImage;
    document.getElementById('about-me-image').style.backgroundImage = 'url('+aboutMeIntroductionImage+')';
}

function createIntroductionText(parent){
    introductionTextContainer = createNode('div');
    introductionText = siteConfig.aboutMePage.aboutMeIntroductionText;
    introductionTextContainer.innerHTML = introductionText;
    introductionTextContainer.classList.add('introduction-text', 'text-center');
    append(parent, introductionTextContainer);
}

customElements.define('about-me-content', AboutMeContent);