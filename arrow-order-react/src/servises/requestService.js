export default class requestService {
    constructor(domen = '') {
        this._apiBase = domen;
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok){
            //throw new Error(`Could not fetch ${url}; recived ${res.status}`)
        }
        let response = await res.json();
        console.log(`Адрес: ${this._apiBase}${url}\nType: ${typeof(response.values)} ---`, response.values);
        return response.values;

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
        let res = {values : []}
        try{
            res = await this.getResource(`/api/wiki/card/${hashtag}/`)
            .catch(error => console.log('Got Error', error));
        } catch {}
        return res
    }

    getCakeInfo = async (type = '', parametrs = {}) => {
        let res;
        let {filling = '', biscuit = '', cream = ''} = parametrs;
        switch (type) {
            case 'Начинка':
            case 'filling':
                res = await this.getResource(`/api/constructor/cake/filling/${biscuit}&${cream}${biscuit||cream? '/' : ''}`);
                break;

            case 'Бисквит':
            case 'biscuit':
                res = await this.getResource(`/api/constructor/cake/biscuit/${filling}${filling? '/' : ''}`);
                break;

            case 'Крем':
            case 'cream':
                res = await this.getResource(`/api/constructor/cake/cream/${filling}${filling? '/' : ''}`);
                break;

            default:
                res = ['Unknown type in getCakeInfo']
        }
        return res
    }      
}
