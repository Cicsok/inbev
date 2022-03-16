class MenuNavigatorEventListenerFactory{
    create(platform){
        switch (platform){
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
        console.log(slug);
        document.getElementById('specific-content').innerHTML = '';
        document.getElementById('specific-content').appendChild(this.loadPage(window.location.origin + '/' + slug));
        window.history.pushState(null, null, slug);
        window.history.replaceState("back arrow button", null, null);
        window.history.pushState("fw arrow button", null, null);
        // window.history.replaceState(window.location.pathname, document.title, slug+'html');
    }

    addActiveLinkToNewActivePageOnDesktop(newActivePageSlug){
        document.getElementsByClassName(newActivePageSlug + '-page-link')[0].classList.add(this.activeLinkClassName);
    }

    addActiveLinkToNewActivePageOnMobile(newActivePageSlug){
        document.getElementsByClassName(newActivePageSlug + '-page-link-mobile')[0].classList.add(this.activeLinkClassName);
    }

    navigate(slug){
        this.urlRewriter(slug);
   
        document.getElementsByClassName(this.activeLinkClassName)[0].classList.remove(this.activeLinkClassName);

        let slugAndLinkPair = siteConfig.header.pages;
        let newActivePageSlug = Object.keys(slugAndLinkPair).find(key => key == slug);
        
        console.log(slugAndLinkPair);
        console.log(newActivePageSlug);

        let platform = identifyPlatformType();
        platform == 'DESKTOP' 
        ? this.addActiveLinkToNewActivePageOnDesktop(newActivePageSlug)
        : this.addActiveLinkToNewActivePageOnMobile(newActivePageSlug);
    }

    loadPage(href){
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        console.log(href);
        xmlhttp.send();
        let parser = new DOMParser();
        let responseDoc = parser.parseFromString (xmlhttp.responseText, "text/html");
        let specificContent = responseDoc.getElementById('specific-content');
        return specificContent;
    }







    urlRewriterForBackArrow(slug){
        document.getElementById('specific-content').innerHTML = '';
        document.getElementById('specific-content').appendChild(this.loadPage(window.location.origin + '/' + slug+'.html'));
        //window.history.replaceState("back arrow button", document.title, slug);
        //window.history.pushState("fw arrow button", document.title, slug);
        
        window.history.replaceState(null, null, slug+'.html');
        // window.history.pushState(slug, document.title, slug); -- THIS IS THE ONLY CHANGE -> THE FW BUTTON WORKS DUE TO THIS CHANGE
    }


    navigateForBackArrow(slug){
        this.urlRewriterForBackArrow(slug);
   
        document.getElementsByClassName(this.activeLinkClassName)[0].classList.remove(this.activeLinkClassName);

        let slugAndLinkPair = siteConfig.header.pages;
        let newActivePageSlug = Object.keys(slugAndLinkPair).find(key => key == slug);
        
        console.log(slugAndLinkPair);
        console.log(newActivePageSlug);

        let platform = identifyPlatformType();
        platform == 'DESKTOP' 
        ? this.addActiveLinkToNewActivePageOnDesktop(newActivePageSlug)
        : this.addActiveLinkToNewActivePageOnMobile(newActivePageSlug);
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