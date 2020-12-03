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

  return (
    <a.div id="ug-bar" style={barFade}>
      <UgBtn />
      <UgNav />
    </a.div>
  );
}

export default UgBar;
