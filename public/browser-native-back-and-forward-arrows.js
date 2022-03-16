window.addEventListener('popstate', function(){
    this.alert("KATTINTOTTAM");
})
 function doSomething(event) {
    let factory = new NavigatorEventListener();
    let currentSlug = window.location.pathname.replace('/', '');
    let platformType = identifyPlatformType();
   //  let navigator = factory.create(platformType);
    factory.urlRewriter(currentSlug);

    let platformSynchronizer = PlatformSynchronizer.createInstance();
    platformSynchronizer.sync(event.state.replace('/', ''), platformType);
 }