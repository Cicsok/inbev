window.addEventListener("popstate", function(e) { // if a back or forward button is clicked

    alert("clicked button");

}

 function doSomething(event) {
    let factory = new MenuNavigatorEventListenerFactory();
    let platformType = identifyPlatformType();
    let navigator = factory.create(platformType);
    navigator.navigateForBackArrow(event.state.replace('/', ''));

    let platformSynchronizer = PlatformSynchronizer.createInstance();
    platformSynchronizer.sync(event.state.replace('/', ''), platformType);
 }