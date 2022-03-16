window.onpopstate = function(event) {

    alert("clicked button");
    alert(event.state);
    alert(event);

    doSomething(event);
 };

 function doSomething(event) {
    let factory = new NavigatorEventListener();

   //  let platformType = identifyPlatformType();
   //  let navigator = factory.create(platformType);
   let currentSlug = window.location.pathname.replace('/', '');
    factory.urlRewriter(currentSlug);

    let platformSynchronizer = PlatformSynchronizer.createInstance();
    platformSynchronizer.sync(event.state.replace('/', ''), platformType);
 }