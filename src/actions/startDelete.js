import axios from 'axios'

export const startDelete = (id,flist) =>{

    return (dispatch)=>{
            const token = localStorage.getItem('token')

          axios.delete(`https://dct-billing-app.herokuapp.com/api/customers/${id}`,{
              headers : {
                  'Authorization' : `Bearer ${token}`
              }
          })
          .then((res)=>{
               dispatch(setDeletedList(flist))

          })
          .catch((err)=>{
              alert(err.message)
          })
    }
}

export const setDeletedList = (data) =>{
    return {
        type : 'DELETE',
        payload : data
    }
}
