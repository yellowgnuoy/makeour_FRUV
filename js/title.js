const SEC = 0.5;
let animationInProgress = false;

function clipText(dom) {
    const childs = dom.children;
    for (let i = 0; i < childs.length; i++) {
        childs[i].classList.remove('on'); // 애니메이션 클래스 제거
        void childs[i].offsetWidth; // 리플로우 강제
        childs[i].classList.add('on'); // 애니메이션 클래스 추가
    }
}

// 스크롤 이벤트 핸들러 함수
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {
        if (!animationInProgress) {
            animationInProgress = true;
            const test = document.getElementById('test');
            clipText(test);

            setTimeout(() => {
                animationInProgress = false;
            }, SEC * 1000);
        }
    }
}

// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', handleScroll);

// 페이지가 처음 로드될 때 애니메이션 시작
window.addEventListener('load', () => {
    handleScroll();
});
