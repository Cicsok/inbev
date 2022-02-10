function onWhichPageWeAre(searchedTerm){
    return window.location.href.search(searchedTerm) == -1
    ? false
    : true;
}

let onHomePage = onWhichPageWeAre('index');
let onAboutMePage = onWhichPageWeAre('about-me');
let onContactPage = onWhichPageWeAre('contact');
let onReferenceWorksPage = onWhichPageWeAre('reference-works');
function includeToEveryPages(){
    includeJavasScript('siteConfig.js');
    includeJavasScript('create-node-and-append-functions.js');
    includeJavasScript('create-logo-and-button-in-desktop-header-functions.js');
    includeJavasScript('create-pages-and-informations-to-desktop-header-functions.js');
    includeJavasScript('create-mobile-pages-links-functions.js');
    includeJavasScript('https://kit.fontawesome.com/df226d5321.js');
    includeJavasScript('mobile-header.js');
    includeJavasScript('desktop-header.js');
    includeJavasScript('desktop-footer.js');
    includeJavasScript('mobile-footer.js');
    includeJavasScript('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');
    includeCss('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
    includeCss('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;800&display=swap');
    includeCss('mobile-header-style.css');
    includeCss('desktop-header-style.css');
    includeCss('desktop-footer-style.css');
    includeCss('mobile-footer-style.css');
}
if(onHomePage){
    includeToEveryPages();
    includeJavasScript('create-carousel-inner-for-home-page-slider-functions.js');
    includeJavasScript('home-page-slider.js');
    includeJavasScript('home-page-introduction.js');
    includeCss('index-style.css');
}

if(onAboutMePage){
    includeToEveryPages();
}

if(onContactPage){
    includeToEveryPages();
}

if(onReferenceWorksPage){
    includeToEveryPages();
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