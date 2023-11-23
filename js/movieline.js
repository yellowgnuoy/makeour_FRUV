let reveal = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            document.querySelector('.movieline').style.opacity = '100%';
        } else {
            entry.target.classList.remove('reveal');
            document.querySelector('.movieline').style.opacity = '0%';
        }
    });
}, { rootMargin: "0px 0px -100px 0px" });

document.querySelectorAll('.movieline').forEach(movieline => {
    reveal.observe(movieline);
});