function test() {
    let slug = window.location.pathname;
    let pagePath = siteConfig.pageToURLMapping[slug];
    let hash = Math.random().toString(36).substr(2, 5);

    let state = { slug: pagePath, hash: hash};
            //window.history.replaceState(state, document.title, slug);
    window.history.replaceState(state, document.title, slug);
    window.history.pushState(state, document.title, slug);

    console.log("test");
}

window.onload = test;
