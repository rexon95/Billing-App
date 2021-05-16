import axios from 'axios'

export const startGetBill = () =>{

     return (dispatch) =>{
             const token = localStorage.getItem('token')
        axios.get('http://dct-billing-app.herokuapp.com/api/bills',{
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })

        .then((res)=>{
            console.log('hdwuwwi',res.data)
            dispatch(setBills(res.data))
        })
        .catch((err)=>{
            alert(err.message)
        })

    }

}

export const setBills = (data) =>{

    return {
        type : 'GETBILLS',
        payload : data
    }
}