import React,{useState} from 'react'
import Validator from 'validator' 
import {useDispatch} from 'react-redux'
import swal from 'sweetalert'
import { startAddcx } from '../actions/startAddcx'
import validator from 'validator'


const AddForm = (props) =>{
    const {handleAddNewCx} = props
    const dispatch = useDispatch()
    const [name,setName] = useState('')
    const [mobile,setMobile] = useState('')
    const [email,setEmail] = useState('')
    const [formErrors,setFormErrors] = useState({})

    const errors = {}

       const handleChange = (e) =>{
            if(e.target.name === "customer"){
                setName(e.target.value)
            } else if(e.target.name === "mobile"){
                setMobile(e.target.value)
            } else if (e.target.name === "email"){
                setEmail(e.target.value)
            }
       }


       const runValidations = () => {
          if(!validator.isEmail(email)){
             errors.email = "enter a valid email!"
          }
          if(name.length === 0){
             errors.name = "name required"
          }
          if(name.length !== 0 && name.length < 3){
            errors.namelength = "name must atleast 3 characters!"
         }
         if(mobile.length < 10){
             errors.mobile = "number must be 10 characters"
         }

       }

       const handleSubmit = (e) =>{
             e.preventDefault()

             runValidations()
             if(Object.keys(errors).length === 0 ){
                 setFormErrors({})

                 const formData = {

                    name : name,
                    mobile : mobile,
                    email : email
              }
              console.log(formData)
               dispatch(startAddcx(formData))

                //reset
             setName('')
             setMobile('')
             setEmail('')
             swal('Customer Added!','','success')
             if(handleAddNewCx !== undefined){
             handleAddNewCx()
             }
             }else{
                 setFormErrors(errors)
                 console.log(errors)
             }
             

       }


    return (
        <>
           <div className="row ml-5">
          <form className="form-inline" onSubmit={handleSubmit}>
                     <div className="col">
                    <label className="sr-only" for="inlineFormInputName2">Name</label>
                    <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="CustomerName" value={name} name="customer" onChange={handleChange}/>
                     {formErrors.name && <small className="text-danger">{formErrors.name}</small>}
                     {formErrors.namelength && <small className="text-danger">{formErrors.namelength}</small>}
                     </div>
                     <div className="col">
                    <label className="sr-only" for="inlineFormInputName2">Name</label>
                    <input type="number" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Mobile No" value={mobile} name="mobile" onChange={handleChange}/>
                    {formErrors.mobile && <small className="text-danger">{formErrors.mobile}</small>}
                    </div>
                     <div className="col">
                    <label className="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                        <input type="email" className="form-control mb-2 mr-sm-2" id="inlineFormInputGroupUsername2" placeholder="email" value={email} name="email" onChange={handleChange}/><br/>
                        {formErrors.email && <small className="text-danger">{formErrors.email}</small>}
                        </div>
                          <div className="col">
                          <input type="submit" className="btn btn-primary mb-2" value="Add"/>
                           </div>
              </form>
        </div><br/>
        </>
    )
}

export default AddForm