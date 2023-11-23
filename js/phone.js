        // //핸드폰 올라와라 효과
        // let observer = new IntersectionObserver((e)=>{
        //     e.forEach((box)=>{
        //         if (box.isIntersecting){
        //         box.target.style.transform = 'translateY(-30vw)';
        //         } else {
        //         box.target.style.transform = 'translateY(0)';
        //         }
        //     })
        // })

        // let makeimg = document.querySelector('.makeimg')
        // observer.observe(makeimg)
        function debounce(func, wait = 20, immediate = true) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };
        
        let observer = new IntersectionObserver(debounce((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = 'translateY(-700px)';
                    entry.target.style.opacity = 1;
                } else {
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.opacity = 0;
                }
            });
        }, 200), { threshold: 0 });
        
        let makeimg = document.querySelector('.makeimg');
        observer.observe(makeimg);
        