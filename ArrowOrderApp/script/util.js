function validatePhone(str) {
    reg = /\d/gi
    match = str.match(reg)
    if (match.length == 11 && (match[0] == 7 || match[0] == 8) && match[1] == 9){
        return true
    }
    return false
}

function validateInsta(str) {
    reg = /^@*[\w\d\.]+$/ig
    if (str.match(reg)){
        return true
    }
    return false
}
