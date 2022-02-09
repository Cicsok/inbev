class MyMobileFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <footer class="d-xs-block d-lg-none">
                <div class="mobile-footer-content justify-content-around align-items-center" id="mobile-footer-content">
                </div>
            </footer>`;
            addMobileFooterInformations();
    }
}

customElements.define('my-mobile-footer', MyMobileFooter);

function createNode(element) {
    return document.createElement(element);
}
  
function append(parent, el) {
    return parent.appendChild(el);
}

function createInformationContainer(parent, className){
    let informationContainer = createNode('div');
    informationContainer.classList.add(className);
    append(parent, informationContainer);
    return informationContainer;
}

function addInformations(parent, informationContent){
    let information = createNode('div');
    information.innerHTML = informationContent;
    append(parent, information);
}

function addMoreInformations(parent){
    new Map(Object.entries(mobileFooter)).forEach((list, typeOfInformation) =>{
        let information = list[0];
        let className = list[1];
        let informationContainer = createInformationContainer(parent, className);
        addInformations(informationContainer, information);
    })
}

function addMobileCompanyName(parent, view){
    let companyNameContent = siteConfig.companyName;
    let companyName = createNode('div');
    companyName.classList.add('mobile-company-name');
    companyName.innerHTML = companyNameContent;
    append(parent, companyName);
}

function addMobileFooterInformations(){
    parent = document.getElementById('mobile-footer-content');
    addMobileCompanyName(parent);
    addMoreInformations(parent);
}