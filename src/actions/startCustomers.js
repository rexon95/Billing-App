import axios from 'axios'

export const startCustomers = () =>{

    return (dispatch) =>{
        const token = localStorage.getItem('token')

        axios.get('http://dct-billing-app.herokuapp.com/api/customers',{
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then((res)=>{
            // console.log('getting data',res.data)
            dispatch(setCustomers(res.data))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

export const setCustomers = (data) =>{

    return {
        type : 'SETCX',
        payload : data
    }
}