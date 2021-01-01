import React, {useState, createContext} from 'react'

export const BlurContext = createContext();


export const BlurProvider = (props) => {
    const [blur, setBlur] = useState(null);
    
    return (
        <BlurContext.Provider value={[blur, setBlur]}>
            {props.children}
        </BlurContext.Provider>
    );
}
