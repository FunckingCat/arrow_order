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

class Cake {
  constructor(options){
    this.filling = options.filling;
    this.sponge = options.sponge;
    this.cream = options.cream;
    this.weight = options.weight;
  }
}

class SpongeCake extends Cake{
  constructor(options){
    super(options)
  }
}

class HoneyCake extends Cake{
  constructor(options){
    super(options)
    this.type = options.type;
    this.form = options. form;
  }
}
