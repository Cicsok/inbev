class LogoAndButtonEventListener {
    constructor(activeLinkClassName, newActivePage) {
        this.activeLinkClassName = activeLinkClassName;
        this.newActivePage = newActivePage
    }

    navigate(slug) {
        document.getElementById('specific-content').innerHTML = this.loadPage(window.location.origin + '/public/' + slug + '.html');
        window.history.replaceState(null, document.title, slug);
        let activePage = document.getElementsByClassName(this.activeLinkClassName)[0];
        let newActivePage = document.getElementsByClassName(this.newActivePage)[0];

        if( activePage != newActivePage){
            activePage.classList.remove(this.activeLinkClassName);
            newActivePage.classList.add(this.activeLinkClassName);
        } 
    }

    loadPage(href) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        xmlhttp.send();
        return xmlhttp.responseText;
    }
}

