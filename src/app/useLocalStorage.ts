import { useEffect, useState } from 'react';


export const useLocalStorage = (key: string, initialValue: boolean) => {
    const[state, setState] = useState(
        ()=>{
            if(!initialValue) return;
            try{
                const value = localStorage.getItem(key);
                return value ? JSON.parse(value): initialValue;
            }
            catch(err){
                return initialValue;
            }
        }
    )

    useEffect(() => {
        if(state) {
            try{
              localStorage.setItem(key, JSON.stringify(state))
            }
            catch(err){
              console.log(err);      
            }
        }

    }, [state])

    return [state,setState]
}