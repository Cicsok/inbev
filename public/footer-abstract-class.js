class AbstractFooter extends HTMLElement{
    connectedCallback(){
        this.initFooter();
        this.createCompanyName(this.getParentId(), this.getClassName());
        this.createFooterInformations(this.getParentId());
    }

    getParentId(){
 
    }
    
    getClassName(){
    
    }
    
    initFooter(){
    
    }
    
    createFooterInformations(parentID) {
        parent = document.getElementById(parentID);
        this.createMoreInformations(parent);
    }
    
    createCompanyName(parentID, className){
        parent = document.getElementById(parentID);
        let companyNameContent = siteConfig.companyName;
        let companyName = createNode('div');
        companyName.classList.add(className);
        companyName.innerHTML = companyNameContent;
        append(parent, companyName);
    }
    
    createInformationContainer(parent, className){
        let informationContainer = createNode('div');
        informationContainer.classList.add(className);
        append(parent, informationContainer);
        return informationContainer;
    }
    
    createInformations(parent, informationContent){
        let information = createNode('div');
        information.innerHTML = informationContent;
        append(parent, information);
    }
}