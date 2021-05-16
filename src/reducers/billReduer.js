const initialState = []

const billReducer = (state=initialState,action) =>{

     switch(action.type) {
         
        case 'GETBILLS' : {
             return [...action.payload].reverse()
        }

        case 'ADDBILL' : {
             return [{...action.payload}, ...state]
        }

        case 'DELETEBILL' : {
             return [...action.payload]
        }

        default : {
            return state
        }
     }
}

export default billReducer