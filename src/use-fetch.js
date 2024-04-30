import { useEffect, useState } from "react";


const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("")


  useEffect(()=>{ 
    setTimeout(()=>{
    fetch(url)
    .then((res)=>{
      if(!res.ok){
        throw Error("Could not fetch the given API")
      }
      return res.json()
    })
    .then((datum)=>{
      setData(datum)
      setIsLoading(false)
      setError("")
    })
    .catch((err)=>{
      setError(err.message)
      setIsLoading(false)
    })
    }, 1000)
  }, [url])

  return {data}
}

export default useFetch