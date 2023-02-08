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
    console.log("data in console",data)
    return (
        <div>
            MyApi
            <br />
            <button onClick={fetchData}>Get Api</button>

            <div>

            </div>
            {
                data.map((item) => {
                    return (
                        <div>
                            <p>
                                {item.id.attributes["im:id"]}
                            </p>
                        </div>
                    )
                })
            }
            <text>
            </text>
           


        </div>
    )
}

export default FetchApi
