class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer class="d-none d-lg-block">
            <div class="footer-content d-flex justify-content-around align-items-center" id="desktop-footer-content">   
            </div>
        </footer>`;
        addFooterInformations();
    }
}

customElements.define('my-desktop-footer', MyFooter);

function createNode(element) {
    return document.createElement(element);
}
  
function append(parent, el) {
    return parent.appendChild(el);
}

function addCompanyName(parent){
    let companyNameContent = siteConfig.companyName;
    let companyName = createNode('div');
    companyName.classList.add('desktop-company-name');
    companyName.innerHTML = companyNameContent;
    append(parent, companyName);
}

function createInformationContainer(parent, className){
    let informationContainer = createNode('div');
    informationContainer.classList.add(className);
    append(parent, informationContainer);
    return informationContainer;
}

function writeTypeOfInformation(parent, typeOfInformationContent){
    let typeOfInformation = createNode('div');
    typeOfInformation.innerHTML = typeOfInformationContent;
    append(parent, typeOfInformation);
}

function addInformations(parent, informationContent){
    let information = createNode('div');
    information.innerHTML = informationContent;
    append(parent, information);
}

function addMoreInformations(parent){
    new Map(Object.entries(desktopFooter)).forEach((list, typeOfInformation) =>{
        let information = list[0];
        let className = list[1];
        let informationContainer = createInformationContainer(parent, className);
        writeTypeOfInformation(informationContainer, typeOfInformation)
        addInformations(informationContainer, information);
    })
}

function addFooterInformations(){
    parent = document.getElementById('desktop-footer-content');
    addCompanyName(parent);
    addMoreInformations(parent);
}