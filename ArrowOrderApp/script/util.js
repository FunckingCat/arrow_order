function validatePhone(str) {
    reg = /\d/gi
    match = str.match(reg)
    if (match != null && match.length == 11 && (match[0] == 7 || match[0] == 8) && match[1] == 9){
        return match.join('')
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
