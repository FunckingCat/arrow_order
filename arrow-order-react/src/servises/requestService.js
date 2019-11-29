export default class requestService {
    constructor() {
        this._apiBase = 'http://localhost:3000';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok){
            throw new Error(`Could not fetch ${url}; recived ${res.status}`)
        }

        return await res.json();

    }

    getGlobal = async () => {
        const res = await this.getResource('/global/');
        return res;
    }

    getMainPageBlocksContents = async () => {
        const res = await this.getGlobal();
        return res.mainPageContents;
    }

    getBurgerMenuContent = async () => {
        const res = await this.getGlobal();
        return res.BurgerMenuItems;
    }

    getWiki = async (type) => {
        const res = await this.getGlobal();
        if (type === 'Вики'){
            return res.Wiki.map((item) => {return {
                title : item.title,
                image : item.image,
                href : item.href,
            }});
        } else {
            return res.Wiki.filter(item => item.title === type)[0].subs.map((item) => {return {
                title : item.title,
                image : item.image,
                href : item.href
            }});
        }
    }

    getWikiSlogan = async (type) => {
        const res = await this.getGlobal();
        let slogan;
        try {
            slogan = res.Wiki.filter(item => item.title === type)[0].slogan;
        }
        catch{
            
        }
        return slogan;
    }
        
}