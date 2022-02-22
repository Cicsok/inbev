class LogoAndButtonEventListener {
    constructor(activeLinkClassName, newActivePage) {
        this.activeLinkClassName = activeLinkClassName;
        this.newActivePage = newActivePage
    }

    navigate(slug) {
        document.getElementById('specific-content').innerHTML = '';
        document.getElementById('specific-content').appendChild(this.loadPage(window.location.origin + '/' + slug));
        window.history.replaceState(null, document.title, slug);

        document.getElementsByClassName(this.activeLinkClassName)[0].classList.remove(this.activeLinkClassName);
        document.getElementsByClassName(this.newActivePage)[0].classList.add(this.activeLinkClassName);
    }

    loadPage(href) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        xmlhttp.send();
        let parser = new DOMParser ();
        let responseDoc = parser.parseFromString (xmlhttp.responseText, "text/html");
        let neededContent = responseDoc.getElementById('specific-content');
        return neededContent;
    }
}

