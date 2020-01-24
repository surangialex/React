import React from 'react';

import Dashboard from '../../Components/Dashboard/Dashboard';
import UserList from '../../Components/Users/UserList';
import UserDetails from '../../Components/Users/UserDetails';
import About from '../../Components/InfoPages/About';

function Body(){
    return(
        <div className="container-fluid">
            <Dashboard />
            <UserList />
            <UserDetails />
            <About />
        </div>
    );
}
export default Body;
