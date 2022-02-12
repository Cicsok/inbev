class AbstractFooter extends HTMLElement{
    connectedCallback(){
        initFooter(this);
        createCompanyName(getParentId(), getClassName());
        createFooterInformations(getParentId());
    }
}

function getParentId(){
 
}

function getClassName(){

}

function initFooter(parameter){

}

function createFooterInformations(parentID) {
    parent = document.getElementById(parentID);
    createMoreInformations(parent);
}

function createCompanyName(parentID, className){
    parent = document.getElementById(parentID);
    let companyNameContent = siteConfig.companyName;
    let companyName = createNode('div');
    companyName.classList.add(className);
    companyName.innerHTML = companyNameContent;
    append(parent, companyName);
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