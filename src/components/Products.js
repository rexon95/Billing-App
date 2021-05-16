import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startProDelete} from '../actions/startProDelete'
import AddForm from './AddForm'
import AddProduct from './AddProduct'
import ProductTable from './ProductTable'



const Products = (props) =>{
    const dispatch = useDispatch()

    const prodata= useSelector((state)=>{
        return state.products
    })
    console.log('products',prodata)

    const [editData,setEditData] = useState([])
    const [search,setSearch] = useState('')
    const [filter,setFilter] = useState([])

    useEffect(()=>{
        setFilter([...prodata])
   },[prodata])

    const handleDelete = (id) =>{
        const flist = prodata.filter((ele)=>{
            return  id !== ele._id
        })
        console.log('flist',flist)
        dispatch(startProDelete(id,flist))
     }

     const handleEdit = (id) =>{
        const fdata = prodata.filter((ele)=>{
            return id === ele._id
        })
        console.log('edit',fdata)
        setEditData(fdata)

      }

      const handleChange = (e) =>{
        if(e.target.name === 'search'){
            console.log(e.target.value)
            setSearch(e.target.value)
        }
        const filterData = prodata.filter((ele)=>{
            return ele.name.includes(e.target.value)
        })
        console.log(filterData)
        setFilter(filterData)

      }

    return(
         <>
           <h2 className="mt-3 ml-5 mb-3">Add Products</h2>
           <AddProduct/>
           <hr/>
           <h2 className="mt-3 ml-5 mb-3">Existing Products</h2>
           {prodata.length === 0 ? (
             <div className="row">
                 <div className="col-md-8 offset-2">
                    <div className="alert alert-primary mt-5 p-5 text-center" role="alert">
                    <b> No data found! </b>
                    </div>
                </div>
            </div>

        ): (<>
              <div className="row mb-3">
              <div className="col-md-4 ml-5">
                  <input type="text" className="form-control" placeholder="Search by Product"  value={search} name="search" onChange={handleChange}/>
              </div>
            </div><ProductTable prodata={filter} handleDelete={handleDelete} handleEdit={handleEdit} editData={editData}/></>)}
         </>
    )
}

export default Products