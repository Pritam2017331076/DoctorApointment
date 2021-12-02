import React, {useState, useEffect } from 'react'
import ItemLayout from './ItemLayout'
import axios from 'axios'

const Home = () => {

    const [items,setItems] = useState([])

    useEffect(() => {
            axios.get('http://localhost:5000/users')
            .then(res => {
                console.log(res.data) 
                setItems(res.data)
           }) ;
    },[]) 



    return (
        <div>
            <div className="options">
                <div className="optionmenu">
                <ul>
                {
                   items.map(item => (<li key={item._id}>
                       {
                           console.log(item)
                       }
                    <ItemLayout id={item._id} user={item.user} />
                   </li>))
                }
            </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
