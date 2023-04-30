import { useLoaderData } from "react-router-dom"


function DinamicPage() {
    const loaderData = useLoaderData()
    //console.log(loaderData)
    return (
        <div>
            <h1>asd</h1>
            <div dangerouslySetInnerHTML = {{__html: loaderData.body}}></div>
            <h1></h1>
        </div>
    )
}

export default DinamicPage