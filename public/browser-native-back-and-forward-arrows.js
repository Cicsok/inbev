window.onpopstate = function() {
    console.log("ASD");
    switch(location.hash) {
        case '#home':
            backFromHome()
            break
        case '#login':
            backFromLogin()
            break
        default:
            defaultBackAnimation()
    }
}