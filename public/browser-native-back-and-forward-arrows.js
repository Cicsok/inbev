window.addEventListener('popstate', function(event){
    this.alert(event.state);
    doSomething()
    
})
 function doSomething() {
    let factory = new NavigatorEventListener();
    let currentSlug = window.location.pathname.replace('/', '');
    let platformType = identifyPlatformType();
   //  let navigator = factory.create(platformType);
    factory.navigate(currentSlug);

    let platformSynchronizer = PlatformSynchronizer.createInstance();
    platformSynchronizer.sync(currentSlug, platformType);
 }