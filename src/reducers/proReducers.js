const initialState = []

const proReducer = (state=initialState,action) =>{

     switch(action.type) {
         
        case 'SETPRO' : {
             return [...action.payload].reverse()
        }
        case 'ADDPRO' : {
            return [{...action.payload}, ...state]
        }
        case 'PRODELETE' : {
            return [...action.payload]
        }
        case 'PROEDIT' : {
            return  state.map(ele=>{
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

export default proReducer