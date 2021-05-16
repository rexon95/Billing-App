import React,{ useState} from 'react'
import ModalComponent from './ModalComponent'

const TableList = (props) =>{
    const {cxdata,handleDelete,editData,handleEdit} = props
    const [modal, setModal] = useState(false);

    // const dispatch = useDispatch()

    const toggle = () => setModal(!modal);
      
    return(
        <>
        <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Mobile no</th>
                            <th>Email</th>
                            <th>Edit Action</th>
                            <th>Delete Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           cxdata.map((ele,i)=>{
                               return <tr key={i}>
                                         <td>{i+1}</td>
                                         <td>{ele.name}</td>
                                         <td>{ele.mobile}</td>
                                         <td>{ele.email}</td>
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
        <ModalComponent modal={modal} toggle={toggle} editData={editData}/>
        </>        
    )

}

export default TableList