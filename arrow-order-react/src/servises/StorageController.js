export default class Storage {
    setLocal = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
        return value
    }

    getLocal = (key) => {
        let result = {}
        result = localStorage.getItem(key)
        return JSON.parse(result)
    }

    rmLocal = (key) => {
        let result = JSON.parse(localStorage.getItem(key))
        localStorage.removeItem(key);
        return result
    }

    setSession = (key, value) => {
        sessionStorage.setItem(key, JSON.stringify(value))
        return value
    }

    getSession = (key) => {
        let result = {}
        result = sessionStorage.getItem(key)
        return JSON.parse(result)
    }

    rmSession = (key) => {
        let result = JSON.parse(sessionStorage.getItem(key))
        sessionStorage.removeItem(key);
        return result
    }
}