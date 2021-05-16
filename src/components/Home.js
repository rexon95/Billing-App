import React from 'react'

const mystyle = {

    marginTop : "150px"
}

const Home = (props) =>{

  
    return(
        <div className="row">
            <div className="col-md-6 offset-md-3">
        <div className="jumbotron bg-success" style={mystyle}>
            <h1 className="display-4 text-white">Welcome! to Billing App</h1>
        </div>
            </div>
        </div>
        )


}

export default Home