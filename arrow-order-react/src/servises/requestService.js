export default class requestService {
    constructor(domen = '') {
        this._apiBase = domen;
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if ( !res || !res.ok){
            throw new Error(`Could not fetch ${url}; recived ${res.status}`)
        }
        let response = await res.json();
        console.log(`Адрес: ${this._apiBase}${url}\nType: ${typeof(response.values)} ---`, response.values);
        return response.values;
    }

    postRequest = async (url, body) => {
        const res = await fetch(`${this._apiBase}${url}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: body,
        })
        .catch(() => {});
        try{
            let response = await res.json();
            console.log(`ORDER_POST ${response.status}`);
            return response;
        } 
        catch{
            console.error('Disconnect');
            return {status : 'Disconnect'}
        }
    }

    getMainPageBlocksContents = async () => {
       const res = await this.getResource('/api/menu/main/')
       return res
    }

    getBurgerMenuContent = async () => {
        const res = await this.getResource('/api/menu/burger/')
        return res
    }

    getWiki = async (id) => {
        let res
        if (id){
            res = await this.getResource(`/api/wiki/sub/${id}/`);
        } else {
            res = await this.getResource('/api/wiki/categories/');
        }        
        return res
    }

    getWikiCard = async (hashtag) => {
        if (!hashtag) return
        let res = {values : []}
        try{
            res = await this.getResource(`/api/wiki/card/${hashtag}/`)
            .catch(error => console.log('Got Error', error));
        } catch {}
        return res
    }

    getCakeInfo = async (conType, type = '', parametrs = {}) => {
        let res;
        let con;
        switch (conType) {
            case 'Бисквитный торт':
                con = 'biscuit';
                break 
            case 'Открытый медовик':
            case'Торт - цифра': 
                con = 'honey';
                break 
            case 'Капкейки':
                con = 'cup';
                break
            default:
                con = '';
                break
        }
        let {filling = '', biscuit = '', cream = ''} = parametrs;
        switch (type) {
            case 'Начинка':
            case 'filling':
                res = await this.getResource(`/api/constructor/${con}/filling/${biscuit}$${cream}${biscuit||cream? '/' : ''}`);
                break;
            case 'Бисквит':
            case 'biscuit':
                res = await this.getResource(`/api/constructor/${con}/biscuit/${filling}${filling? '/' : ''}`);
                break;
            case 'Крем':
            case 'cream':
                res = await this.getResource(`/api/constructor/${con}/cream/${filling}${filling? '/' : ''}`);
                break;
            default:
                res = ['Unknown type in getCakeInfo']
        }
        return res
    }

    getProducts = async (cat = '') => {
        let res = await this.getResource(`/api/products/${cat}`)
        return res
    }

    getDetails = async (type) => {
        let res = await this.getResource(`/api/details/${type}/`);
        return res
    }

    getProductCard = async (type) => {
        let res = await this.getResource(`/api/productCard/${type}/`);
        return res
    }

    getBusyDays = async (month) => {
        let res = await this.getResource(`/api/avalDates/${month}/`);
        return res
    }

    postOrder = async (order) => {
        const res = await this.postRequest('/api/postOrder/', order);
        return res
    }
}
