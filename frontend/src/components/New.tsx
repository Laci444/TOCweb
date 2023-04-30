import Fetcher from "../utils/Fetcher"


function New({ newData }){
    return (
        <>
        <h1>
            {newData.title}
        </h1>
        <h4>
            {newData.categorys.map(cat => cat.name).join() }
        </h4>
        <p dangerouslySetInnerHTML = {{__html: newData.body}}></p>
        </>
    )
}

export default New