const initialState = {}

const loginReducer = (state=initialState,action) =>{

     switch(action.type) {
         
        case 'SETUSER' : {
             return {...action.payload}
        }

        default : {
            return state
        }
     }
}

export default loginReducer