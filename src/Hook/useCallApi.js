import { useState, useEffect } from "react"; 
 
 const useCallApi = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
     const getData = async () => {
         try{
             const responce = await fetch(url);
             if(!responce.ok) throw new Error("Network response was not ok");
             const data = await responce.json();
             setData(data);
            }catch(e){
                console.error("Error White Fetching data", e);
                setError(e);
            }finally{
                setLoading(false);
            }
        };
        useEffect(() => {
            getData();
        }, [url]);
        return { data, loading, error };
    }

    export default useCallApi;