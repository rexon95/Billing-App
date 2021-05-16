import React from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { startProfile } from '../actions/startProfile'



const Profile = (props) =>{

    const user = useSelector((state)=>{
        return state.user
    })

    // console.log('from comp',user)
     
      const dispatch = useDispatch()

    useEffect(()=>{
         dispatch(startProfile())
    },[])
   
    const fontStyle = {
        fontSize : "20px"
    }
    return(
         <>
        {Object.keys(user).length !== 0 && <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center"><h2>Profile</h2></div>
                        <div className="card-body">
                            <span className="card-title" style={{fontSize:"20px"}}><b>Admin Name : </b></span><span className="card-text" style={fontStyle}>{user.username}</span><br/><br/>
                            <span className="card-title" style={{fontSize:"20px"}}><b>Email : </b></span><span className="card-text" style={fontStyle}>{user.email}</span><br/><br/>
                            <span className="card-title" style={{fontSize:"20px"}}><b>Business Name : </b></span><span className="card-text" style={fontStyle}>{user.businessName}</span><br/><br/>
                            <span className="card-title" style={{fontSize:"20px"}}><b>Address : </b></span><span className="card-text" style={fontStyle}>{user.address}</span>
                        </div>
                    </div>
            </div>

        </div>}
        </>
    )
}

export default Profile