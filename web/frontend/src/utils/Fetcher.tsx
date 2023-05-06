class Fetcher {
    static API_PATH: string = '/api/'
    static NAVPAGES_PATH: string = this.API_PATH + 'navpages/'
    static NEWS_PATH: string = this.API_PATH + 'news/'
    static CATEGORIES_PATH: string = this.API_PATH + 'categorys/'

    static SearchPage(pagePath: string = ''): Promise<URL> {
        /**
         * Return a specific pages API enpoint
         * 
         * @param pagePath - absolute path to the page from root
         * @returns the URL of the searched page with which we can access the page instance in API
         */
        return fetch(Fetcher.NAVPAGES_PATH)
            .then(data => data.json())
            .then((data: Array<Page>) => {
                let result: Page | undefined = data.find( (page: Page) => page.path === pagePath )
                return result ? result.url : new URL(Fetcher.NAVPAGES_PATH + pagePath)
            })
    }

    static async FetchNews(searchParams: string | null): Promise<Array<New>> {
        return fetch(Fetcher.NEWS_PATH + "?page=" + (searchParams || "1"))
            .then(data => data.ok ? data.json() : { results: "" }).then(data => data.results)
    }

    static FetchPages(): Promise<Array<Page>> {
        return fetch(Fetcher.NAVPAGES_PATH)
            .then(data => data.json())
    }
}

export default Fetcher