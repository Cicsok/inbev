window.onpopstate = function(event) {

    alert("clicked button");
    alert(event.state);
    alert(event);

    let factory = new MenuNavigatorEventListenerFactory();
    let navigator = factory.create(identifyPlatformType());
    navigator.navigate(event.state);
 };
