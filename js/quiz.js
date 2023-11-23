window.onload = function() {

    let quizimg4 = document.querySelector('.quizimg4');
    let quizimg3 = document.querySelector('.quizimg3');
    let quizimg2 = document.querySelector('.quizimg2');
    let quizimg = document.querySelector('.quizimg');

    quizimg2.addEventListener('mouseenter', function() {
        quizimg.src = "./img/quiz01_2.png";
    });
    quizimg3.addEventListener('mouseenter', function() {
        quizimg.src = "./img/quiz01_3.png";
    });
    quizimg4.addEventListener('mouseenter', function() {
        quizimg.src = "./img/quiz01_4.png";
    });

    quizimg2.addEventListener('mouseleave', function() {
    });
    quizimg3.addEventListener('mouseleave', function() {
    });
    quizimg4.addEventListener('mouseleave', function() {
        quizimg.src = "./img/quiz.png";
    });
}