import React from 'react';
import { Route, useRouteMatch} from 'react-router-dom';

import Content from "../content.jsx";
import Head from "./../Blogs/Head/Head.jsx"

const ContentSwitch = () => {
    // const blogID = useParams()

    const {path, url} = useRouteMatch()

    return (
        <React.Fragment>
            <Route exact path={`${path}`}>
                <Content/>
            </Route>
            <Route path={`${path}/Head`}>
                <Head/>
            </Route>    
            <Route path=''></Route>
            <Route path=''></Route>
        </React.Fragment>
        
    )
}

export default ContentSwitch;