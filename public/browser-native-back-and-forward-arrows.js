window.onpopstate = function(event) {

    alert("clicked button");
    alert(event.state);
    alert(event);

    let factory = new MenuNavigatorEventListenerFactory();
    let platformType = identifyPlatformType();
    let navigator = factory.create(platformType);
    navigator.navigate(event.state.replace('/', ''));

    let platformSynchronizer = PlatformSynchronizer.createInstance();
    platformSynchronizer.sync(event.state.replace('/', ''), platformType);
 };
