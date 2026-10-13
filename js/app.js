var titleText = 'Привет, мой друг! Добро пожаловать на сайт группы отелей Selly Hotels!';

var promoTitle = document.getElementById('promoTitle'); // получаем заголовок страницы
promoTitle.innerText = titleText;                       // заменяем текст в заголовке

// Показ остальных отзывов по кнопке
var showAllFeedbacksButton = document.getElementById('showAllFeedbacks');
var hiddenFeedbacks = document.getElementById('hiddenFeedbacks');

showAllFeedbacksButton.addEventListener('click', function () {
    hiddenFeedbacks.classList.remove('hidden');   // показываем скрытые отзывы
    showAllFeedbacksButton.style.display = 'none'; // прячем кнопку
});