import { useState ,useEffect} from "react";
const useFetch=(url)=>{
    const [data, setData] = useState(null)
    const [isPending, setisPending] = useState(true);
    const [error,setError]=useState(null);

    useEffect(() => {
        const  abortConat=new AbortController();


        setTimeout(()=>{
            fetch(url,{signal:abortConat.signal})
            .then(res => {
                // console.log(res);
                if(!res.ok){
                    throw Error("Cloud not fetch the data for resource!");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setisPending(false);
                setError(null);
            })
            .catch(err => {
                if(err.name==='AbortError'){
                    console.log('Fetch Abort')
                }else{
                    setisPending(false);
                    setError(err.message);
                }
                
            })
        },1000);
        return()=>abortConat.abort();
    }, [url]);
    return {data,isPending,error}
}

export default useFetch;

// npx json-server --watch data/db.json --port 8000