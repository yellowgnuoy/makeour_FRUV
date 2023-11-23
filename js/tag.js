
    let tag06 = document.querySelector('.tag06');
    let tag05 = document.querySelector('.tag05');
    let tag04 = document.querySelector('.tag04');
    let tag03 = document.querySelector('.tag03');
    let tag02 = document.querySelector('.tag02');
    let tag01 = document.querySelector('.tag01');

    tag02.addEventListener('mouseenter', function() {
        tag01.src = "./img/tag01_2.png";
    });
    tag03.addEventListener('mouseenter', function() {
        tag01.src = "./img/tag01_3.png";
    });
    tag04.addEventListener('mouseenter', function() {
        tag01.src = "./img/tag01_4.png";
    });
    tag05.addEventListener('mouseenter', function() {
        tag01.src = "./img/tag01_5.png";
    });
    tag06.addEventListener('mouseenter', function() {
        tag01.src = "./img/tag01_6.png";
    });
    tag06.addEventListener('mouseleave', function() {
        tag01.src = "./img/tag01.png";
    });