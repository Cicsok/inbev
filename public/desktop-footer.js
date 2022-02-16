class MyDesktopFooter extends AbstractFooter {
    initFooter(){
        this.innerHTML = `
            <footer class="d-none d-lg-block">
                <div class="footer-content d-flex justify-content-around align-items-center" id="desktop-footer-content">   
                </div>
            </footer>`; 
    }

    getParentId(){
        return 'desktop-footer-content';
    }

    getClassName(){
        return 'desktop-company-name';
    }

    createMoreInformations(parent){
        siteConfig.desktopFooter.forEach((data) => {
            let container = super.createInformationContainer(parent, data.className);
            let information = data.information;
            this.createTypeOfInformation(container, information.label);
            this.createInformations(container, information.content);
        })
    }

    createTypeOfInformation(parent, typeOfInformationContent){
        let typeOfInformation = createNode('div');
        typeOfInformation.innerHTML = typeOfInformationContent;
        append(parent, typeOfInformation);
    }
}
customElements.define('my-desktop-footer', MyDesktopFooter);