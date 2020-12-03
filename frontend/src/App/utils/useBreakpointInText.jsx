import React, {useState, useEffect} from "react";


const useBreakpointInText = (queries) => {
    const [queryMatch, setQueryMatch] = useState(null);

    useEffect(() => {
        const mediaQueryLists = {};//list with strings and numbers that define the media querys
        const keys = Object.keys(queries);//all the keys of the queries list

        let isAttached = false;//check wether a listenrer is attached or not

        // console.log("hendl")
        const handleQueryListener = () => { 
            const updatedMatches = keys.reduce((acc, media) =>{
                acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
                return acc;
            },{})
            setQueryMatch(updatedMatches)
        }
        // console.log("win")
        // console.log(window)
        // console.log(window.matchMedia)
        

        if (window && window.matchMedia){
            const matches = {};
            keys.forEach((media) =>{
                if(typeof queries[media] === 'string'){
                    mediaQueryLists[media] = window.matchMedia(queries[media]);
                    matches[media] = mediaQueryLists[media].matches
                }else{
                    matches[media] = false
                }
            });
            setQueryMatch(matches);
            isAttached = true;
            keys.forEach(media =>{
                if(typeof queries[media] === 'string'){
                    mediaQueryLists[media].addListener(handleQueryListener);
                }
            });
        }

        return () =>{
            if(isAttached){
                keys.forEach((media) =>{
                    if(typeof queries[media] === 'string'){
                        mediaQueryLists[media].removeListener(handleQueryListener);
                    }
                });
            }
        }
    }, [queries])

    return queryMatch;
}

export default useBreakpointInText;