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
}