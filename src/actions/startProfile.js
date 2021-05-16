import axios from 'axios'

export const startProfile = () =>{

   return (dispatch) =>{
            const token = localStorage.getItem('token')

          axios.get('https://dct-billing-app.herokuapp.com/api/users/account',{
              headers : {
                  'Authorization' : `bearer ${token}`
              }
          })
          .then((res)=>{
              console.log(res.data)
              dispatch(setUser(res.data))
          })
          .catch((err)=>{
              alert(err.message)
          })
   }

}

export const setUser = (data) =>{
   
    return {
        type : 'SETUSER',
        payload : data
    }
}
