class MyMobileFooter extends abstractFooter {
    connectedCallback(){
        initMyMobileFooter(this);
        createCompanyName('mobile-footer-content', 'mobile-company-name');
        createFooterInformations('mobile-footer-content');
    }
}

function initMyMobileFooter(element){
    element.innerHTML = `
        <footer class="d-xs-block d-lg-none">
            <div class="mobile-footer-content justify-content-around align-items-center" id="mobile-footer-content">
            </div>
        </footer>`;
}

function createMoreInformations(parent) {
    new Map(Object.entries(siteConfig.mobileFooter)).forEach((value)=>{
        let informationContainer = createInformationContainer(parent, value.className);
        createInformations(informationContainer, value.information);
    })
}

customElements.define('my-mobile-footer', MyMobileFooter);