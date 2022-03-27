window.onpopstate = function(event) {

    alert("clicked button - pop");
    alert(event.state);
    alert(event);

    doSomething(event);
 };

 window.onpushstate = function(event) {

     alert("clicked button - push");
     alert(event.state);
     alert(event);

     //doSomething(event);
  };

 function doSomething(event) {
    let factory = new MenuNavigatorEventListenerFactory();
    let platformType = identifyPlatformType();
    let navigator = factory.create(platformType);
    navigator.navigateForBackArrow(event.state.replace('/', ''));

    let platformSynchronizer = PlatformSynchronizer.createInstance();
    platformSynchronizer.sync(event.state.replace('/', ''), platformType);
 }