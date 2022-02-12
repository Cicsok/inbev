class MyMobileFooter extends AbstractFooter {   
    
}
    function initFooter(element){
    element.innerHTML = `
    <footer class="d-xs-block d-lg-none">
    <div class="mobile-footer-content justify-content-around align-items-center" id="mobile-footer-content">
    </div>
    </footer>`;
}

function getParentId(){
    return 'mobile-footer-content';
}

function getClassName(){
    return 'mobile-company-name';
}

function createMoreInformations(parent) {
    siteConfig.mobileFooter.forEach((value)=>{
        let informationContainer = createInformationContainer(parent, value.className);
        createInformations(informationContainer, value.information);
    })
}

customElements.define('my-mobile-footer', MyMobileFooter);