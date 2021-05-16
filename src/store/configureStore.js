import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import billReducer from '../reducers/billReduer'
import cxReducer from '../reducers/cxReducer'
import loginReducer from '../reducers/loginReducer'
import proReducer from '../reducers/proReducers'


const configureStore = (props) =>{

const store = createStore(combineReducers({
      
      user : loginReducer,
      customers : cxReducer,
      products : proReducer,
      bills : billReducer
       
}),applyMiddleware(thunk))

 return store
}

export default configureStore