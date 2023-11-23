// 이미지 요소들의 클래스 이름 리스트
var symbolClasses = ['.symbol01', '.symbol02', '.symbol03', '.symbol04', '.symbol05'];

// 각 이미지 요소에 대응하는 메시지 리스트
var messages = [
    '세상의 조화를 위해 공감으로 첫 걸음을 딛어 따뜻한 세상을 만들어 갈 거예요.',
    '많은 공감들이 모여 영 케어러들이 살아갈 터전을 꾸려나가요.',
    '공감으로 모두가 화합하여 반짝반짝 빛이 나는 희망을 만들어가요.',
    '여러번의 영화 관람으로 가치소비를 펼쳐나가요.',
    '영 케어러와 서포터, 더 나아가 공감으로 연결되는 하나의 세상으로 바꾸어요.'
];

var timeoutId;

// 각 이미지 요소에 대해 이벤트를 등록합니다.
symbolClasses.forEach(function(className, index) {
    var image = document.querySelector(className);

    // 호버 이벤트를 추가합니다.
    image.addEventListener('mouseover', function() {
        // 각 이미지 요소에 대응하는 메시지를 설정합니다.
        document.querySelector('.centersymbolTitle').innerHTML = messages[index];
        // 호버한 이미지 요소의 opacity를 100%로 설정합니다.
        image.style.opacity = '100%';
        document.querySelector('.centersymbolTitle').style.opacity = '100%';
        clearTimeout(timeoutId);
    });

    // 호버가 끝나는 이벤트를 추가합니다.
    image.addEventListener('mouseout', function() {
        // 호버가 끝난 이미지 요소의 opacity를 0%로 설정합니다.
        image.style.opacity = '0%';
        // 2초 후에 메시지를 변경합니다.
        timeoutId = setTimeout(function() {
            document.querySelector('.centersymbolTitle').innerHTML = '궁금한 아이콘에 마우스 ☛ 를 올려, FRUV의 열매를 확인해보세요';
            document.querySelector('.centersymbolTitle').style.opacity = '50%';
        }, 1000);
    });
});
