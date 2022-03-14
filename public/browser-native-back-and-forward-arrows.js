window.onpopstate = function() {
    alert("clicked back button");
 }; history.pushState({}, '');