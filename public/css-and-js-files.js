includeJavasScript('siteConfig.js');
includeJavasScript('mobile-header.js');
includeJavasScript('desktop-header.js');
includeJavasScript('home-page-slider.js');
includeJavasScript('home-page-introduction.js');
includeJavasScript('mobile-footer.js');
includeJavasScript('desktop-footer.js');
includeJavasScript('https://kit.fontawesome.com/df226d5321.js');
includeJavasScript('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');

includeCss('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
includeCss('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;800&display=swap');
includeCss('mobile-header-style.css');
includeCss('desktop-header-style.css');
includeCss('desktop-footer-style.css');
includeCss('mobile-footer-style.css');
includeCss('index-style.css');

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