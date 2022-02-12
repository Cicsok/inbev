class MyDesktopFooter extends AbstractFooter {
    
}

function initFooter(element){
    element.innerHTML = `
        <footer class="d-none d-lg-block">
            <div class="footer-content d-flex justify-content-around align-items-center" id="desktop-footer-content">   
            </div>
        </footer>`;
}

function getParentId(){
    return 'desktop-footer-content';
}

function getClassName(){
    return 'desktop-company-name';
}

function createMoreInformations(parent){
    siteConfig.desktopFooter.forEach((data) => {
        let container = createInformationContainer(parent, data.className);
        let information = data.information;
        createTypeOfInformation(container, information.label);
        createInformations(container, information.content);
    })
}

function createTypeOfInformation(parent, typeOfInformationContent){
    let typeOfInformation = createNode('div');
    typeOfInformation.innerHTML = typeOfInformationContent;
    append(parent, typeOfInformation);
}

customElements.define('my-desktop-footer', MyDesktopFooter);