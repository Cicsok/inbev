window.onpopstate = function(event) {

    alert("clicked button");
    alert(event.state);
    alert(event);

    let factory = MenuNavigatorEventListenerFactory.createInstance();
    let navigator = factory.create(identifyPlatformType());
    navigator.navigate(event.state);
 };
