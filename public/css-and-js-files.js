function includeJavasScript(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.async = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

function includeCss(file) {

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = file;

    document.getElementsByTagName('head').item(0).appendChild(link);
}


includeCss('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
includeCss('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;800&display=swap');
includeCss('header-style.css');
includeCss('footer-style.css');
includeCss('index-style.css');

includeJavasScript('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');
includeJavasScript('siteConfig.js');
includeJavasScript('header.js');
includeJavasScript('home-page-slider.js');
includeJavasScript('home-page-introduction.js');
includeJavasScript('footer.js');
