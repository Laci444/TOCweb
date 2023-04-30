class Fetcher{
    static API_PATH: string = 'http://localhost:8000/api/'
    static NAVPAGES_PATH: string = this.API_PATH + 'navpages/'
    static NEWS_PATH: string = this.API_PATH + 'news/'
    static CATEGORIES_PATH: string = this.API_PATH + 'categorys/'

    static async FetchPage(pagePath: string = ''): Promise<string> {
        let result = fetch(this.NAVPAGES_PATH)
        .then(data => data.json())
        .then(data => {
            let temp = ''
            data.forEach((page: { url: string; path: string; }) => {
                if (page.path === pagePath) temp = page.url
            })
            return temp
        })
        return await result == '' ? this.NAVPAGES_PATH + pagePath : result
    }

    static async FetchNews(): Promise<Array<string>>{
        return fetch(this.NEWS_PATH)
                .then(data => {return data.json()})
    }
}

export default Fetcher