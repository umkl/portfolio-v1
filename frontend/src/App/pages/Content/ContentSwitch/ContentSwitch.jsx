import React from 'react';
import { Route, useRouteMatch} from 'react-router-dom';
import Content from "../content.jsx";
import Blog from "../Blog/Blog.jsx"

const ContentSwitch = () => {
    const {path, url} = useRouteMatch()
    return (
        <React.Fragment>
            <Route exact path={`${path}`}>
                <Content/>
            </Route>
            <Route path={`${path}/:blogID`} children={<Blog/>}/>
        </React.Fragment>
    )
}

export default ContentSwitch;