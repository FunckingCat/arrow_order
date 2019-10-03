class User {
  constructor(name, contact){
    this.name = name;
    this.contact = contact;
  }

  set name(value){
    this._name = value
  }

  get name(){
    return this._name
  }

  set contact(value){
    if (validatePhone(value)){
      this._phone = validatePhone(value)
    }else if (validateInsta(value)){
      this._insta = validateInsta(value)
    }else{
      throw new Error('notValidContact')
    }
  }

  get contact(){
    if (this._insta){
      return ['insta',this._insta]
    }else if(this._phone){
      return ['phone', this._phone]
    }else{
      throw new Error('noContacts')
    }
  }
}

class Order{
  constructor(){

  }
}

class Cake extends Order{
  constructor(){
    this.inner = inner;
    this.biskit = biskit;
    this.cream = cream;
  }
}

class Bickit extends Cake{
  constructor(){

  }
}

class Honey extends Cake{
  constructor(){

  }
}

class Digit extends Honey{
  constructor(){

  }
}
