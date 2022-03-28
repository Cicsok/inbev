window.onpopstate = function(event) {
    let pagePath = event.state.pagePath;
    let pageName = siteConfig.URLToPageMapping[pagePath];

    let factory = new NavigatorEventListenerFactory();
    let platformType = identifyPlatformType();
    let navigator = factory.create(platformType, 'BROWSER_ARROW');
    let platformSynchronizer = PlatformSynchronizer.createInstance();

    navigator.navigate(pagePath);
    platformSynchronizer.sync(pageName, platformType);
 };