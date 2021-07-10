import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import HomePage from "./Component/Homepage/index";
import Bill from "./Component/Bill/index";
import DashBoard from "./Component/SideBar/SideBar";

const Section = (props) => {
    const routes = [
        {
            endpoint: "/",
            component: <HomePage/>,
            exact: true
        },
        {
            
            endpoint: "/bill",
            component: <Bill/>
        }
    ];

    useEffect(() => {
        //Xử lí authentication
    }, []);
    return (
        <Switch>
            {
                routes.length > 0 && routes.map(route => 
                    <Route 
                        exact={route.exact} 
                        path={route.endpoint}
                    >
                        <DashBoard history={props.history}  component={route.component}/>
                    </Route>
                )
            }
        </Switch>
    )
}

export default withRouter(Section);