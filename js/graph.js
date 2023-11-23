let graph = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scaleY(1)'; // 높이를 원래 크기로 설정
            entry.target.style.opacity = 1; // 투명도를 1로 설정
        } else {
            entry.target.style.transform = 'scaleY(0)'; // 높이를 0으로 설정
            entry.target.style.opacity = 0; // 투명도를 0으로 설정
        }
    });
});

// 요소에 IntersectionObserver 적용
const graphElement = document.querySelector('.graph2');
graph.observe(graphElement);