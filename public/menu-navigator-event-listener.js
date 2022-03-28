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
        let pagePath = siteConfig.pageToURLMapping[slug];

        document.getElementById('specific-content').innerHTML = '';
        document.getElementById('specific-content').appendChild(this.loadPage(window.location.origin + pagePath));

        let state = { pagePath: pagePath};
        window.history.pushState(state, document.title, pagePath);

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