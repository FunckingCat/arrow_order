function setChacheInfo() {
  if (localStorage.getItem('user')){
    user = JSON.parse(localStorage.getItem('user'));
    user = new User(user._name, user._insta||user._phone)
    $('.login form div input').each(function() {
      if($(this).attr('kind') == 'name'){
        console.log(user._name)
        $(this).val(user.name)
      }else if($(this).attr('kind') == 'contact'){
        $(this).val(user.contact[1])
      }
    });
  }
}

function validatePhone(str) {
    reg = /\d/gi
    match = str.match(reg)
    if (match != null && match.length == 11 && (match[0] == 7 || match[0] == 8) && match[1] == 9){
        return `${match[0]}(${match[1]}${match[2]}${match[3]}) ${match[4]}${match[5]}${match[6]}-${match[7]}${match[8]}-${match[9]}${match[10]}`
    }
    return false
}

function validateInsta(str) {
    reg = /^@*[\w\d\.]+$/ig
    match = str.match(reg)
    if (match){
        return match[0]
    }
    return false
}

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
    //Сохранение данных в LocalStorage
    vals = $('.login form div input').map(function() {
      return $(this).val()
    }).get();
    user = new User(vals[0], vals[1]);
    localStorage.setItem('user', JSON.stringify(user));
    console.log('Переход на другую страницу')
    //Дописать код перехода на главную страницу или скрытия окна решистрации
  }
}

function formulaParser(formula) {//Должна вернуть объект скласса торта
  let reg = /^(?<type>[A-Z]+):(?<filling>[A-Z]+)-(?<sponge>[A-Z]+)~(?<cream>[A-Z]+)/i
  let groups = formula.match(reg).groups;
  //Даллее сюда пишем развертывание в объект с полноценными свойствами
  return groups
}
