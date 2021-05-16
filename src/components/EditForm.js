import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {ModalFooter,Button} from 'reactstrap'
import {startEdit} from '../actions/startEdit'


const EditForm = (props) =>{
    const dispatch = useDispatch()
    const {toggle,editData} = props
    const [name,setName] = useState(editData[0].name)
    const [email,setEmail] = useState(editData[0].email)
    const [mobile,setMobile] = useState(editData[0].mobile)

     console.log(editData,'form form')


    const handleChange = (e) =>{   
        if(e.target.name === 'name'){
            setName(e.target.value)
        }else if(e.target.name === 'mobile'){
            setMobile(e.target.value)
        }else if(e.target.name === 'email'){
            setEmail(e.target.value)
        }
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            name : name,
            mobile : mobile,
            email : email
        }
        dispatch(startEdit(formData,editData[0]._id))
        toggle() // to close modal
 }
    return(
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name"
           name="name" onChange={handleChange} value={name}/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Mobile</label>
          <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Mobile No" value={mobile} name="mobile" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} name="email" onChange={handleChange}/>
        </div>
            <ModalFooter>
                     <input  type="submit" className="btn btn-primary" value="Update"/>{'  '}
                     <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </form>)
}

export default EditForm