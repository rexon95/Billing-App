import axios from 'axios'

export const startAddcx = (formData) =>{

    return (dispatch) =>{
        const token = localStorage.getItem('token')
        axios.post('https://dct-billing-app.herokuapp.com/api/customers',formData,{
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then((res)=>{
             console.log('added data',res.data)
             const result = res.data
            if(res.data.hasOwnProperty('errors')){
                console.log(result)
                alert(result.message)
            }else{
            dispatch(addCx(res.data))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })

    }
}

export const addCx = (data) =>{

    return {
        type : 'ADD',
        payload : data
    }
}

