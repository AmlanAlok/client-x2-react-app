import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Markus() {

    const [x, setX] = useState([])

    useEffect(() => {
        console.log('inside useEffect')
        
        const getUrl = 'http://localhost:8080/user/1';
        
        axios.get(getUrl).then(res => {
            console.log('get call')
            if (res.status === 200){
                console.log(res.data)
                setX(res.data)
            }
            else{
                console.log('API call failed')
            }
        })

    }, [])

    return (
        <div>
            <p>{x.id} {x.firstName} {x.lastName} {x.email} {x.password}</p>
        </div>
    )
}

export default Markus;