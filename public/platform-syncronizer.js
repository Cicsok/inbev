class PlatformSyncronizer {

    constructor(desktopActiveClassName, mobileActiveClassName) {
        this.desktopActiveClassName = desktopActiveClassName;
        this.mobileActiveClassName = mobileActiveClassName;
    }

    syncForMobile(slug) {
        let toClassName = siteConfig.menuNavigationPlatformMapping[slug].mobileClass;

        this.removeActiveClassName(this.mobileActiveClassName);
        this.addActiveClassName(toClassName, this.mobileActiveClassName);
    }

    syncForDesktop(slug) {
        let toClassName = siteConfig.menuNavigationPlatformMapping[slug].desktopClass;

        this.removeActiveClassName(this.desktopActiveClassName);
        this.addActiveClassName(toClassName, this.desktopActiveClassName);
    }

    removeActiveClassName(activeClassName) {
        document.getElementsByClassName(activeClassName)[0].classList.remove(activeClassName);
    }

    addActiveClassName(toClassName, activeClassName) {
        document.getElementsByClassName(toClassName)[0].classList.add(activeClassName);
    }
}