type Category = {
    url: URL
    name: string
}

type New = {
    url: URL
    categorys: Array<Category>
    title: string
    body: HTMLElement
    date: Date
    image: URL | null
    sign: string
}

type Page = {
    url: URL
    title: string
    path: string
    isDropdown: boolean
}

type PageInstance = Page & { body: HTMLElement }