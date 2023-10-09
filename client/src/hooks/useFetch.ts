import { useEffect, useState } from "react"
import { api } from "../api/api"

const useFetch = (url:string)=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)

    useEffect(() => {
        const fetchData = async ()=>{
            try {
                setLoading(true)
                const res = await api.get(url)
                setData(res.data.data)
            } catch (error) {
                setError(true)
                console.log(error);
                
            }
            setLoading(false)
        }
        fetchData()
    },[url])

    return {data,loading,error}
}

export default useFetch;