const DarkModeReducer = (state,action)=>{
    switch (action.type) {
        case "LIGHT":{
            return{
                darkMode:false,
            }
        }
        case "DARK":{
            return{
                darkMode:true,
            }
        }
        case "TOGGLE":{
            return{
                darkMode:!state.darkMode
            }
        }
            
            break;
    
        default:
            return state;
            break;
    }
}

export default DarkModeReducer;