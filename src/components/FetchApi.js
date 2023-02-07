import React, { useEffect, useState } from 'react'


const FetchApi = () => {

    const [data, setData] = useState([])

    const fetchData = () =>
        fetch("https://itunes.apple.com/us/rss/newfreeapplications/limit=2/json")
            .then(response => response.json())
            .then(json => {
                setData(json.feed.entry);
            })

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            MyApi 
            <br />
            <button onClick={fetchData}>Get Api</button>
           
            <div>
               
            </div>
            <pre>{JSON.stringify(data,null,3)}</pre>
            {/* <div>
       <ul>
         {data.map((item) =>(
            <li key={item.title}>{item.label}</li>
         )
         
         )}
       </ul>
       </div> */}

        
        </div>
    )
}

export default FetchApi
