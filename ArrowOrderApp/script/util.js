//================================================================
//                    LOG IN FUNCTIONS
//================================================================

// Устанавливает значения в поля ввода из локального хранилища
function setChacheInfo() {
  if (localStorage.getItem('user')){
    user = JSON.parse(localStorage.getItem('user'));
    user = new User(user._name, user._insta||user._phone)
    $('.login form div input').each(function() {
      if($(this).attr('kind') == 'name'){
        $(this).val(user.name)
      }else if($(this).attr('kind') == 'contact'){
        $(this).val(user.contact[1])
      }
    });
  }
}

//проверяет правильность ввода телефона
function validatePhone(str) {
    reg = /\d/gi
    match = str.match(reg)
    if (match != null && match.length == 11 && (match[0] == 7 || match[0] == 8) && match[1] == 9){
        return `${match[0]}(${match[1]}${match[2]}${match[3]}) ${match[4]}${match[5]}${match[6]}-${match[7]}${match[8]}-${match[9]}${match[10]}`
    }
    return false
}

// Проверяет правильность ввода Instagram
function validateInsta(str) {
    reg = /^@*[\w\d\.]+$/ig
    match = str.match(reg)
    if (match){
        return match[0]
    }
    return false
}

// Выводит надописи под полями ввода в соответсвие с введенными в них данными
function loginValidationLabel() {
  $('.login form div input').nextAll('.valid').html('').end().each(function() {
    if ($(this).val() != ''){
      if($(this).attr('validate')){
        if(validatePhone($(this).val())){
          $(this).nextAll('.valid').html('Корректный номер').css('color','green');
        }else if(validateInsta($(this).val())){
            $(this).nextAll('.valid').html('Корректный инстаграм').css('color','green');
        }else{
          $(this).nextAll('.valid').html('Некорректный ввод').css('color','rgb(134, 0, 0)');
        }
      }
    }else{
      $(this).nextAll('.valid').html('Обязательное поле').css('color','rgb(134, 0, 0)');
    }
  });
}

//Перенаправляет на главную страницу в случае корректного ввода, сохраняет последний Некорректный ввод в LocalStorage
function loginIfValidInput() {
  result = $('.login form div input').map(function() {
    val = $(this).val()
    if (val == '') return false
    if ($(this).attr('validate')){
      if (validateInsta(val)||validatePhone(val)){
          return true
      }else{
        return false
      }
    }
    return true
  }).get();
  if (result.indexOf(false) == -1){
    vals = $('.login form div input').map(function() {
      return $(this).val()
    }).get();
    user = new User(vals[0], vals[1]);
    localStorage.setItem('user', JSON.stringify(user));
    console.log('Переход на другую страницу')
    location.href = '/mainPage.html'
  }
}
//Убрать в нужный раздел
function formulaParser(formula) {//Должна вернуть объект скласса торта
  let reg = /^(?<type>[A-Z]+):(?<filling>[A-Z]+)-(?<sponge>[A-Z]+)~(?<cream>[A-Z]+)/i
  let groups = formula.match(reg).groups;
  //Даллее сюда пишем развертывание в объект с полноценными свойствами
  return groups
}
//================================================================
//                    MAIN PAGE FUNCTIONS
//================================================================

function parallaxMainPage() {
  const images = document.querySelectorAll('.parallax-container .thumbnail');
  new simpleParallax(images,{
    scale: 1.7,
    delay: 0,
    orientation: 'down',
  });
}

//================================================================
//                    BURGER MENU FUNCTIONS
//================================================================

function showBurgerMenu(){
    $('.mainPage').css('display','none');
    $('.burgerMenu').css('display','flex');
}

//================================================================
//                    CONSTRUCTOR FUNCTIONS
//================================================================

//Парсит формулу торта в объект - недописана
function formulaParser(formula) {//Должна вернуть объект скласса торта
  let reg = /^(?<type>[A-Z]+):(?<filling>[A-Z]+)-(?<sponge>[A-Z]+)~(?<cream>[A-Z]+)/i
  let groups = formula.match(reg).groups;
  //Даллее сюда пишем развертывание в объект с полноценными свойствами
  return groups
}
