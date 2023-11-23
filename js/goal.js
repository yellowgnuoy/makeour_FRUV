        //goal 동그라미 세개 서서히 나타나기
        let circle = new IntersectionObserver((e) => {
            e.forEach((box2) => {
                if (box2.isIntersecting) {
                    box2.target.style.opacity = 1;
                } else {
                    box2.target.style.opacity = 0;
                }
            })
        })
        
        let goalcircle = document.querySelectorAll('.goalcircle');
        
        goalcircle.forEach((element) => {
            circle.observe(element);
        });
        