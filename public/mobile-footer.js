class InbevMobileFooter extends AbstractFooter {   

    initFooter(){
        this.innerHTML = `
        <footer class="d-xs-block d-lg-none">
        <div class="mobile-footer-content justify-content-around align-items-center" id="mobile-footer-content">
        </div>
        </footer>`;
    }

    getParentId(){
        return 'mobile-footer-content';
    }

    getClassName(){
        return 'mobile-company-name';
    }

    createMoreInformations(parent) {
        siteConfig.mobileFooter.forEach((value)=>{
            let informationContainer = super.createInformationContainer(parent, value.className);
            this.createInformations(informationContainer, value.information);
        })
    }
}

customElements.define('inbev-mobile-footer', InbevMobileFooter);