        //커뮤니티 글 옆으로 이동
        let community = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // 화면 위에서 스크롤하여 요소가 화면에 들어왔을 때 효과를 적용
                    entry.target.style.transform = 'translateX(4vw)';
                    entry.target.style.opacity = 1;
                } else {
                    // 그 외의 경우에는 효과를 제거
                    entry.target.style.transform = 'translateX(0)';
                    entry.target.style.opacity = 0;
                }
            });
        });
        
        let community01 = document.querySelector('.community01_2');
        community.observe(community01);