init();
const swup = new Swup(); console.log(swup);
swup.on('contentReplaced', init);
function init(){
//================================================================
//                    REMOVABLE INSTRUCTIONS
//================================================================

//================================================================
//                    GLOBAL INSTRUCTIONS
//================================================================



//================================================================
//                    LOG IN LISTENERS
//================================================================

setChacheInfo();
//Добавляет входные данные из хранилища
$('.login form input[type="text"]').on('input', loginValidationLabel);
//Обработчик правильности ввода; Выводит надписи
$('.login form input[type="text"]').on('input', loginIfValidInput);
//Включает ссылку на главную страницу если данные корректны
$('.login form a').on('click', chacheCreateUser);
//================================================================
//                    MAIN PAGE LISTENERS
//================================================================
parallaxMainPage();
//Запускает паралакс на главной странице
$('.mainPage .hat .burger').on('click', showBurgerMenu);

//================================================================
//                    BURGER MENU LISTENERS
//================================================================
}
