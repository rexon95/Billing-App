import React from 'react'
import {Link,Route,Switch} from 'react-router-dom'
import Dashboard from '../components/Dashboard'



const Siderbar = (props) =>{


    return(
         <>
        <div className="sidenav bg-dark">
        <Link to='/dashboard' style={{marginTop: "50px",fontSize: "25px", marginBottom: "20px"}}>Dashboard</Link>
        <Link to="/dashboard/customers" style={{marginBottom: "25px"}}>Customers</Link>
        <Link to="/dashboard/products" style={{marginBottom: "25px"}}>Products</Link>
        <Link to="/dashboard/billing"style={{marginBottom: "80px"}}>Billing</Link>
        <Link to="/dashboard/profile">Profile</Link>
      </div>
       </>
    )
}

export default Siderbar