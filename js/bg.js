let observer2 = new IntersectionObserver((e)=>{
    e.forEach((box2)=>{
        if (box2.isIntersecting) {
        box2.target.style.opacity = 1;
        box2.target.style.backgroundImage = 'linear-gradient(to bottom, #FE5D02 40%, #101010)';
    } else {
        box2.target.style.opacity = 0;
        box2.target.style.backgroundImage = 'linear-gradient(#101010)';
    }
    })
})

let makebg = document.querySelector('.makebg')
observer2.observe(makebg)
