const initialState = {
    name : undefined,
    contact : undefined,
    contactMessage : ''
}

const validatePhone = (str = '') => {
    const reg = /\d/gi
    console.log(str);
    let match = str.match(reg)
    if (match != null && match.length === 11 && (match[0] === '7' || match[0] === '8') && match[1] === '9'){
        return `${match[0]}(${match[1]}${match[2]}${match[3]}) ${match[4]}${match[5]}${match[6]}-${match[7]}${match[8]}-${match[9]}${match[10]}`
    }
return false
}

const validateInsta = (str = '')=> {
    // eslint-disable-next-line no-useless-escape
    const reg = /^@*[\w\d\.]+$/ig
    let match = str.match(reg)
    if (match){
        return match[0]
    }
return false
}

const loginReducer = (state = initialState, action) => {
    let value = action.value
    switch (action.type){
        case 'SET_NAME':
            if(value === ''){
                return Object.assign({},state,{
                    name : undefined
                })
            }
            return Object.assign({},state,{
                name : value
            })
        case 'SET_CONTACT':
            if (value === '') {
                return Object.assign({},state,{ 
                    contact : undefined,
                    contactMessage : 'Обязательное поле'
                })
            }
            if (value === '@'){
                return Object.assign({},state,{ 
                    contact : undefined,
                    contactMessage : ''
                })
            } else if (validatePhone(value)) {
                return Object.assign({},state,{ 
                    contact : validatePhone(value),
                    contactMessage :  undefined
                })
            } else if (validateInsta(value)) {
                if (value[0] === '@'){
                    return Object.assign({},state,{ 
                        contact : value,
                        contactMessage :  undefined 
                    })
                } else {
                    return Object.assign({},state,{ 
                        contact : '@' + value,
                        contactMessage :  undefined  
                    })
                }
            } else {
                return Object.assign({},state,{ 
                    contact : undefined,
                    contactMessage : 'Некорркетный ввод'
                })
            }
        default:
            return state
    }
}

export default loginReducer