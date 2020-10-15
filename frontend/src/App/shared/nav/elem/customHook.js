import {useState} from 'react';

export default function useLocalStorage(initialValue){
    const [value, setValue] = useState(initialValue)
    
    return[value, setValue]
}

