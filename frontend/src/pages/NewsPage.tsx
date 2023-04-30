import { useEffect, useState } from 'react'
import Fetcher from '../utils/Fetcher'
import New from '../components/New'

function NewPage(){
    const [ apiData, setApiData ] = useState([])
    useEffect(() => {
        Fetcher.FetchNews().then(data => setApiData(data.results))
    }, [])
    console.log(apiData)
    return (
        <>
        <div id="news">
            {apiData.map(data => <New newData = {data} />)}
        </div>
        </>
    )
}

export default NewPage