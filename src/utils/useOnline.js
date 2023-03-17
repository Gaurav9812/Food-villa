import { useEffect, useState } from "react";

const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{

        const handleOnlile = ()=>{
            setIsOnline(true);
        }
        const handleOffline = ()=>{
                setIsOnline(false);
        } 

        window.addEventListener('online', handleOnlile);
        window.addEventListener('offline', handleOffline);
        
        return () => {
            window.removeEventListener('online', handleOnlile);
            window.removeEventListener('offline', handleOffline);
        }

    },[])

    return isOnline;
  
}


export default useOnline;