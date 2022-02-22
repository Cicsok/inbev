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
        document.getElementById('specific-content').innerHTML = '';
        document.getElementById('specific-content').appendChild(this.loadPage(window.location.origin + '/' + slug));
        window.history.replaceState(null, document.title, slug);
   
        document.getElementsByClassName(this.activeLinkClassName)[0].classList.remove(this.activeLinkClassName);
        page.classList.add(this.activeLinkClassName);
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