class MyDesktopFooter extends HTMLElement {
    connectedCallback(){
        initMyDesktopFooter(this);
        createDesktopFooterInformations();
    }
}

function initMyDesktopFooter(element){
    element.innerHTML = `
        <footer class="d-none d-lg-block">
            <div class="footer-content d-flex justify-content-around align-items-center" id="desktop-footer-content">   
            </div>
        </footer>`;
}

function createDesktopFooterInformations(){
    parent = document.getElementById('desktop-footer-content');
    createDesktopCompanyName(parent);
    createMoreInformationsForDesktop(parent);
}

function createDesktopCompanyName(parent){
    let companyNameContent = siteConfig.companyName;
    let companyName = createNode('div');
    companyName.classList.add('desktop-company-name');
    companyName.innerHTML = companyNameContent;
    append(parent, companyName);
}

function createMoreInformationsForDesktop(parent){
    new Map (Object.entries(siteConfig.desktopFooter)).forEach((value)=>{
        let informationContainer = createInformationContainer(parent, value.className);
        new Map (Object.entries(value)).forEach((value, key)=>{
            let isObject = typeof value == 'object' 
            ? true 
            : false;
            if(isObject){
                createTypeOfInformation(informationContainer, value.label);
                createInformations(informationContainer, value.value);
            }
        })
    })
}

function createInformationContainer(parent, className){
    let informationContainer = createNode('div');
    informationContainer.classList.add(className);
    append(parent, informationContainer);
    return informationContainer;
}

function createTypeOfInformation(parent, typeOfInformationContent){
    let typeOfInformation = createNode('div');
    typeOfInformation.innerHTML = typeOfInformationContent;
    append(parent, typeOfInformation);
}

function createInformations(parent, informationContent){
    let information = createNode('div');
    information.innerHTML = informationContent;
    append(parent, information);
}

customElements.define('my-desktop-footer', MyDesktopFooter);