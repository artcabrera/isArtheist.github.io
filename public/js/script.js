function initScrollReveal(targetElements, defaultProps) {
    if (!targetElements.length) return;
    targetElements.forEach(({ element, animation }) => {
      ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
    });
};

const def = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    duration: 1000,
    desktop: true,
    mobile: true,
};
  
const tar = [{
    element: ".section-title",
    animation: {
        delay: 300,
        distance: "0px",
        origin: "bottom",
    },
}, {
    element: ".hero-title",
    animation: {
        delay: 500,
        origin: window.innerWidth > 768 ? "left" : "bottom",
    },
},];

initScrollReveal(tar, def);