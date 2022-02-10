class MyMobileFooter extends HTMLElement {
    connectedCallback(){
        initMyMobileFooter(this);
        createMobileFooterInformations();
    }
}

function initMyMobileFooter(element){
    element.innerHTML = `
        <footer class="d-xs-block d-lg-none">
            <div class="mobile-footer-content justify-content-around align-items-center" id="mobile-footer-content">
            </div>
        </footer>`;
}
    
function createMobileFooterInformations() {
    parent = document.getElementById('mobile-footer-content');
    createMobileCompanyName(parent);
    createMoreInformationsForMobile(parent);
}

function createMobileCompanyName(parent) {
    let companyNameContent = siteConfig.companyName;
    let companyName = createNode('div');
    companyName.classList.add('mobile-company-name');
    companyName.innerHTML = companyNameContent;
    append(parent, companyName);
}

function createMoreInformationsForMobile(parent) {
    new Map(Object.entries(siteConfig.mobileFooter)).forEach((value)=>{
        let informationContainer = createInformationContainer(parent, value.className);
        createInformations(informationContainer, value.information);
    })
}

function createInformationContainer(parent, className){
    let informationContainer = createNode('div');
    informationContainer.classList.add(className);
    append(parent, informationContainer);
    return informationContainer;
}

function createInformations(parent, informationContent){
    let information = createNode('div');
    information.innerHTML = informationContent;
    append(parent, information);
}

customElements.define('my-mobile-footer', MyMobileFooter);