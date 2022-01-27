function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);

}

include('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');
include('./js/siteConfig.js');
include('./js/header.js');
include('./js/footer.js');
include('./js/home-page-slider.js');
include('./js/home-page-introduction.js');
