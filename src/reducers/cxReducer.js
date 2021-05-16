const initialState = []

const cxReducer = (state=initialState,action) =>{

     switch(action.type) {
         
        case 'SETCX' : {
             return [...action.payload].reverse()
        }

        case 'ADD' : {
             return [{...action.payload}, ...state]
        }
        case 'DELETE' : {
             return [...action.payload]
        }
        case 'EDIT' : {
             return state.map(ele=>{
                  if(ele._id === action.payload._id){
                       return {...ele,...action.payload}
                  }else{
                       return {...ele}
                  }
             })
        }


        default : {
            return state
        }
     }
}

export default cxReducer