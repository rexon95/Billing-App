import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import swal from 'sweetalert'
import Select from 'react-select'
import BillingModal from './BillingModal'


const ProductCart = (props) =>{
    const {customer,date} = props
    const [selectedOption,setSelectedOption] = useState(null)
    const [qty,setQty] = useState(1)
    const [productList, setProductList] = useState([])
    const [modal, setModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState([])
    const [togglePriceSubtotal,setTogglePriceSubtotal] = useState(false)

    const toggle = () => setModal(!modal);

    const prodata = useSelector((state)=>{
        return state.products
    })

    const options = prodata.map((ele)=>{

        return {
                   value : ele._id,
                   label : ele.name
        }
  })

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)

    const fdata = prodata.filter((ele)=>{
        return selectedOption.label === ele.name
    })

     console.log('product',fdata)
     setSelectedProduct(fdata)
     setTogglePriceSubtotal(true)
//    setCustomer(fdata)
 }

    // console.log(options)

    const handleIncr = () =>{
        if(qty >= 1){
        setQty(qty + 1)
        }
    }
    const handleDecr = () =>{
        if(qty > 1){
        setQty(qty - 1)
        }
    }

    const handleDel = (id) =>{
        const filterList = productList.filter(ele=>{
            return id !== ele.id
        })
        setProductList(filterList)
    }
    
     const handleCart = () =>{

        if(selectedOption !== null  && selectedProduct[0] !== undefined){
           const selProduct = {
                  id : selectedProduct[0]._id,
                  product : selectedOption.label,
                  quantity : qty,
                  price : selectedProduct[0].price
           }
           console.log('selected',selProduct)
           if(selProduct.product !== undefined && customer.length !== 0){
           setProductList([...productList, {...selProduct}])
           }else{
            //    alert('select product,customer and date first')
               swal('oops!','Please select Date,Customer and Product','warning')
           }
           }else{
            //    alert('select Product')
               swal('oops!','Please select a product','warning')
           }
           setSelectedOption('')
           setTogglePriceSubtotal(false)
           setQty(1)
     }

     console.log('list',productList)
      
   const findTotal = () => {    
             let sum = 0
            productList.forEach((ele)=>{
           let subtotal = ele.quantity * ele.price
           sum += subtotal
           })
       return sum
    }
   
      const resetCartValue = () =>{
          setProductList([])
      }

      const handleCartOpen = () => {
          if(customer.length !== 0 && productList.length !== 0 ){
              toggle()
          }else{
            //   alert('select customer and product first!')
              swal('oops!','Please select Date,Customer and Product','warning')
          }
      }
    return (
        <>
            <h2 className= "ml-5 mb-3">Add Products to cart</h2>
            <div className="row ml-5">
                 <div className="col-md-3">
                     <Select
                            value={selectedOption}
                            onChange = {handleChange}
                            options = {options}
                            placeholder= 'select product'
                       />
                 </div>
                 <div className="col-md-3">
                     <button className="btn btn-primary btn-sm" onClick={handleDecr}>-</button> {qty} <button className="btn btn-primary btn-sm" onClick={handleIncr}>+</button>
                   <button className="btn btn-success ml-5" onClick={handleCart} >Add to cart</button>
                 </div>
                 <div className="col-md-3 ml-5">
                   <button className="btn btn-warning text-black font-weight-bold" onClick={handleCartOpen}>Cart - <span className="badge badge-info">{productList.length}</span></button>
                 </div>
            </div>
            {togglePriceSubtotal  && <div className="row ml-5 mt-2">
                <div className="col-md-2">
                      <label className="form-check-label">Price</label>
                     <input className="form-control" value={selectedProduct[0].price} disabled/>
                 </div>
                 <div className="col-md-2">
                      <label className="form-check-label">SubTotal</label>
                     <input className="form-control" value={selectedProduct[0].price * qty} disabled/>
                 </div>
            </div>}
            <BillingModal modal={modal} toggle={toggle} customer={customer} date={date} productList={productList} findTotal={findTotal} handleDel={handleDel} resetCartValue={resetCartValue}/>
         </>
    )
}

export default ProductCart