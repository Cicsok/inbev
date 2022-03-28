window.onload = function(event) {
    let slug = window.location.pathname;
    let pagePath = siteConfig.pageToURLMapping[slug];
    let state = { pagePath: pagePath};

    window.history.replaceState(state, document.title, pagePath);
};
