import React, { useEffect,useState } from "react";
import {useSpring, animated as a} from "react-spring";
import UgNav from "./../nav/nav.jsx";
import UgBtn from "./../btn/btn.jsx";
import "./bar.scss";

 function UgBar() {
    const [loaded, setLoaded] = useState(false)

    const barFade = useSpring({
        opacity: loaded ? 1 : 0,
        marginTop: loaded ? 0 : -500
    });

    useEffect(() => {
        setLoaded(true)
        return () => {

        }
    }, [])

    if(location.pathname.split("/").length == 2){
      return (
        <a.div id="ug-bar" style={barFade}>
          <UgBtn />
          <UgNav />
        </a.div>
      );
    }else{
      return <div></div>;
    }
  
}

export default UgBar;
