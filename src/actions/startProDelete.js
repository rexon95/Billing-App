import axios from 'axios'


export const startProDelete = (id,flist) =>{

    const token = localStorage.getItem('token')

   return  (dispatch) =>{ 
       axios.delete(`https://dct-billing-app.herokuapp.com/api/products/${id}`,{
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    })
    .then((res)=>{
         dispatch(setDeletedProlist(flist))

    })
    .catch((err)=>{
        alert(err.message)
    })
 }
}


export const setDeletedProlist = (data) =>{

    return {
        type : 'PRODELETE',
        payload : data
    }
}
