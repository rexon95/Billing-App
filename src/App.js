import React,{useState,useEffect} from 'react'
import configureStore from './store/configureStore'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import { Redirect } from 'react-router-dom'


// const store = configureStore()
// console.log(store)

const App = (props) =>{
  const [loggedIn,setLoggedIn] = useState(false)

  const handleAuth = () =>{
    setLoggedIn(!loggedIn)
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      handleAuth()
    }
  },[])

  return(
    <div className="container-fluid" style={{margin: 0,padding: 0}}>
      <Navbar loggedIn={loggedIn} handleAuth={handleAuth}/>
      {loggedIn? <Dashboard loggedIn={loggedIn} /> : <Redirect to="/"/>}
    </div>
  )
}
export default App;
