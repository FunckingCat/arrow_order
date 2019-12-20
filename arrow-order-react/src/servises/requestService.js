export default class requestService {
    constructor(domen) {
        this._apiBase = domen;
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        console.log(`Адрес: ${this._apiBase}${url}`);
        if (!res.ok){
            throw new Error(`Could not fetch ${url}; recived ${res.status}`)
        }

        let response = await res.json();
        
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
        const res = await this.getResource(`/api/wiki/card/${hashtag}/`);
        return res
    }
        
}
