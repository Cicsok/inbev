window.onpopstate = function(event) {

    alert("clicked back button");
    alert(event.state);
    alert(event);
 }; history.pushState({}, '');