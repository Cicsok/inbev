window.onpopstate = function(event) {

    alert("clicked button - pop");
    //alert(event.state.slug);
    //alert(event.state.hash);
    alert(event);

    doSomething(event);
 };

 function doSomething(event) {
    let factory = new MenuNavigatorEventListenerFactory();
    let platformType = identifyPlatformType();
    let navigator = factory.create(platformType);
    navigator.navigateForBackArrow(event.state.slug.replace('/', ''));

    let platformSynchronizer = PlatformSynchronizer.createInstance();
    platformSynchronizer.sync(event.state.slug.replace('/', ''), platformType);

    self.window.name = event.state.hash;
 }