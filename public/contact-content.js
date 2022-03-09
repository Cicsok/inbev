class ContactContent extends HTMLElement{
    connectedCallback(){
        createContactContent();
    }
}

function createContactContent(){
    let parent = document.getElementById('conact-parent');
    createMainText(parent);
    createEmail(parent);
    createPhone(parent);
    createImageContainer(parent);
    addImageToImageContainer();
}

function createMainText(parent){
    let mainTextContainer = createNode('div');
    let mainText = siteConfig.contact.mainText;
    mainTextContainer.innerHTML = mainText;
    mainTextContainer.classList.add('contact-main-text', 'text-center');
    append(parent, mainTextContainer);
}

function createEmail(parent){
    let emailContainer = createNode('div');
    let email = siteConfig.contact.email;
    emailContainer.innerHTML = email;
    emailContainer.classList.add('contact-email', 'text-center');
    append(parent, emailContainer);
}

function createPhone(parent){
    let phoneContainer = createNode('div');
    let phone = siteConfig.contact.phone;
    phoneContainer.innerHTML = phone;
    phoneContainer.classList.add('contact-phone', 'text-center');
    append(parent, phoneContainer);
}

function createImageContainer(parent){
    let imageContainer = createNode('div');
    imageContainer.id = 'contact-image';
    imageContainer.classList.add('contact-image');
    append(parent, imageContainer);
}

function addImageToImageContainer(){
    let contactImage = siteConfig.contact.contactImage;
    document.getElementById('contact-image').style.backgroundImage = 'url('+contactImage+')';
}

customElements.define('contact-content', ContactContent);