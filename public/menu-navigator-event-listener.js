class MenuNavigatorEventListenerFactory{
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
    constructor(activeLinkClassName){
        this.activeLinkClassName = activeLinkClassName;
    }

    urlRewriter(slug){
        document.getElementById('specific-content').innerHTML = '';
        document.getElementById('specific-content').appendChild(this.loadPage(window.location.origin + '/' + slug));
        window.history.replaceState(null, document.title, slug);
    }

    navigate(slug){
        this.urlRewriter(slug);
   
        document.getElementsByClassName(this.activeLinkClassName)[0].classList.remove(this.activeLinkClassName);

        let slugAndLinkPair = siteConfig.header.pages;
        let newActivePageSlug = Object.keys(slugAndLinkPair).find(key => key == slug);

        let platform = identifyPlatformType();
        platform == 'DESKTOP' 
        ? document.getElementsByClassName(newActivePageSlug + '-page-link')[0].classList.add(this.activeLinkClassName)
        : document.getElementsByClassName(newActivePageSlug + '-page-link-mobile')[0].classList.add(this.activeLinkClassName);
    }

    loadPage(href){
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        xmlhttp.send();
        let parser = new DOMParser ();
        let responseDoc = parser.parseFromString (xmlhttp.responseText, "text/html");
        let specificContent = responseDoc.getElementById('specific-content');
        return specificContent;
    }
}

class MobileMenuNavigatorEventListener extends NavigatorEventListener{
    constructor(){
        super('mobile-active-link');
    }
}

class DesktopMenuNavigatorEventListener extends NavigatorEventListener{
    constructor(){
        super('desktop-active-link');
    }
}