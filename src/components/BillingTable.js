import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startDeleteBill} from '../actions/startDeleteBill'
import {startViewBill} from '../actions/startViewBill'
import ViewBillModal from './ViewBillModal'



const BillingTable = (props) =>{

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [viewData, setViewData] = useState({})

   const dispatch = useDispatch()

   const billdata = useSelector((state)=>{
         return state.bills
   })
   
   const cxdata = useSelector((state)=>{
         return state.customers
   })


   console.log(billdata,'from bill tale')

   const handleGetCustomer = (id) =>{
       const cxname = cxdata.filter((ele)=>{

            return id === ele._id
       })
       if(cxname[0] !== undefined){
       return cxname[0].name
       }
        
  
   }

   const handleDelete = (id) =>{
      
       const filteredBill = billdata.filter((ele)=>{
           return id !== ele._id
       })
     
      dispatch(startDeleteBill(id,filteredBill))
   }

   const handleView = (id) =>{
          setTimeout(()=>{toggle()},1000)
         dispatch(startViewBill(id,setViewData))
        //  toggle()
   }
    console.log('viedata',viewData)
    return(
        <>
          <h2 className="mt-3 ml-5 mb-3">Bill Listing</h2>
               {billdata.length !==0 ? (<table className="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>View</th>
                            <th>Delete Action</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                                billdata.map((ele,i)=>{
                                  return <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{ele.date.slice(0,10)}</td>
                                            <td>{handleGetCustomer(ele.customer)}</td>
                                            <td><button className="btn btn-success" onClick={()=>{handleView(ele._id)}}>View</button></td>
                                            <td><button className="btn btn-danger" onClick={()=>{handleDelete(ele._id)}}>Delete</button></td>
                                         </tr>
                                })
                            }
                        </tbody>
              </table>) : (<div className="row">
                 <div className="col-md-8 offset-2">
                    <div className="alert alert-primary mt-5 p-5 text-center" role="alert">
                    <b> No data found! </b>
                    </div>
                </div>
            </div>) }
              <ViewBillModal modal={modal} toggle={toggle} viewData={viewData}/>
        </>
    )
}

export default BillingTable