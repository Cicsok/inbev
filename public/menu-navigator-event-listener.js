class MenuNavigatorEventListener {

    constructor(activeLinkClassName) {
        this.activeLinkClassName = activeLinkClassName;
    }

    navigate(slug, page) {
        console.log(slug + " KATTINTOTTAK!!");
        document.getElementById('spesific-content').innerHTML = this.loadPage(window.location.origin + '/public/' + slug + '.html');
        window.history.replaceState(null, document.title, slug);
        console.log(window.location.origin + '/public/' + slug + '.html');

        document.getElementsByClassName(this.activeLinkClassName)[0].classList.remove(this.activeLinkClassName);
        console.log(page);
        page.classList.add(this.activeLinkClassName);
        console.log(page);
    }

    loadPage(href) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        xmlhttp.send();
        return xmlhttp.responseText;
    }
}

