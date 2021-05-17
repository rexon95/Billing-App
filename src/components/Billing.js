import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import ProductCart from './ProductCart'
import BillingTable from './BillingTable'



const Billing = (props) =>{
    const [selectedOption,setSelectedOption] = useState(null)
    const [customer,setCustomer] = useState([])
    const [date,setDate] = useState('')
    const cxdata = useSelector((state)=>{
        return state.customers
    })
    
     const options = cxdata.map((ele)=>{

           return {
                      value : ele.mobile,
                      label : ele.name
           }
     })


     const handleChange = (selectedOption) => {
         setSelectedOption(selectedOption)

         const fdata = cxdata.filter((ele)=>{
             return selectedOption.value === ele.mobile
         })

        //  console.log('customer',fdata,date)
        setCustomer(fdata)
      }

      const handleDate = (e) =>{
          console.log(e.target.value)
          setDate(e.target.value)
      }


    return(
        <>
        <h2 className="mt-3 ml-5 mb-3">Select Customer</h2>
        <div className="row ml-5">
            <div className = "col-md-3">
                     <input type="date" name="date" className="form-control" onChange={handleDate} value={date}/>
            </div>
            <div className="col-md-4">
            <Select 
                         value={selectedOption}
                         onChange = {handleChange}
                         options = {options}
                         placeholder= 'CustomerName or Mob-no'
                     />
            </div>
        </div>
          <div className="row mt-3 ml-5">
              {Object.keys(customer).length !== 0 && <h5>Customer Name : {customer[0].name} &nbsp; &nbsp;Mobile : {customer[0].mobile}&nbsp;&nbsp; Email : {customer[0].email}</h5>}
          </div>
            <hr/>
            <ProductCart customer={customer} date={date}/><br/>
            <hr/>
            <BillingTable/>
        </>
    )
}

export default Billing