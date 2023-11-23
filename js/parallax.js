const elements = Array.from({length: 5}, (_, i) => 
({element: document.querySelector(`.onback0${i+1}`), startScrollY: 0}));

elements.forEach(({element, startScrollY}, i) => {
const parallax = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        window.addEventListener('scroll', scrollHandlers[i]);
        startScrollY = window.scrollY;
    } else {
        window.removeEventListener('scroll', scrollHandlers[i]);
    }
    });
});

function scrollHandler() {
    const scrollY = window.scrollY;
    const deltaY = scrollY - startScrollY;
    element.style.transform = `translate3d(0, ${deltaY * 0.3}px, 0)`;
}

const scrollHandlers = elements.map(() => scrollHandler);

parallax.observe(element);
});