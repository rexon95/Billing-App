import axios from 'axios'


export const startAddPro = (formData) =>{
       const token = localStorage.getItem('token')

  return (dispatch) => {

                axios.post('http://dct-billing-app.herokuapp.com/api/products',formData,{
                    headers : {
                        'Authorization' : `Bearer ${token}`
                    }
                })
                .then((res)=>{
                    if(res.data.hasOwnProperty('errors')){
                        alert(res.data.message)
                    }else{
                        console.log(res.data)
                        dispatch(addProduct(res.data))
                    }
                })
                .catch(err=>{
                    alert(err.message)
                })

            }
}

export const addProduct = (data) =>{

    return {
        type : 'ADDPRO',
        payload : data
    }
}