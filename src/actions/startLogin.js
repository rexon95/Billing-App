import axios from 'axios'
import swal from 'sweetalert'

export const startLogin = (formData,history,handleAuth) =>{
      
   return (dispatch) =>{ axios.post('https://dct-billing-app.herokuapp.com/api/users/login',formData)
    .then((res)=>{
         console.log(res.data)
         if(res.data.hasOwnProperty('errors')){
             alert(res.data.errors)
         }else{
        //  alert('logged in successfully!')
        swal('Success!','logged in successfully!','success')
         localStorage.setItem('token',res.data.token)
         history.push('/dashboard')
         handleAuth()
         }
    })
    .catch((err)=>{
        alert(err.message)
    })
}

}

