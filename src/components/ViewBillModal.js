import React,{useRef} from 'react'
import {useReactToPrint} from 'react-to-print'
import { useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

 



const ViewBillModal = (props) =>{

    const componentRef = useRef()
    const {
        className,
        modal,
        toggle,
        viewData
      } = props;

      const prodata = useSelector((state)=>{
          return state.products
      })

      const cxdata = useSelector((state)=>{
          return state.customers
      })
      
      const handleProductName = (id) =>{

          const data = prodata.filter(ele=>{
              return id === ele._id
          })
         
          return data[0].name
      }

      const handleCxMob = (id) => {

           const customer = cxdata.filter(ele=>{
               return id === ele._id
           })
           return customer[0].mobile
      }

      const handleCxEmail = (id) =>{

        const customer = cxdata.filter(ele=>{
            return id === ele._id
        })
          return customer[0].email
      }
    //    console.log('from view modal',viewData)

    const pdfGenerate = useReactToPrint({
        content: () => componentRef.current,
      });

    return (
        <div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <div ref={componentRef}>
          <ModalHeader toggle={toggle}>Bill Details</ModalHeader>
          <ModalBody>
              <div className="row">
                 <div className="col-md-4">
                     <b>Date</b> : {viewData.date !== undefined && viewData.date.slice(0,10).split("-").reverse().join("-")}
                 </div>
                <div className="col-md-8">
                     <b>Mobile</b> : {viewData.customer !== undefined && handleCxMob(viewData.customer)}
                 </div>
                 <div className="col mt-2">
                     <b>Email</b> : {viewData.customer !== undefined && handleCxEmail(viewData.customer)}
                 </div>
              </div><br/>
             <div className="row">
                  <div className="col">
                 <table className="table table-striped table-bordered">
                        <thead>
                                <th scope="col">Product</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Price</th>
                                <th scope="col">Subtotal</th>
                        </thead>
                         <tbody>
                            {viewData.lineItems !== undefined && viewData.lineItems.map((ele,i)=>{
                                return <tr key={i}>
                                          <td>{handleProductName(ele.product)}</td>
                                          <td>{ele.quantity}</td>
                                          <td>{ele.price}</td>
                                          <td>{ele.subTotal}</td>
                                       </tr>
                            })}
                         </tbody>
                 </table>
                 <h4>Total : {viewData.total}</h4>
                 </div>
             </div>
          </ModalBody>
           </div>  {/*print or pdf */}
          <ModalFooter>
            <Button color="success" onClick={pdfGenerate}>Download as PDF</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default ViewBillModal