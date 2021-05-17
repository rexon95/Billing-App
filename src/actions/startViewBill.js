import axios from 'axios'

export const startViewBill = (id,setViewData) =>{

    return (dispatch) =>{
         const token = localStorage.getItem('token')

         axios.get(`https://dct-billing-app.herokuapp.com/api/bills/${id}`,{
             headers : {
                 'Authorization' : `Bearer ${token}`
             }
         })
         .then(res=>{
             console.log(res.data)
             setViewData(res.data)
         })
         .catch(err=>{
             alert(err.message)
         })
    }
}
