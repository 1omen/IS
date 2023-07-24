import React from 'react';
import {Link, useParams} from 'react-router-dom'
import './fullModule.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Module} from '../components/Module'

import axios from '../axios'

export const FullModule = () => {
    const [data, setData] = React.useState()
    const [isLoading, setLoading] = React.useState(true)
    const {id} = useParams()

    React.useEffect(()=>{
        axios.get(`/learning/modules/${id}`).then(res=>{
            setData(res.data)
            setLoading(false)
        }).catch(err => {
            console.warn(err)
            alert('Ошибка при получении модуля')
        })
    },[])


    if (isLoading) {
        return null
    }

    return (
        <div className="d-flex container justify-content-between">
            <Module id={id} title={data.title}/>
            <div className="navigator col-2 d-grid gap-2 h-25">
                {/*<button href="" className="btn btn-outline-secondary">Следующий модуль</button>*/}
                <a href="/quiz" className="btn btn-outline-secondary">К тесту</a>
            </div>
        </div>)

}


