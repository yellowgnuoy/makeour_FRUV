    const totalMinwon = 53.8;
    let t4 = 0; // 애니메이션을 초기화하는 변수

    const donut = document.querySelector('.donut');

    let observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        startDonutAnimation();
        }
    });
    }, {
    root: null, // 화면 내에서 관찰
    threshold: 0 // 뷰포트의 50% 이상이 보일 때 활성화
    });

    observer4.observe(donut);

    function startDonutAnimation() {
    const donutAnimation = setInterval(() => {
        donut.dataset.percent = t4.toFixed(1); // 1자리 소수점까지 유지
        donut.style.background = `conic-gradient(#FE5D02 0 ${t4.toFixed(1)}%, #303030 ${t4.toFixed(1)}% 100% )`;
        t4 += 0.2; // 0.1씩 증가 (1자리 소수점까지 유지)
        if (t4.toFixed(1) > totalMinwon) {
        clearInterval(donutAnimation);
        t4 = 0; // 애니메이션을 초기화
        }
    }, 5);
    }
