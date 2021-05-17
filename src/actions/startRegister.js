import axios from 'axios'

export const startRegister = (formData,history) =>{

      return (dispatch) =>{

              axios.post('https://dct-billing-app.herokuapp.com/api/users/register',formData)
              .then((res)=>{
                //   console.log(res.data)
                  alert('Registration successfull!!')
                  history.push('/login')

              })
              .catch((err)=>{
                  alert(err.message)
              })
      }

}