function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function identifyPlatformType() {
    return window.innerWidth >= 992
      ? 'DESKTOP'
      : 'MOBILE';
  }