import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import validator from 'validator'
import {startRegister} from '../actions/startRegister'


const Register = (props) => {
       const dispatch = useDispatch()
       const [user,setUser] = useState('')
       const [email,setEmail] = useState('')
       const [pass, setPass] = useState('')
       const [bname,setBname] = useState('')
       const [address,setAddress] = useState('')

       const errors = {}
       const [formErrors,setFormErrors] = useState({})

        const handleChange=(e)=>{
            if(e.target.name === 'user'){
                setUser(e.target.value)
            }else if(e.target.name === "email"){
                setEmail(e.target.value)
            }else if(e.target.name === "pass"){
                setPass(e.target.value)
            }
             else if(e.target.name === "bname"){
                    setBname(e.target.value)
             }
            else if(e.target.name === "address"){
                    setAddress(e.target.value)
            }

        }

        const runValidations = () =>{
            if(user.trim().length === 0){
                errors.name = "name cant be blank"
            }
            if((user.trim().length >= 1) && (user.trim().length <= 3) ){
                errors.namelength = "name must be more than 3 letters "
            }
            if(email.trim().length === 0){
                errors.email = "email cant be blank"
            }if(pass.trim().length ===0){
                errors.pass = "password cant be blank"
            }if( email.trim().length !== 0  && !validator.isEmail(email)){
                errors.vemail = "enter valid email"
            }if(pass.trim().length !== 0 && pass.trim().length < 8){
                errors.vpass = "password must be min 8 characters"
            }

       }

        const handleSubmit = (e) =>{
                 e.preventDefault()

                 runValidations()

                 if(Object.keys(errors).length === 0){
                      setFormErrors({})
    
                            const formData = {
                                username : user,
                                email : email,
                                password : pass,
                                businessName : bname,
                                address : address
                            }
                            console.log(formData)
    
                             dispatch(startRegister(formData,props.history))

                             //reset
                                setUser('')
                                setEmail('')
                                setPass('')
                                setBname('')
                                setAddress('')
                                
                              
               }else{
                       console.log(errors)
                       setFormErrors(errors)
    
               }

        }
    return(
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-sm-8 col-lg-5 card bg-dark">
                    <h2 className="text-center mt-3 text-white">REGISTER</h2>
                <form className="card-body" onSubmit={handleSubmit}>
                {formErrors.name && <small style={{color:"yellow"}}>{formErrors.name}</small>}{formErrors.namelength && <small style={{color:"yellow"}}>{formErrors.namelength}</small>}
                <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className='fas fa-user-alt'></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" onChange={handleChange} name="user" value={user} />
                </div>
                {formErrors.email && <small style={{color:"yellow"}}>{formErrors.email}</small>}{formErrors.vemail && <small style={{color:"yellow"}}>{formErrors.vemail}</small>}
                <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-envelope"></i></span>
                        </div>
                        <input type="email" className="form-control" placeholder="Email" onChange={handleChange} name="email" value={email} />
                </div>
                {formErrors.pass && <small style={{color:"yellow"}}>{formErrors.pass}</small>}{formErrors.vpass && <small style={{color:"yellow"}}>{formErrors.vpass}</small>}
                <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-user-secret"></i></span>
                        </div>
                        <input type="password" className="form-control" placeholder="Password" onChange={handleChange} name="pass"  value={pass}/>
                </div>
                <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-suitcase"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Business Name" onChange={handleChange} name="bname" value={bname} required />
                </div>
                <div className="input-group mb-3">
                        <textarea type="text" className="form-control" placeholder="Address" onChange={handleChange} name="address" value={address} required />
                </div>
                <div className="input-group mb-3">
                        <input type="submit" className="btn btn-success mx-auto" value="Register"/>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Register
