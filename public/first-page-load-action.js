window.onload = function(event) {
       let slug = window.location.pathname;
       let pagePath = siteConfig.pageToURLMapping[slug];

       let state = { slug: pagePath};
                   //window.history.replaceState(state, document.title, slug);
       window.history.replaceState(state, document.title, pagePath);

       console.log("test");
       console.log(slug);
       console.log(pagePath);
};
