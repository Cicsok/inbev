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
        this.navigationHistoryController = NavigatorHistoryControllerFactory.getInstance();
    }

    urlRewriter(slug){
        document.getElementById('specific-content').innerHTML = '';
        // USE COMMENTED ROW WHEN YOU ARE TESTING ON LOCAL
        // document.getElementById('specific-content').appendChild(this.loadPage(window.location.origin + '/public/' + slug + '.html'));
        document.getElementById('specific-content').appendChild(this.loadPage(window.location.origin + '/' + slug));
        //window.history.replaceState("back arrow button", document.title, slug);
        //window.history.pushState("fw arrow button", document.title, slug);
        
        //window.history.replaceState(window.location.pathname, document.title, slug);


        let hash = Math.random().toString(36).substr(2, 5);
        self.window.name = hash;
        console.log("Hash: ");
        console.log(hash);
        this.navigationHistoryController.update("PAGE_NAVIGATION_BY_MENU", slug, hash);
        console.log(this.navigationHistoryController);
        console.log("=========================")

        let state = { slug: slug, hash: hash};
        window.history.pushState(state, document.title, slug);

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
        xmlhttp.send();
        let parser = new DOMParser();
        let responseDoc = parser.parseFromString (xmlhttp.responseText, "text/html");
        let specificContent = responseDoc.getElementById('specific-content');
        return specificContent;
    }







    urlRewriterForBackArrow(slug){
        document.getElementById('specific-content').innerHTML = '';
        document.getElementById('specific-content').appendChild(this.loadPage(window.location.origin + '/' + slug));
        //window.history.replaceState("back arrow button", document.title, slug);
        //window.history.pushState("fw arrow button", document.title, slug);


        let state = { slug: slug, hash: self.window.name};
        window.history.pushState(state, document.title, slug);

        window.history.replaceState(window.location.pathname, document.title, slug);
        //window.history.pushState(state, document.title, slug); //-- THIS IS THE ONLY CHANGE -> THE FW BUTTON WORKS DUE TO THIS CHANGE
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