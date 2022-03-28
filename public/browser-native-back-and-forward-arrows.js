window.onpopstate = function(event) {

    let pagePath = event.state.pagePath;
    let pageName = siteConfig.URLToPageMapping[pagePath];

    let factory = new NavigatorEventListenerFactory();
    let platformType = identifyPlatformType();
    let navigator = factory.create(platformType, 'BROWSER_ARROW');
    navigator.navigate(pagePath);

    let platformSynchronizer = PlatformSynchronizer.createInstance();
    platformSynchronizer.sync(pageName, platformType);
 };