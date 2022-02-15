class MenuNavigatorEventListener {
    constructor(activeLinkClassName) {
        this.activeLinkClassName = activeLinkClassName;
    }

    navigate(slug, page) {
        document.getElementById('specific-content').innerHTML = this.loadPage(window.location.origin + slug + '.html');
        window.history.replaceState(null, document.title, slug);
        document.getElementsByClassName(this.activeLinkClassName)[0].classList.remove(this.activeLinkClassName);
        page.classList.add(this.activeLinkClassName);
    }

    loadPage(href) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        xmlhttp.send();
        return xmlhttp.responseText;
    }
}

