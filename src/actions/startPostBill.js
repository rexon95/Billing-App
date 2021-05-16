import axios from 'axios'

export const startPostBill = (formData) =>{

    const token = localStorage.getItem('token')

    return (dispatch) =>{

          axios.post('https://dct-billing-app.herokuapp.com/api/bills',formData,{
              headers : {
                  'Authorization' : `Bearer ${token}` 
              }
          })
          .then((res)=>{
              console.log('from post api',res.data)
              dispatch(setPostData(res.data))
          })
          .catch((err)=>{
              alert(err.message)
          })
    }
}

export const setPostData = (data) =>{

    return {
        type : 'ADDBILL',
        payload : data
    }
}
