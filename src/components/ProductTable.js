import React,{useState} from 'react'
import ProModal from './ProModal'


const ProductTable = (props) =>{

    const {prodata,handleDelete,handleEdit,editData} = props
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
        <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Edit Action</th>
                            <th>Delete Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           prodata.map((ele,i)=>{
                               return <tr key={i}>
                                         <td>{i+1}</td>
                                         <td>{ele.name}</td>
                                         <td>{ele.price}</td>
                                         <td><button className="btn btn-success" onClick={()=>{
                                             handleEdit(ele._id)
                                             toggle()
                                         }}>Edit</button></td>
                                         <td><button className="btn btn-danger" onClick={()=>{handleDelete(ele._id)}}>Delete</button></td>
                                      </tr>
                           })
                       }
                    </tbody>
        </table>
        <ProModal modal={modal} toggle={toggle} editData={editData}/>
        </>
    )
}

export default ProductTable