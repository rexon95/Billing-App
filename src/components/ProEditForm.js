import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {ModalFooter,Button} from 'reactstrap'
import {startProEdit} from '../actions/startProEdit'


const ProEditForm = (props) =>{
    const dispatch = useDispatch()
    const {toggle,editData} = props
    const [name,setName] = useState(editData[0].name)
    const [price,setPrice] = useState(editData[0].price)

     console.log(editData,'form form')


    const handleChange = (e) =>{   
        if(e.target.name === 'name'){
            setName(e.target.value)
        }else if(e.target.name === 'price'){
            setPrice(e.target.value)
        }
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            name : name,
            price : price,
        }
        dispatch(startProEdit(formData,editData[0]._id))
        toggle() // to close modal
 }
    return(
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label for="exampleInputPassword1">Product Name</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Product Name"
           name="name" onChange={handleChange} value={name}/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Price</label>
          <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Price" value={price} name="price" onChange={handleChange}/>
        </div>
            <ModalFooter>
                     <input  type="submit" className="btn btn-primary" value="Update"/>{'  '}
                     <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </form>)
}

export default ProEditForm