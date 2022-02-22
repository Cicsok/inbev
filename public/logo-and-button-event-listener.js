class LogoAndButtonEventListener {
    constructor(activeLinkClassName, newActivePage) {
        this.activeLinkClassName = activeLinkClassName;
        this.newActivePage = newActivePage
    }

    navigate(slug) {
        document.getElementById('specific-content').innerHTML = this.loadPage(window.location.origin + '/' + slug);
        window.history.replaceState(null, document.title, slug);
        document.getElementsByClassName(this.activeLinkClassName)[0];
        document.getElementsByClassName(this.newActivePage)[0];
    }

    loadPage(href) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        xmlhttp.send();
        return xmlhttp.responseText;
    }
}

