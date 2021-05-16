import React,{useEffect} from 'react'
import {Route, Switch,withRouter} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {startCustomers} from '../actions/startCustomers'
import {startProducts} from '../actions/startProducts'
import {startGetBill} from '../actions/startGetBill'
import '../dashboard.css'
import Siderbar from '../components/Sidebar'
import Profile from '../components/Profile'
import Customers from './Customers'
import Products from './Products'
import Billing from './Billing'


const Dashboard = (props) =>{
      const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(startCustomers())
        dispatch(startProducts())
        dispatch(startGetBill())
  },[])

    const cxdata = useSelector((state)=>{
        return state.customers
    })

    const prodata = useSelector((state)=>{
         return state.products
    })

    const billdata = useSelector((state)=>{
         return state.bills
    })

    return(
       <>
        <Siderbar/>
        <div className="main">
            {props.history.location.pathname== '/dashboard' && 
                <div className="row mt-5">
                      <div className="col-md-2"></div>
                     <div className="col-md-8">
                         <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                            <div className="card-header text-center">
                                              <h3>Total Products</h3>
                                            </div>
                                        <div className="card-body">
                                                <h5 className="card-title text-center">{prodata.length}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">

                                      <div className="card">
                                                  <div className="card-header text-center">
                                                    <h3>Total Customers</h3>
                                                  </div>
                                              <div className="card-body">
                                                      <h5 className="card-title text-center">{cxdata.length}</h5>
                                              </div>
                                      </div>
                                </div>

                                <div className="col-md-6 mt-3">

                                      <div className="card">
                                                  <div className="card-header text-center">
                                                    <h3>Total Bills</h3>
                                                  </div>
                                              <div className="card-body">
                                                      <h5 className="card-title text-center">{billdata.length}</h5>
                                              </div>
                                      </div>
                                </div>

                         </div> {/* row ends here*/}
                     </div>
                     <div className="col-md-2"></div>
                </div>
            
            }
            <Switch>
            <Route path='/dashboard/customers' component={Customers} exact={true}/>
            <Route path='/dashboard/products' component={Products} exact={true}/>
            <Route path='/dashboard/billing' component={Billing} exact={true}/>
            <Route path='/dashboard/profile' component={Profile} exact={true}/>
            </Switch>
       </div>
      </>
    )
}

export default withRouter(Dashboard)