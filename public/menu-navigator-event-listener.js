class MenuNavigatorEventListenerFactory {
    create(platform){
        switch (platform) {
            case 'DESKTOP':
                return new DesktopMenuNavigatorEventListener();
                break;
            case 'MOBILE':
                return new MobileMenuNavigatorEventListener();
                break;
            default:
                console.log("Platform: " + platform);
                break;
        }
    }
}

class MenuNavigatorEventListener {
    constructor(activeLinkClassName) {
        this.activeLinkClassName = activeLinkClassName;
    }

    navigate(slug, page) {
        document.getElementById('specific-content').innerHTML = this.loadPage(window.location.origin + '/' + slug);
        window.history.replaceState(null, document.title, slug);
        document.getElementsByClassName(this.activeLinkClassName)[0].classList.remove(this.activeLinkClassName);
        page.classList.add(this.activeLinkClassName);
    }

    loadPage(href) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        xmlhttp.send();
        return xmlhttp.responseText;
    }
}

class MobileMenuNavigatorEventListener extends MenuNavigatorEventListener {
    constructor(){
        super('mobile-active-link');
    }
}

class DesktopMenuNavigatorEventListener extends MenuNavigatorEventListener {
    constructor(){
        super('desktop-active-link');
    }
}