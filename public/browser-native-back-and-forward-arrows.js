window.onpopstate = function(event) {

    alert("clicked button");

    doSomething(event);
 };

 function doSomething(event) {
    let factory = new NavigatorEventListener();

   //  let platformType = identifyPlatformType();
   //  let navigator = factory.create(platformType);
   let currentSlug = window.location.pathname.replace('/', '');
    console.log(event.state);
    factory.urlRewriter(event.state);

    let platformSynchronizer = PlatformSynchronizer.createInstance();
    platformSynchronizer.sync(event.state.replace('/', ''), platformType);
 }