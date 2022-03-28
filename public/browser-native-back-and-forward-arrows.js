window.onpopstate = function(event) {

    let pagePath = event.state.pagePath;
    let pageName = siteConfig.URLToPageMapping[pagePath];

    let factory = new MenuNavigatorEventListenerFactory();
    let platformType = identifyPlatformType();
    let navigator = factory.create(platformType);
    navigator.navigateForBackArrow(pagePath);

    let platformSynchronizer = PlatformSynchronizer.createInstance();
    platformSynchronizer.sync(pageName, platformType);
 };