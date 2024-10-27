import React, { useEffect, useState } from 'react';

const MainContent = () => {
    const [Newses, setNewses] =useState([]);
    useEffect(()=>{
        fetch("news.json")
        .then(res=>res.json())
        .then(data=>setNewses(data))
    },[])

    return (
        <div>
            <p>News Coming soon... {Newses.length}</p>
        {    
            Newses.map(news=> 
            <div>
                <div className="">
                    {news.author.im}
                </div>
            </div>
            )

        }
            
        </div>
    );
};

export default MainContent;