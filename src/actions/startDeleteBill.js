import axios from 'axios'


export const startDeleteBill = (id,fdata) => {

    const token = localStorage.getItem('token')

   return (dispatch) =>{ 
         axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
         headers : {
             'Authorization' : `Bearer ${token}`
         }
     })
     .then((res)=>{
         dispatch(setDeleteBill(fdata))
     })
     .catch((err)=>{
         alert(err.message)
     })

    }

}

export const setDeleteBill = (data) =>{

    return {
        type : 'DELETEBILL',
        payload : data
    }
}