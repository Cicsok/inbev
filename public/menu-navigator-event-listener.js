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

class NavigatorEventListener{
    constructor(activeLinkClassNamem, newActivePage = null){
        this.activeLinkClassName = activeLinkClassNamem;
        this.newActivePage = newActivePage;
    }

    navigate(slug, page = null){}

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

class MenuNavigatorEventListener extends NavigatorEventListener{

    navigate(slug, page) {
        document.getElementById('specific-content').innerHTML = '';
        document.getElementById('specific-content').appendChild(this.loadPage(window.location.origin + '/' + slug));
        window.history.replaceState(null, document.title, slug);
   
        document.getElementsByClassName(this.activeLinkClassName)[0].classList.remove(this.activeLinkClassName);
        page.classList.add(this.activeLinkClassName);
    }
}

class LogoAndButtonEventListener extends NavigatorEventListener{

    navigate(slug) {
        document.getElementById('specific-content').innerHTML = '';
        document.getElementById('specific-content').appendChild(this.loadPage(window.location.origin + '/' + slug));
        window.history.replaceState(null, document.title, slug);

        document.getElementsByClassName(this.activeLinkClassName)[0].classList.remove(this.activeLinkClassName);
        document.getElementsByClassName(this.newActivePage)[0].classList.add(this.activeLinkClassName);
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