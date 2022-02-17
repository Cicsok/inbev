function  identifyPagePath(){
    return window.location.pathname;
}

let pathName = identifyPagePath();
switch (pathName) {
    case '/public/index.html':
    case '/':
        includeToEveryPages();
        includeOnlyHomePage();
        break;
    case 'about-me':
        includeToEveryPages();
        includeOnlyHomePage();
        console.log('I am on about-me page!');
        break;
    case 'reference-works':
        includeToEveryPages();
        includeOnlyHomePage();
        console.log('I am on reference-works page!');
        break;
    case 'contact':
        includeToEveryPages();
        includeOnlyHomePage();
        console.log('I am on  page contact page!');
        break;
    default:
        console.log('The path you entered does not exist!')
        break;
}

function includeJavasScript(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.async = false;
    document.getElementsByTagName('head').item(0).appendChild(script);
}

function includeCss(file) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = file;
    document.getElementsByTagName('head').item(0).appendChild(link);
}

function includeToEveryPages(){
    includeJavasScript('siteConfig.js');
    includeJavasScript('logo-and-button-event-listener.js');
    includeJavasScript('menu-navigator-event-listener.js');
    includeJavasScript('platform-syncronizer.js');
    includeJavasScript('node-functions.js');
    includeJavasScript('desktop-header-util-functions.js');
    includeJavasScript('create-mobile-pages-links-functions.js');
    includeJavasScript('https://kit.fontawesome.com/df226d5321.js');
    includeJavasScript('mobile-header.js');
    includeJavasScript('desktop-header.js');
    includeJavasScript('footer-abstract-class.js');
    includeJavasScript('desktop-footer.js');
    includeJavasScript('mobile-footer.js');
    includeCss('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;800&display=swap');
    includeCss('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
    includeCss('mobile-header-style.css');
    includeCss('desktop-header-style.css');
    includeCss('desktop-footer-style.css');
    includeCss('mobile-footer-style.css');
    includeJavasScript('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');
}

function includeOnlyHomePage(){
    includeJavasScript('create-carousel-inner-for-home-page-slider-functions.js');
    includeJavasScript('home-page-slider.js');
    includeJavasScript('home-page-introduction.js');
    includeCss('index-style.css');
}