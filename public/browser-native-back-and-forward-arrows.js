window.onpopstate = function(event) {

    alert("clicked button");

    doSomething(event);
 };

 function doSomething(event) {
    let factory = new NavigatorEventListener();
    let currentSlug = window.location.pathname.replace('/', '');
    let platformType = identifyPlatformType();
   //  let navigator = factory.create(platformType);
    factory.urlRewriter(currentSlug);

    let platformSynchronizer = PlatformSynchronizer.createInstance();
    platformSynchronizer.sync(event.state.replace('/', ''), platformType);
 }