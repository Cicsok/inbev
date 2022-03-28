window.onpopstate = function(event) {

    let pathName = event.state.pagePath;

    let factory = new MenuNavigatorEventListenerFactory();
    let platformType = identifyPlatformType();
    let navigator = factory.create(platformType);
    navigator.navigateForBackArrow(pathName);

    let platformSynchronizer = PlatformSynchronizer.createInstance();
    platformSynchronizer.sync(pathName, platformType);
 };