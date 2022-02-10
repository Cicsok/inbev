function createLogoAndButtonDiv(parent){
    let logoAndButtonDiv = createNode('div');
    logoAndButtonDiv.classList.add('row', 'logo-and-button', 'align-items-center', 'd-flex');
    append(parent, logoAndButtonDiv);
    return logoAndButtonDiv;
}

function createCol(parent){
    let col = createNode('div');
    col.classList.add('col');
    append(parent, col);
    return col;
}

function createLogoToLink(parent){
    let logoLink = createNode('a');
    logoLink.href =  '#';
    append(parent, logoLink);
    return logoLink;
}

function createLogoToHeader(parent){
    const headerLogo = siteConfig.header.headerLogo;
    let logo = createNode('img');
    logo.classList.add('logo-img');
    logo.src = headerLogo;
    logo.alt = 'Az INBEV logója';
    append(parent, logo);
}

function createButtonDiv(parent){
    let buttonDiv = createNode('div');
    buttonDiv.classList.add('col', 'd-flex', 'justify-content-end');
    append(parent, buttonDiv);
    return buttonDiv;
}

function createButton(parent, buttonText){
    let button = createNode('a');
    button.href = '#';
    button.classList.add('my-border');
    button.innerHTML = buttonText;
    append(parent, button);
}