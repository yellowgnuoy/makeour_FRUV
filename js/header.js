// Hide Header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 0; // 동작의 구현이 시작되는 위치
var header = document.querySelector('header');
var navbarHeight = header.offsetHeight; // 영향을 받을 요소를 선택

// 스크롤시에 사용자가 스크롤했다는 것을 알림
window.addEventListener('scroll', function(event) {
    didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(lastScrollTop - st) <= delta) {
        return;
    }

    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        header.classList.remove('nav-down');
        header.classList.add('nav-up');
        header.style.top = -navbarHeight + 'px'; // 헤더 숨기기
    } else {
        // Scroll Up
        if (st + window.innerHeight < document.documentElement.scrollHeight) {
            header.classList.remove('nav-up');
            header.classList.add('nav-down');
            header.style.top = '0'; // 헤더 보이기
        }
    }

    lastScrollTop = st;
}
