import React from 'react'

const mystyle = {

    marginTop : "30px"
}

const Home = (props) =>{

  
    return(
        <>
          <div className="row mt-3">
            <div className="col-md-6 offset-md-3">
                  <div className="card">
                        <div className="card-header bg-secondary">
                              <h4 className="text-white">App test Credentials</h4>
                        </div>
                        <div className="card-body">
                            <b>Please use the below details to test the App</b>
                             <div>
                                 <br/>
                                 <p><b>Email : </b>adminr@gmail.com</p>
                                 <p><b>password : </b>1234567890</p>
                             </div>
                    
                        </div>
                  </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 offset-md-3">
        <div className="jumbotron bg-success" style={mystyle}>
            <h1 className="display-4 text-white">Welcome! to Billing App</h1>
        </div>
            </div>
        </div>

        </>
        )


}

export default Home