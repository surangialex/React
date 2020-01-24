import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Dashboard from '../../Components/Dashboard/Dashboard';
import UserList from '../../Components/Users/UserList';
import UserDetails from '../../Components/Users/UserDetails';
import About from '../../Components/InfoPages/About';

function Body(){
    return(
        <div className="container-fluid">
            <switch>
                <Route path="/users/:id" component={UserDetails} />
                <Route exact path="/users" component={UserList} />
                <Route path="/about" component={About} />
                <Route exact path="/" component={Dashboard} />
            </switch>

        </div>
    );
}
export default Body;
