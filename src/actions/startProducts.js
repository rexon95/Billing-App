import axios from 'axios'

export const startProducts = () =>{

    return (dispatch) =>{
        const token = localStorage.getItem('token')

        axios.get('http://dct-billing-app.herokuapp.com/api/products',{
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then((res)=>{
            // console.log('getting data',res.data)
            dispatch(setProducts(res.data))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

export const setProducts = (data) =>{

    return {
        type : 'SETPRO',
        payload : data
    }
}