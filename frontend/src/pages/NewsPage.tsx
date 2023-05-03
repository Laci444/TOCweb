import New from '../components/New'
import { useLoaderData } from 'react-router-dom'

function NewPage(){
    const apiData = useLoaderData() as Array<New>
    return (
        <>
        <div id="news">
            {apiData.map(data => <New newData = {data} />)}
        </div>
        </>
    )
}

export default NewPage