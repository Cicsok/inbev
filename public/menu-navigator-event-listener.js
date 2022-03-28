class MenuNavigatorEventListenerFactory{
    create(platform) {
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

    create(platform, navigationType) {
        if (platform == 'DESKTOP' && navigationType == 'MENU') {
            return new DesktopMenuNavigatorEventListener();
        } else if (platform == 'DESKTOP' && navigationType == 'BROWSER_ARROW') {
            return new DesktopBrowserArrowNavigatorEventListener();
        } else if (platform == 'MOBILE' && navigationType == 'MENU') {
            return new MobileMenuNavigatorEventListener();
        } else if (platform == 'MOBILE' && navigationType == 'BROWSER_ARROW') {
            return new MobileBrowserArrowNavigatorEventListener();
        }
    }
}

class NavigatorEventListener{
    constructor(activeLinkClassName){
        this.activeLinkClassName = activeLinkClassName;
    }

    urlRewriter(slug){
        let pagePath = siteConfig.pageToURLMapping[slug];

        document.getElementById('specific-content').innerHTML = '';
        document.getElementById('specific-content').appendChild(this.loadPage(window.location.origin + pagePath));

        let state = { pagePath: pagePath};
        this.changeHistory(state, document.title, pagePath);
    }

    navigate(slug){
        this.urlRewriter(slug);
   
        document.getElementsByClassName(this.activeLinkClassName)[0].classList.remove(this.activeLinkClassName);

        let searchPage = siteConfig.URLToPageMapping[slug];
        let newActivePageSlug = Object.keys(siteConfig.header.pages).find(key => key == searchPage);

        let platform = identifyPlatformType();
        platform == 'DESKTOP' 
        ? this.addActiveLinkToNewActivePageOnDesktop(newActivePageSlug)
        : this.addActiveLinkToNewActivePageOnMobile(newActivePageSlug);
    }

    changeHistory(state, title, path) {

    }

     urlRewriterForBackArrow(slug){
          let pagePath = siteConfig.pageToURLMapping[slug];

          document.getElementById('specific-content').innerHTML = '';
          document.getElementById('specific-content').appendChild(this.loadPage(window.location.origin + pagePath));

          let state = { pagePath: pagePath};
          window.history.replaceState(state, document.title, pagePath);
        }


     navigateForBackArrow(slug){
         this.urlRewriterForBackArrow(slug);

         document.getElementsByClassName(this.activeLinkClassName)[0].classList.remove(this.activeLinkClassName);

         let searchPage = siteConfig.URLToPageMapping[slug];
         let newActivePageSlug = Object.keys(siteConfig.header.pages).find(key => key == searchPage);

         let platform = identifyPlatformType();
         platform == 'DESKTOP'
         ? this.addActiveLinkToNewActivePageOnDesktop(newActivePageSlug)
         : this.addActiveLinkToNewActivePageOnMobile(newActivePageSlug);
        }

     addActiveLinkToNewActivePageOnDesktop(newActivePageSlug){
         document.getElementsByClassName(newActivePageSlug + '-page-link')[0].classList.add(this.activeLinkClassName);
     }

     addActiveLinkToNewActivePageOnMobile(newActivePageSlug){
         document.getElementsByClassName(newActivePageSlug + '-page-link-mobile')[0].classList.add(this.activeLinkClassName);
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
}

class MenuNavigatorEventListener extends NavigatorEventListener {
     changeHistory(state, title, path) {
        window.history.pushState(state, title, path);
     }
}

class BrowserArrowNavigatorEventListener extends NavigatorEventListener {
     changeHistory(state, title, path) {
        window.history.replaceState(state, title, path);
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

class MobileBrowserArrowNavigatorEventListener extends BrowserArrowNavigatorEventListener {
    constructor(){
        super('mobile-active-link');
    }
}

class DesktopBrowserArrowNavigatorEventListener extends BrowserArrowNavigatorEventListener {
    constructor(){
        super('desktop-active-link');
    }
}