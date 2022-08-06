const initialData = {
    token: null
}

const loginReducer = (state=initialData,action) =>{
    switch(action.type){
        case "LOGIN_SUCCESS":
        console.log("running inside login success");
        return{
            ...state,
            token: action.payload
        }
        default :
            return state;
    }
}
export default loginReducer
